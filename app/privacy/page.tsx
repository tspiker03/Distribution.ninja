import React from 'react';

// Optional: Define metadata for App Router
export const metadata = {
  title: 'Privacy Policy - Distributions Ninja',
  description: 'Privacy Policy for the Distributions Ninja website.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <article className="prose lg:prose-xl max-w-none">
        <h1>Privacy Policy</h1>
        <p>Last updated: May 4, 2025</p> {/* Update date as needed */}

        <p>
          Welcome to Distributions Ninja. This Privacy Policy explains how we handle
          information when you visit our website.
        </p>

        <h2>Information We Collect</h2>
        <p>
          Currently, Distributions Ninja is a static content website with interactive
          components. We do not require user accounts, and we do not intentionally
          collect personally identifiable information (PII) such as your name, email
          address, or phone number directly through the website interface for browsing.
        </p>
        <p>
          We may use standard web server logs and analytics tools (like Vercel Analytics,
          if enabled) which might collect non-personally identifiable information such as:
        </p>
        <ul>
          <li>Your IP address (often anonymized or aggregated)</li>
          <li>Browser type and version</li>
          <li>Operating system</li>
          <li>Referring website</li>
          <li>Pages visited on our site and time spent</li>
          <li>Date and time of access</li>
        </ul>
        <p>
          This data is used in aggregate form to understand website traffic, improve user
          experience, and maintain site security.
        </p>

        <h2>Cookies</h2>
        <p>
          We currently do not use cookies for tracking or user identification purposes.
          Future features (like user accounts or preferences) might require cookies,
          and this policy will be updated accordingly.
        </p>

        <h2>Third-Party Services</h2>
        <p>
          We use Vercel for hosting. Vercel may collect data as described in their
          own privacy policy. We may embed content or use libraries from third parties
          (e.g., for LaTeX rendering, plotting), which might have their own data practices.
        </p>

        <h2>Data Usage</h2>
        <p>
          Any collected non-PII data is used solely for:
        </p>
        <ul>
          <li>Operating and maintaining the website.</li>
          <li>Analyzing website usage to improve content and functionality.</li>
          <li>Ensuring security and preventing abuse.</li>
        </ul>

        <h2>Data Sharing</h2>
        <p>
          We do not sell, trade, or rent any collected information to third parties.
          Aggregate, anonymized usage data might be shared for reporting purposes.
          We may disclose information if required by law.
        </p>

        <h2>Contributions via GitHub</h2>
        <p>
          Content contributions are managed via GitHub. Your activity on GitHub
          (forks, pull requests, issues) is subject to GitHub's Privacy Statement
          and Terms of Service.
        </p>

        <h2>Children's Privacy</h2>
        <p>
          Our website is not directed at children under the age of 13. We do not
          knowingly collect PII from children under 13.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of
          any changes by posting the new Privacy Policy on this page and updating the
          "Last updated" date.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please open an issue
          on our{' '}
          <a href="[YOUR_GITHUB_REPO_URL]/issues" target="_blank" rel="noopener noreferrer">
            GitHub repository
          </a>.
        </p>
      </article>
    </div>
  );
}
