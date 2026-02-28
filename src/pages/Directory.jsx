import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { mockFoundations } from '../data/mockData';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Search, ShieldCheck } from 'lucide-react';

export const DirectoryPage = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredFoundations = mockFoundations.filter(f =>
        f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        f.needsSummary.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Verified Foundations</h1>
                    <p className="text-gray-600">Support verified organizations and their active needs.</p>
                </div>

                <div className="relative w-full md:w-96">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                        placeholder="Search foundations or needs..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredFoundations.map(foundation => (
                    <Card key={foundation.id} className="flex flex-col h-full hover:border-primary-300">
                        <CardHeader className="pb-4 border-b border-gray-100">
                            <div className="flex justify-between items-start mb-2">
                                <CardTitle className="text-lg">{foundation.name}</CardTitle>
                                <div className="flex items-center gap-1 bg-green-50 text-green-700 px-2.5 py-1 rounded-full text-xs font-semibold border border-green-200">
                                    <ShieldCheck className="w-3 h-3" />
                                    Score: {foundation.trustScore}
                                </div>
                            </div>
                            <CardDescription className="line-clamp-2">
                                {foundation.description}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="py-4 flex-grow">
                            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Top Needs</h4>
                            <div className="flex flex-wrap gap-2">
                                {foundation.needsSummary.split(', ').map((need, idx) => (
                                    <Badge key={idx} variant="secondary" className="font-normal">
                                        {need}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter className="pt-0 pb-6 mt-auto">
                            <Button className="w-full text-sm" asChild>
                                <Link to={`/foundation/${foundation.id}`}>View Details & Donate</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
                {filteredFoundations.length === 0 && (
                    <div className="col-span-full py-12 text-center text-gray-500">
                        No foundations found matching your search.
                    </div>
                )}
            </div>
        </div>
    );
};
