// This is now a Server Component by default (no 'use client')
import React from 'react';
import Head from 'next/head';
import { getAllDistributionsSummary } from '@/lib/distributions';
import DistributionsListClient from '@/components/DistributionsListClient'; // Import the Client Component

// Fetch data on the server during rendering
async function getData() {
    // Note: In Next.js App Router, direct async calls in Server Components are common.
    // For SSG-like behavior, you might use generateStaticParams if needed,
    // but for a simple list fetched at request/build time, this is fine.
    const allDistributions = getAllDistributionsSummary();
    return allDistributions;
}

export default async function DistributionsListPage() {
    const allDistributions = await getData(); // Fetch data server-side

    return (
        <>
            {/* Head component might need adjustment in App Router,
                often handled by metadata export now. Leaving for now. */}
            <Head>
                <title>Distributions - Distributions Ninja</title>
                <meta name="description" content="Browse and search statistical distributions." />
            </Head>

            <div className="container mx-auto p-4 md:p-8">
                <h1 className="text-3xl font-bold mb-6">Statistical Distributions</h1>

                {/* Render the Client Component, passing fetched data */}
                <DistributionsListClient allDistributions={allDistributions} />

            </div>
        </>
    );
}

// Optional: Define metadata for App Router
// export const metadata = {
//   title: 'Distributions - Distributions Ninja',
//   description: 'Browse and search statistical distributions.',
// };
