import React from 'react';

// Optional: Define metadata for App Router
export const metadata = {
  title: 'Terms of Service - Distributions Ninja',
  description: 'Terms of Service for the Distributions Ninja website.',
};

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <article className="prose lg:prose-xl max-w-none">
        <h1>Terms of Service</h1>
        <p>Last updated: May 4, 2025</p> {/* Update date as needed */}

        <p>
          Welcome to Distributions Ninja ("Site", "we", "us", "our"). By accessing or
          using our Site, you agree to be bound by these Terms of Service ("Terms").
          If you disagree with any part of the terms, then you may not access the Site.
        </p>

        <h2>Use License</h2>
        <p>
          Permission is granted to temporarily view the materials (information or
          software) on Distributions Ninja's website for personal, non-commercial
          transitory viewing only. This is the grant of a license, not a transfer of
          title, and under this license you may not:
        </p>
        <ul>
          <li>Modify or copy the materials for redistribution (unless permitted by specific licenses associated with the content, e.g., code examples);</li>
          <li>Attempt to decompile or reverse engineer any software contained on the Site (excluding standard browser inspection);</li>
          <li>Remove any copyright or other proprietary notations from the materials; or</li>
          <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
        </ul>
        <p>
          This license shall automatically terminate if you violate any of these
          restrictions and may be terminated by Distributions Ninja at any time.
        </p>

         <h2>Content Accuracy and Disclaimer</h2>
        <p>
          The materials appearing on Distributions Ninja's website could include
          technical, typographical, or photographic errors. While we strive for
          accuracy (see NF1 in PRD), Distributions Ninja does not warrant that any of
          the materials on its website are accurate, complete, or current.
        </p>
        <p>
          The materials on Distributions Ninja's website are provided on an 'as is'
          basis. Distributions Ninja makes no warranties, expressed or implied, and
          hereby disclaims and negates all other warranties including, without
          limitation, implied warranties or conditions of merchantability, fitness
          for a particular purpose, or non-infringement of intellectual property or
          other violation of rights.
        </p>
        <p>
          Further, Distributions Ninja does not warrant or make any representations
          concerning the accuracy, likely results, or reliability of the use of the
          materials on its website or otherwise relating to such materials or on any
          sites linked to this site. The content is for educational purposes only and
          should not be considered professional advice. Always consult with a qualified
          professional for specific advice related to your situation.
        </p>

        <h2>Limitations</h2>
        <p>
          In no event shall Distributions Ninja or its suppliers or contributors be liable
          for any damages (including, without limitation, damages for loss of data or
          profit, or due to business interruption) arising out of the use or inability
          to use the materials on Distributions Ninja's website, even if Distributions
          Ninja or a Distributions Ninja authorized representative has been notified
          orally or in writing of the possibility of such damage.
        </p>

        <h2>Links</h2>
        <p>
          Distributions Ninja has not reviewed all of the sites linked to its website
          and is not responsible for the contents of any such linked site. The inclusion
          of any link does not imply endorsement by Distributions Ninja of the site.
          Use of any such linked website is at the user's own risk.
        </p>

        <h2>Contributions</h2>
        <p>
          Content contributions submitted via GitHub are subject to the contribution
          guidelines outlined in the CONTRIBUTING.md file and potentially additional
          licensing terms specified there (e.g., contributions licensed under CC-BY-SA
          or similar). By submitting contributions, you grant Distributions Ninja the
          necessary rights to use, modify, and distribute your contribution as part of
          the Site.
        </p>

        <h2>Modifications</h2>
        <p>
          Distributions Ninja may revise these terms of service for its website at any
          time without notice. By using this website you are agreeing to be bound by
          the then current version of these terms of service.
        </p>

        <h2>Governing Law</h2>
        <p>
          These terms and conditions are governed by and construed in accordance with
          the laws of [Your Jurisdiction - e.g., California, USA] and you irrevocably
          submit to the exclusive jurisdiction of the courts in that State or location.
          (Note: Consult legal advice for appropriate jurisdiction).
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about these Terms, please open an issue on our{' '}
          <a href="[YOUR_GITHUB_REPO_URL]/issues" target="_blank" rel="noopener noreferrer">
            GitHub repository
          </a>.
        </p>
      </article>
    </div>
  );
}
