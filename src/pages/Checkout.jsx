import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { CheckCircle2, Lock, HeartHandshake } from 'lucide-react';

export const CheckoutPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Try to get passed state, otherwise show fallback
    const foundationId = location.state?.foundationId || 'Unknown Foundation';
    const needItem = location.state?.needItem || 'General Donation';
    const needId = location.state?.needId;

    const [amount, setAmount] = useState('');
    const [isAnonymous, setIsAnonymous] = useState(false);

    const predefinedAmounts = [1000, 5000, 10000, 50000];

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div className="container mx-auto px-4 py-20 flex justify-center min-h-[60vh]">
                <Card className="max-w-md w-full text-center border-none shadow-lg">
                    <CardContent className="pt-12 pb-8 px-8">
                        <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                            <CheckCircle2 className="w-10 h-10 text-green-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Thank You!</h2>
                        <p className="text-gray-600 mb-6">
                            Your donation of <span className="font-semibold text-gray-900">PKR {Number(amount).toLocaleString()}</span> has been processed successfully.
                        </p>
                        <div className="bg-gray-50 p-4 rounded-lg mb-8 text-sm text-left">
                            <div className="flex justify-between mb-2">
                                <span className="text-gray-500">Transaction ID</span>
                                <span className="font-mono text-gray-900">#BLN-{Math.floor(Math.random() * 1000000)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Supporting</span>
                                <span className="font-medium text-gray-900">{needItem}</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Button onClick={() => navigate('/dashboard')}>View Impact Dashboard</Button>
                            <Button variant="outline" onClick={() => navigate('/directory')}>Discover More Needs</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-12 flex justify-center">
            <div className="max-w-xl w-full">
                <div className="mb-8 pl-1 border-l-4 border-primary-500">
                    <h1 className="text-2xl font-bold text-gray-900 ml-3">Secure Donation</h1>
                    <p className="text-gray-600 ml-3 flex items-center gap-1">
                        <HeartHandshake className="w-4 h-4 text-primary-500" /> Supporting {needItem}
                    </p>
                </div>

                <Card className="shadow-lg border-gray-200">
                    <CardHeader className="bg-gray-50 border-b border-gray-100 pb-5">
                        <CardTitle className="text-lg flex justify-between items-center">
                            Payment Details
                            <Badge variant="outline" className="text-gray-500 bg-white"><Lock className="w-3 h-3 mr-1" /> Secure</Badge>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                        <form id="checkout-form" onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-3">
                                <label className="text-sm font-semibold text-gray-900">Select Amount (PKR)</label>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                    {predefinedAmounts.map(preset => (
                                        <button
                                            key={preset}
                                            type="button"
                                            onClick={() => setAmount(preset)}
                                            className={`py-3 px-4 rounded-lg border font-medium transition-all ${Number(amount) === preset
                                                    ? 'border-primary-500 bg-primary-50 text-primary-700 ring-1 ring-primary-500'
                                                    : 'border-gray-200 bg-white text-gray-700 hover:border-primary-300 hover:bg-gray-50'
                                                }`}
                                        >
                                            {preset.toLocaleString()}
                                        </button>
                                    ))}
                                </div>
                                <div className="relative mt-2">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <span className="text-gray-500 sm:text-sm font-medium">PKR</span>
                                    </div>
                                    <input
                                        type="number"
                                        min="1"
                                        required
                                        className="block w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 text-lg transition-colors"
                                        placeholder="Enter custom amount"
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="space-y-4 pt-4 border-t border-gray-100">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-900">Full Name</label>
                                    <input
                                        type="text"
                                        required={!isAnonymous}
                                        disabled={isAnonymous}
                                        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:ring-primary-500 focus:border-primary-500 disabled:bg-gray-100 disabled:text-gray-400"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-900">Email Address <span className="text-gray-400 font-normal">(Receipts will be sent here)</span></label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:ring-primary-500 focus:border-primary-500"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center gap-2 pt-2">
                                <input
                                    type="checkbox"
                                    id="anonymous"
                                    checked={isAnonymous}
                                    onChange={(e) => setIsAnonymous(e.target.checked)}
                                    className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                                />
                                <label htmlFor="anonymous" className="text-sm text-gray-700">
                                    Make my donation anonymous
                                </label>
                            </div>

                            {/* Mock Payment Details - Static UI */}
                            <div className="space-y-4 pt-4 border-t border-gray-100">
                                <h4 className="text-sm font-semibold text-gray-900">Payment Method</h4>
                                <div className="p-4 border border-gray-200 rounded-lg bg-gray-50 cursor-not-allowed">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-5 bg-gray-300 rounded"></div>
                                        <span className="text-gray-500 text-sm">Credit/Debit Card (Mock)</span>
                                    </div>
                                    <div className="mt-4 grid grid-cols-2 gap-4">
                                        <div className="h-8 bg-gray-200 rounded w-full"></div>
                                        <div className="h-8 bg-gray-200 rounded w-full"></div>
                                    </div>
                                </div>
                            </div>

                        </form>
                    </CardContent>
                    <CardFooter className="bg-gray-50 rounded-b-xl border-t border-gray-200 py-6">
                        <Button type="submit" form="checkout-form" size="lg" className="w-full text-base font-semibold shadow-md">
                            Confirm Donation {amount ? `- PKR ${Number(amount).toLocaleString()}` : ''}
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};
