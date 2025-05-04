import { notFound } from 'next/navigation';
import { getAllDistributionSlugs, getDistributionData, DistributionData } from '@/lib/distributions';
import Head from 'next/head';
// import InteractiveGraph from '@/components/InteractiveGraph'; // Removed component import

// Define the props for the page component
interface DistributionPageProps {
    params: {
        slug: string;
    };
}

// Generate static paths based on slugs from markdown files
// Equivalent to getStaticPaths in Pages Router
export async function generateStaticParams() {
    const slugs = getAllDistributionSlugs();
    // Ensure the returned format matches what Next.js expects for generateStaticParams
    // It should be an array of objects, where each object has the param name as key
    // e.g., [{ slug: 'normal-distribution' }, { slug: 'binomial-distribution' }]
    return slugs;
}

// Fetch data for a specific distribution slug
async function getData(slug: string): Promise<DistributionData | null> {
    const distributionData = await getDistributionData(slug);
    return distributionData;
}

// The page component
export default async function DistributionPage({ params }: DistributionPageProps) {
    const { slug } = params;
    const distributionData = await getData(slug);

    // If data fetch fails or file doesn't exist, show 404
    if (!distributionData) {
        notFound();
    }

    // TODO: Task 2.3 - Integrate LaTeX rendering for contentHtml
    // TODO: Task 3 - Add InteractiveGraph component here, passing parameters
    // TODO: Task 5 - Connect InteractiveGraph to backend API

    return (
        <>
            {/* Set page title dynamically */}
            <Head>
                <title>{distributionData.title} - Distributions Ninja</title>
                <meta name="description" content={`Learn about the ${distributionData.title}: properties, estimation, code examples, and interactive visualization.`} />
                {/* Add other relevant meta tags if needed */}
            </Head>

            <article className="prose lg:prose-xl max-w-none p-4 md:p-8"> {/* Basic styling with Tailwind Prose */}
                <h1>{distributionData.title}</h1>

                {/* Static Graph Images Placeholder */}
                <div className="my-8 p-4 border rounded bg-gray-50">
                    <h2>Visualizations</h2>
                    <p className="text-gray-600">
                        [Placeholder: Static images showing PDF/PMF/Scatter plots under various parameter settings will be displayed here.]
                    </p>
                    {/* TODO: Implement logic to display images based on frontmatter/convention */}
                </div>

                {/* Render the processed Markdown content */}
                {/* Ensure Tailwind Prose styles apply correctly */}
                {/* Note: LaTeX rendering needs to be added (Task 2.3) */}
                <div dangerouslySetInnerHTML={{ __html: distributionData.contentHtml }} />

                {/* Placeholder for RAG Chatbot (Future) */}
                {/* <div className="my-8 p-4 border rounded bg-blue-50">
                    <h2>Ask Questions</h2>
                    <p>[RAG Chatbot Placeholder - Future Task]</p>
                </div> */}
            </article>
        </>
    );
}

// Optional: Revalidate data periodically if content might change without redeploying
// export const revalidate = 60; // Revalidate every 60 seconds (ISR)
// Or keep it fully static (SSG) by omitting revalidate
