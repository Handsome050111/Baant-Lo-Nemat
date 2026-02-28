import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/Button';
import { Heart } from 'lucide-react';

export const Navbar = () => {
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Directory', path: '/directory' },
        { name: 'Dashboard', path: '/dashboard' },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Heart className="h-6 w-6 text-primary-500 fill-primary-500" />
                    <Link to="/" className="text-xl font-bold tracking-tight text-gray-900">
                        Baant Lo <span className="text-primary-600">Nemat</span>
                    </Link>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    <ul className="flex items-center gap-6">
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link
                                    to={link.path}
                                    className={`text-sm font-medium transition-colors hover:text-primary-600 ${location.pathname === link.path ? 'text-primary-600' : 'text-gray-600'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="flex items-center gap-3">
                        <Button variant="outline" asChild>
                            <Link to="/donate-food">Donate Food</Link>
                        </Button>
                        <Button asChild>
                            <Link to="/directory">Donate Funds</Link>
                        </Button>
                    </div>
                </div>

                <div className="md:hidden">
                    {/* Mobile menu toggle would go here */}
                    <Button variant="ghost" size="sm">Menu</Button>
                </div>
            </div>
        </nav>
    );
};
