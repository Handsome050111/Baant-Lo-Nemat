import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { LandingPage } from './pages/Landing';
import { DirectoryPage } from './pages/Directory';
import { FoundationDetailsPage } from './pages/FoundationDetails';
import { FoodDonationPage } from './pages/FoodDonation';
import { CheckoutPage } from './pages/Checkout';
import { DashboardPage } from './pages/Dashboard';
import { RegisterFoundationPage } from './pages/RegisterFoundation';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/directory" element={<DirectoryPage />} />
            <Route path="/foundation/:id" element={<FoundationDetailsPage />} />
            <Route path="/donate-food" element={<FoodDonationPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/register" element={<RegisterFoundationPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
