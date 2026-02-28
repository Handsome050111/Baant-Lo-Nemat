import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { CheckCircle2, Building2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const RegisterFoundationPage = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div className="container mx-auto px-4 py-20 flex justify-center min-h-[60vh]">
                <Card className="max-w-md w-full text-center border-none shadow-lg">
                    <CardContent className="pt-12 pb-8 px-8">
                        <div className="mx-auto w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                            <CheckCircle2 className="w-8 h-8 text-primary-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Registration Submitted</h2>
                        <p className="text-gray-600 mb-8">
                            Thank you for applying to join Baant Lo Nemat. Our team will review your application and contact you within 2-3 business days to complete the verification process.
                        </p>
                        <Button className="w-full" onClick={() => navigate('/')}>
                            Return to Home
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
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full mb-4">
                        <Building2 className="w-6 h-6 text-primary-600" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Register Your Foundation</h1>
                    <p className="text-gray-600">
                        Join our network of verified NGOs to receive direct donations and surplus food from the community.
                    </p>
                </div>

                <Card className="shadow-md">
                    <CardHeader>
                        <CardTitle>Foundation Details</CardTitle>
                        <CardDescription>
                            Please provide accurate information. This will be used for our initial verification process.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form id="register-foundation-form" onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-900">Foundation Name</label>
                                    <input
                                        required
                                        type="text"
                                        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                        placeholder="e.g., Hope Welfare Trust"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-900">Registration Number</label>
                                        <input
                                            required
                                            type="text"
                                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                            placeholder="Government ID / Reg No."
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-900">Year Established</label>
                                        <input
                                            required
                                            type="number"
                                            min="1900"
                                            max={new Date().getFullYear()}
                                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                            placeholder="YYYY"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-900">Primary Focus Areas</label>
                                    <input
                                        required
                                        type="text"
                                        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                        placeholder="e.g., Food Distribution, Medical Care, Education"
                                    />
                                </div>

                                <div className="space-y-2 pt-4 border-t border-gray-100">
                                    <h3 className="text-sm font-semibold text-gray-900 mb-3">Contact Information</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-900">Official Email</label>
                                            <input
                                                required
                                                type="email"
                                                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                                placeholder="contact@foundation.org"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-900">Phone Number</label>
                                            <input
                                                required
                                                type="tel"
                                                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                                placeholder="03XXXXXXXXX"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-900">Head Office Address</label>
                                    <textarea
                                        required
                                        rows="3"
                                        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                        placeholder="Complete physical address"
                                    ></textarea>
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="bg-gray-50 border-t border-gray-100 rounded-b-xl py-6">
                        <Button type="submit" form="register-foundation-form" className="w-full text-base font-semibold">
                            Submit Application
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};
