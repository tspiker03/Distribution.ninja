'use client'; // This component handles client-side state and interaction

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { DistributionSummary } from '@/lib/distributions'; // Import the type

interface DistributionsListClientProps {
    allDistributions: DistributionSummary[]; // Receive summaries as a prop
}

export default function DistributionsListClient({ allDistributions }: DistributionsListClientProps) {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredDistributions = useMemo(() => {
        if (!searchTerm) {
            return allDistributions;
        }
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        return allDistributions.filter(dist =>
            dist.title.toLowerCase().includes(lowerCaseSearchTerm) ||
            dist.slug.toLowerCase().includes(lowerCaseSearchTerm) ||
            (dist.keywords && dist.keywords.some(kw => kw.toLowerCase().includes(lowerCaseSearchTerm))) // Check if keywords exist
        );
    }, [searchTerm, allDistributions]);

    return (
        <>
            {/* Search Input */}
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Search distributions by name or keyword..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-2 border rounded shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            {/* Distributions List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredDistributions.length > 0 ? (
                    filteredDistributions.map(dist => (
                        <Link href={`/distributions/${dist.slug}`} key={dist.slug} legacyBehavior>
                            <a className="block p-4 border rounded hover:shadow-md hover:bg-gray-50 transition duration-150 ease-in-out">
                                <h2 className="text-xl font-semibold mb-1">{dist.title}</h2>
                                {dist.keywords && dist.keywords.length > 0 && (
                                     <div className="text-sm text-gray-600">
                                        Keywords: {dist.keywords.join(', ')}
                                    </div>
                                )}
                            </a>
                        </Link>
                    ))
                ) : (
                    <p className="text-gray-500">No distributions found matching your search.</p>
                )}
            </div>
        </>
    );
}
