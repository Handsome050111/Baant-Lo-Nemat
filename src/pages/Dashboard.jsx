import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { impactStats } from '../data/mockData';
import { TrendingUp, Users, Utensils, Award } from 'lucide-react';

export const DashboardPage = () => {
    return (
        <div className="bg-gray-50 min-h-[calc(100vh-4rem)]">
            <div className="container mx-auto px-4 py-12 max-w-6xl">
                <div className="mb-10 text-center md:text-left">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Impact Dashboard</h1>
                    <p className="text-gray-600">Real-time statistics on how Baant Lo Nemat is making a difference.</p>
                </div>

                {/* Top Stats Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <Card className="border-l-4 border-l-primary-500 shadow-sm">
                        <CardContent className="p-6 flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-500 mb-1">Meals Delivered</p>
                                <h3 className="text-3xl font-bold text-gray-900">{impactStats.mealsDelivered}</h3>
                            </div>
                            <div className="p-3 bg-primary-50 rounded-full">
                                <Utensils className="w-6 h-6 text-primary-600" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-secondary-500 shadow-sm">
                        <CardContent className="p-6 flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-500 mb-1">Items Funded</p>
                                <h3 className="text-3xl font-bold text-gray-900">{impactStats.itemsFunded}</h3>
                            </div>
                            <div className="p-3 bg-secondary-50 rounded-full">
                                <Award className="w-6 h-6 text-secondary-600" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-green-500 shadow-sm">
                        <CardContent className="p-6 flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-500 mb-1">Beneficiaries Served</p>
                                <h3 className="text-3xl font-bold text-gray-900">{impactStats.beneficiariesServed}</h3>
                            </div>
                            <div className="p-3 bg-green-50 rounded-full">
                                <Users className="w-6 h-6 text-green-600" />
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Charts / Details Area */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <Card className="shadow-sm">
                        <CardHeader className="border-b border-gray-100 pb-4">
                            <CardTitle className="flex items-center gap-2 text-lg">
                                <TrendingUp className="w-5 h-5 text-gray-500" />
                                Donation Trends (Monthly)
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 flex items-center justify-center min-h-[300px] bg-gray-50/50">
                            <div className="text-center text-gray-400">
                                {/* Mock Chart Placeholder */}
                                <div className="flex items-end gap-3 h-48 mb-4 border-b border-l border-gray-300 p-4">
                                    <div className="w-12 bg-primary-200 rounded-t h-[40%]"></div>
                                    <div className="w-12 bg-primary-300 rounded-t h-[60%]"></div>
                                    <div className="w-12 bg-primary-400 rounded-t h-[45%]"></div>
                                    <div className="w-12 bg-primary-500 rounded-t h-[80%]"></div>
                                    <div className="w-12 bg-primary-600 rounded-t h-[95%]"></div>
                                </div>
                                <p className="text-sm">Interactive charts will be rendered here.</p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="shadow-sm">
                        <CardHeader className="border-b border-gray-100 pb-4">
                            <CardTitle className="text-lg">Recent Verified Interventions</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <div className="divide-y divide-gray-100">
                                {[
                                    { title: '100 Blankets Distributed', location: 'Quetta', time: '2 hours ago', status: 'Verified' },
                                    { title: 'Emergency Ration Packs', location: 'Karachi South', time: '5 hours ago', status: 'Verified' },
                                    { title: '500 Meals Rescued', location: 'Lahore Event Hall', time: '1 day ago', status: 'Verified' },
                                    { title: 'Water Cooler Installed', location: 'Multan Hospital', time: '1 day ago', status: 'Verified' },
                                ].map((item, i) => (
                                    <div key={i} className="p-4 hover:bg-gray-50 transition-colors flex justify-between items-center">
                                        <div>
                                            <h4 className="font-medium text-gray-900">{item.title}</h4>
                                            <p className="text-sm text-gray-500">{item.location} • {item.time}</p>
                                        </div>
                                        <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800">
                                            {item.status}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};
