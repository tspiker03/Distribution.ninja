import React from 'react';
import Link from 'next/link';

// Optional: Define metadata for App Router
export const metadata = {
  title: 'Contribution Guide - Distributions Ninja',
  description: 'Learn how to contribute content to Distributions Ninja.',
};

export default function ContributionGuidePage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <article className="prose lg:prose-xl max-w-none">
        <h1>Contribution Guide</h1>
        <p>
          We welcome contributions to expand and improve the content on Distributions Ninja!
          The primary way to contribute is by adding or editing the Markdown files that define
          each distribution's page content.
        </p>
        <p>
          Our detailed contribution guidelines, including the required Markdown template,
          workflow, and code style recommendations, can be found in the{' '}
          <a
            href="[YOUR_GITHUB_REPO_URL]/blob/main/CONTRIBUTING.md" // Link to the file in the repo
            target="_blank"
            rel="noopener noreferrer"
          >
            CONTRIBUTING.md file on GitHub
          </a>.
        </p>
        <p>
          Please review the guide carefully before submitting a Pull Request.
        </p>
        <h2>Quick Links</h2>
        <ul>
          <li>
            <a href="[YOUR_GITHUB_REPO_URL]" target="_blank" rel="noopener noreferrer">
              Project Repository on GitHub
            </a>
          </li>
          <li>
            <a href="[YOUR_GITHUB_REPO_URL]/issues" target="_blank" rel="noopener noreferrer">
              Report an Issue or Suggest an Improvement
            </a>
          </li>
           <li>
            <Link href="/distributions">Browse Existing Distributions</Link>
          </li>
        </ul>
      </article>
    </div>
  );
}
