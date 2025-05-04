import React from 'react';

// Optional: Define metadata for App Router
export const metadata = {
  title: 'Contact Us - Distributions Ninja',
  description: 'Get in touch with the Distributions Ninja team.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <article className="prose lg:prose-xl max-w-none">
        <h1>Contact Us</h1>
        <p>
          Thank you for your interest in Distributions Ninja.
        </p>
        <p>
          For questions, feedback, or suggestions, please open an issue on our{' '}
          <a href="[YOUR_GITHUB_REPO_URL]/issues" target="_blank" rel="noopener noreferrer">
            GitHub repository
          </a>.
        </p>
        <p>
          For content contributions, please see our{' '}
          <a href="/contribution-guide">Contribution Guide</a>.
        </p>
        {/* Add a contact form or email address later if needed */}
      </article>
    </div>
  );
}
