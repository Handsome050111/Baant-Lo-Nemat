import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { Heart, ShieldCheck, Utensils, HandHeart } from 'lucide-react';

export const LandingPage = () => {
    return (
        <div className="flex flex-col min-h-[calc(100vh-4rem)]">
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-primary-50 to-white py-20 lg:py-32">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <div className="inline-flex items-center justify-center p-3 bg-primary-100 rounded-full mb-6">
                        <Heart className="w-8 h-8 text-primary-600" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
                        Share Blessings, <span className="text-primary-600">Transform Lives</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                        Baant Lo Nemat connects surplus food and generous donors directly with verified foundations. Reducing food waste while fulfilling genuine needs.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" asChild className="w-full sm:w-auto text-base">
                            <Link to="/directory">Donate Now</Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild className="w-full sm:w-auto text-base">
                            <Link to="/register">Register Foundation</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">How it Works</h2>
                        <p className="text-gray-600 max-w-xl mx-auto">
                            A transparent, efficient platform ensuring your contributions reach those who need them most.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <Card className="border-none shadow-sm bg-gray-50/50">
                            <CardContent className="pt-8 text-center">
                                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                                    <ShieldCheck className="w-6 h-6 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Verified Foundations</h3>
                                <p className="text-gray-600">
                                    We rigorously vet every foundation on our platform, calculating dynamic Trust Scores to ensure complete transparency.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-sm bg-gray-50/50">
                            <CardContent className="pt-8 text-center">
                                <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                    <Utensils className="w-6 h-6 text-green-600" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Food Redistribution</h3>
                                <p className="text-gray-600">
                                    Restaurants, event hosts, and individuals can instantly notify nearby charities to rescue surplus food from going to waste.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-sm bg-gray-50/50">
                            <CardContent className="pt-8 text-center">
                                <div className="mx-auto w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                                    <HandHeart className="w-6 h-6 text-primary-600" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Needs-Based Giving</h3>
                                <p className="text-gray-600">
                                    Browse specific, active needs requested by foundations—from medical supplies to rations—and fund exactly what is required.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
};
