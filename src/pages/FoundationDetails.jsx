import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getFoundationById } from '../data/mockData';
import { Button } from '../components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { ShieldCheck, ArrowLeft, Target } from 'lucide-react';

export const FoundationDetailsPage = () => {
    const { id } = useParams();
    const foundation = getFoundationById(id);

    if (!foundation) return <div className="text-center py-20">Foundation not found</div>;

    return (
        <div className="container mx-auto px-4 py-8 max-w-5xl">
            <Link to="/directory" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 mb-8 transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Directory
            </Link>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-8">
                <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-8 border-b border-gray-100">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <h1 className="text-3xl font-bold text-gray-900">{foundation.name}</h1>
                                {foundation.isVerified && (
                                    <Badge variant="default" className="bg-green-100 text-green-800 hover:bg-green-200">
                                        <ShieldCheck className="w-4 h-4 mr-1" /> Verified
                                    </Badge>
                                )}
                            </div>
                            <p className="text-gray-600 text-lg max-w-2xl">{foundation.description}</p>
                        </div>
                        <div className="flex flex-col items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100 min-w-[120px]">
                            <span className="text-sm text-gray-500 font-medium mb-1">Trust Score</span>
                            <span className="text-3xl font-bold text-green-600">{foundation.trustScore}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Target className="w-6 h-6 text-primary-500" /> Active Needs
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {foundation.needs.map(need => {
                        const progress = Math.min(100, (need.raised / need.required) * 100);

                        return (
                            <Card key={need.id} className="hover:shadow-md transition-shadow">
                                <CardHeader className="pb-4">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <Badge variant="secondary" className="mb-2 text-xs">{need.category}</Badge>
                                            <CardTitle className="text-xl">{need.item}</CardTitle>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="py-2">
                                    <div className="flex justify-between text-sm mb-2 font-medium">
                                        <span className="text-gray-600">PKR {need.raised.toLocaleString()} raised</span>
                                        <span className="text-gray-900">Goal: PKR {need.required.toLocaleString()}</span>
                                    </div>
                                    <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                                        <div
                                            className="bg-primary-500 h-2.5 rounded-full transition-all duration-500"
                                            style={{ width: `${progress}%` }}
                                        ></div>
                                    </div>
                                </CardContent>
                                <CardFooter className="pt-6">
                                    <Button className="w-full" asChild>
                                        <Link to="/checkout" state={{ foundationId: foundation.id, needId: need.id, needItem: need.item }}>
                                            Fund this Need
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
