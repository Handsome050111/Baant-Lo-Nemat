import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { CheckCircle2, Utensils } from 'lucide-react';

export const FoodDonationPage = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div className="container mx-auto px-4 py-20 flex justify-center min-h-[60vh]">
                <Card className="max-w-md w-full text-center border-none shadow-lg">
                    <CardContent className="pt-12 pb-8 px-8">
                        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                            <CheckCircle2 className="w-8 h-8 text-green-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Donation Alert Sent!</h2>
                        <p className="text-gray-600 mb-8">
                            Nearby foundations have been notified about your food donation. They will contact you shortly to coordinate pickup.
                        </p>
                        <Button className="w-full" onClick={() => setIsSubmitted(false)}>
                            Submit Another Request
                        </Button>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-12 flex justify-center">
            <div className="max-w-2xl w-full">
                <div className="text-center mb-10">
                    <div className="inline-flex justify-center items-center w-12 h-12 rounded-full bg-primary-100 mb-4">
                        <Utensils className="w-6 h-6 text-primary-600" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Donate Surplus Food</h1>
                    <p className="text-gray-600">For restaurants, event hosts, and caterers to notify charities of available food.</p>
                </div>

                <Card className="shadow-md">
                    <CardHeader>
                        <CardTitle>Donation Details</CardTitle>
                        <CardDescription>Provide details to help foundations plan the pickup.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form id="food-donation-form" onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-900">Food Type</label>
                                    <select required className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                                        <option value="">Select type...</option>
                                        <option value="cooked">Cooked Meals (Events/Restaurants)</option>
                                        <option value="raw">Raw Ingredients/Ration</option>
                                        <option value="bakery">Bakery Items</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-900">Estimated Quantity</label>
                                    <input required type="text" placeholder="e.g. 50 persons / 20 kg" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-900">Pickup Location or Address</label>
                                <textarea required rows="3" placeholder="Enter complete address" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"></textarea>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-900">Pickup Time Window</label>
                                    <select required className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                                        <option value="immediate">Immediate (within 1-2 hours)</option>
                                        <option value="today">Sometime Today</option>
                                        <option value="tomorrow">Tomorrow Morning</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-900">Contact Number</label>
                                    <input required type="tel" placeholder="03XXXXXXXXX" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="bg-gray-50 border-t border-gray-100 rounded-b-xl py-4 mt-4">
                        <Button type="submit" form="food-donation-form" className="w-full md:w-auto ml-auto">
                            Submit Request
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};
