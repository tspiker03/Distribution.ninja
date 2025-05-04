import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
// import html from 'remark-html'; // No longer needed directly
import remarkMath from 'remark-math';
import remarkRehype from 'remark-rehype'; // Add remark-rehype
import rehypeKatex from 'rehype-katex';
import rehypeStringify from 'rehype-stringify';

// Define the path to the content directory
const distributionsDirectory = path.join(process.cwd(), 'content/distributions');

// Define the structure of the frontmatter metadata
// Based on contribution.md template
export interface DistributionFrontmatter {
    title: string;
    slug: string;
    keywords: string[];
    aliases?: string[];
    distribution_type: 'continuous' | 'discrete';
    dimensionality: 'univariate' | 'bivariate';
    plot_function_handler: {
        type: 'scipy' | 'custom_python' | 'sympy';
        identifier: string;
    };
    parameters: {
        name: string;
        label: string;
        min: number;
        max: number;
        step: number;
        default: number;
    }[];
    plot_range_hints?: {
        x_min_relative_to_mean?: number;
        x_max_relative_to_mean?: number;
        x_min?: number;
        x_max?: number;
    };
    related_distributions?: string[];
}

// Define structure for summary data used in listings/search
export interface DistributionSummary {
    title: string;
    slug: string;
    keywords: string[];
}

// Define the structure for the full distribution data
export interface DistributionData extends DistributionFrontmatter {
    contentHtml: string; // Processed Markdown content
}

/**
 * Gets all distribution slugs (filenames without .md)
 * Used for generateStaticParams
 */
export function getAllDistributionSlugs() {
    try {
        const fileNames = fs.readdirSync(distributionsDirectory);
        return fileNames
            .filter(fileName => fileName.endsWith('.md')) // Ensure we only process markdown files
            .map(fileName => ({
                slug: fileName.replace(/\.md$/, ''),
            }));
    } catch (error) {
        console.error("Error reading distributions directory:", error);
        return []; // Return empty array on error
    }
}

/**
 * Gets the full data for a single distribution based on its slug.
 * Reads the .md file, parses frontmatter, and converts markdown to HTML.
 * @param slug The distribution slug (filename without .md)
 */
export async function getDistributionData(slug: string): Promise<DistributionData | null> {
    const fullPath = path.join(distributionsDirectory, `${slug}.md`);
    try {
        if (!fs.existsSync(fullPath)) {
            console.warn(`Markdown file not found for slug: ${slug}`);
            return null; // Return null if file doesn't exist
        }

        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Use remark-rehype pipeline to convert markdown into HTML string with KaTeX
        const processedContent = await remark()
            .use(remarkMath) // 1. Parse math syntax
            .use(remarkRehype) // 2. Convert MDAST to HAST
            .use(rehypeKatex) // 3. Render math in HAST using KaTeX
            .use(rehypeStringify) // 4. Convert HAST back to HTML string
            .process(matterResult.content);
        const contentHtml = processedContent.toString();

        // Combine the data with the slug and contentHtml
        // Type assertion needed as gray-matter doesn't know the specific structure
        const frontmatter = matterResult.data as DistributionFrontmatter;

        // Basic validation (can be expanded)
        if (!frontmatter.title || !frontmatter.slug || frontmatter.slug !== slug) {
             console.error(`Frontmatter validation failed for slug: ${slug}. Check title and slug.`);
             // Decide how to handle validation failure, e.g., return null or throw error
             return null;
        }


        return {
            ...frontmatter,
            contentHtml,
        };
    } catch (error) {
        console.error(`Error processing distribution data for slug ${slug}:`, error);
        return null; // Return null on error
    }
}

/**
 * Gets summary data (title, slug, keywords) for all distributions.
 * Reads all .md files and parses only the frontmatter.
 */
export function getAllDistributionsSummary(): DistributionSummary[] {
    const summaries: DistributionSummary[] = [];
    try {
        const fileNames = fs.readdirSync(distributionsDirectory);

        for (const fileName of fileNames) {
            if (!fileName.endsWith('.md')) {
                continue; // Skip non-markdown files
            }

            const slug = fileName.replace(/\.md$/, '');
            const fullPath = path.join(distributionsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');

            try {
                 // Use gray-matter to parse only the frontmatter
                const matterResult = matter(fileContents);
                const frontmatter = matterResult.data as DistributionFrontmatter;

                // Basic validation
                if (frontmatter.title && frontmatter.slug && frontmatter.keywords) {
                     summaries.push({
                        title: frontmatter.title,
                        slug: frontmatter.slug,
                        keywords: frontmatter.keywords,
                    });
                } else {
                    console.warn(`Skipping ${fileName}: Missing required frontmatter (title, slug, keywords).`);
                }
            } catch (parseError) {
                 console.error(`Error parsing frontmatter for ${fileName}:`, parseError);
            }
        }
        // Optional: Sort summaries alphabetically by title
        summaries.sort((a, b) => a.title.localeCompare(b.title));

        return summaries;

    } catch (error) {
        console.error("Error reading distributions directory for summaries:", error);
        return []; // Return empty array on error
    }
}
