import React from 'react';

// Optional: Define metadata for App Router
export const metadata = {
  title: 'About - Distributions Ninja',
  description: 'Learn more about the Distributions Ninja project.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <article className="prose lg:prose-xl max-w-none">
        <h1>About Distributions Ninja</h1>
        <p>
          Welcome to Distributions Ninja! Our mission is to be the premier online destination
          for students, educators, researchers, data scientists, and practitioners seeking
          to understand, visualize, and apply statistical distributions.
        </p>
        <p>
          Information about statistical distributions is often fragmented across textbooks,
          websites, and software documentation. We aim to provide a comprehensive,
          interactive, and authoritative resource all in one place.
        </p>
        <h2>Features</h2>
        <ul>
          <li>Detailed pages for numerous statistical distributions.</li>
          <li>Clear explanations of properties, formulas, and parameter estimation.</li>
          <li>Static visualizations illustrating parameter effects.</li>
          <li>Practical code examples in R and Python.</li>
          <li>(Coming Soon) An interactive chatbot to answer questions about page content.</li>
        </ul>
        <h2>Technology</h2>
        <p>
          This site is built with Next.js, React, and Tailwind CSS, leveraging Static Site
          Generation (SSG) for fast performance. Content is managed via Markdown files.
        </p>
        {/* Add more content as needed */}
      </article>
    </div>
  );
}
