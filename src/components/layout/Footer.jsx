import React from 'react';
import { Heart } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center gap-2 mb-4">
                        <Heart className="h-6 w-6 text-primary-500" />
                        <span className="text-xl font-bold tracking-tight text-white">
                            Baant Lo <span className="text-primary-500">Nemat</span>
                        </span>
                    </div>
                    <p className="text-sm text-gray-400 max-w-sm">
                        Reducing food waste and fulfilling verified foundation needs across the country through transparent, needs-based donations.
                    </p>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">Platform</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-primary-400 transition-colors">About Us</a></li>
                        <li><a href="/directory" className="hover:text-primary-400 transition-colors">Foundations</a></li>
                        <li><a href="/register" className="hover:text-primary-400 transition-colors">Register Foundation</a></li>
                        <li><a href="/dashboard" className="hover:text-primary-400 transition-colors">Impact Dashboard</a></li>
                        <li><a href="#" className="hover:text-primary-400 transition-colors">How it Works</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">Legal</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a></li>
                        <li><a href="#" className="hover:text-primary-400 transition-colors">Verification Process</a></li>
                        <li><a href="#" className="hover:text-primary-400 transition-colors">Contact Support</a></li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-sm text-gray-500 flex flex-col md:flex-row items-center justify-between">
                <p>© {new Date().getFullYear()} Baant Lo Nemat. All rights reserved.</p>
                <p className="mt-2 md:mt-0">Made with purpose for social impact.</p>
            </div>
        </footer>
    );
};
