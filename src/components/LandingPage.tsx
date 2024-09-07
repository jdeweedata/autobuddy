import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart2, Bell, Car, Shield, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFFAF5]">
      <header className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Car className="h-6 w-6 text-orange-500" />
          <span className="text-xl font-bold text-gray-900">AutoBuddy</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link
            href="#features"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Pricing
          </Link>
          <Link
            href="#resources"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Resources
          </Link>
          <Link
            href="#app"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            The App
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            className="text-orange-500 hover:text-orange-600"
          >
            Log In
          </Button>
          <Button className="bg-orange-500 text-white hover:bg-orange-600">
            Sign Up
          </Button>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 text-center">
          <h1 className="text-5xl font-bold mb-6">Welcome to AutoBuddy</h1>
          <p className="text-xl mb-8">Your AI-powered automotive assistant</p>
          <Button className="bg-orange-500 text-white hover:bg-orange-600">
            Get Started
          </Button>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <BarChart2 className="h-12 w-12 mx-auto mb-4 text-orange-500" />
                <h3 className="text-xl font-semibold mb-2">
                  Vehicle Analytics
                </h3>
                <p>Get detailed insights about your vehicle's performance.</p>
              </div>
              <div className="text-center">
                <Bell className="h-12 w-12 mx-auto mb-4 text-orange-500" />
                <h3 className="text-xl font-semibold mb-2">
                  Maintenance Alerts
                </h3>
                <p>Receive timely notifications for vehicle maintenance.</p>
              </div>
              <div className="text-center">
                <Shield className="h-12 w-12 mx-auto mb-4 text-orange-500" />
                <h3 className="text-xl font-semibold mb-2">Secure Data</h3>
                <p>Your vehicle data is protected with top-notch security.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Pricing</h2>
            {/* Add pricing plans here */}
          </div>
        </section>

        {/* Resources Section */}
        <section id="resources" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Resources</h2>
            {/* Add resource links or cards here */}
          </div>
        </section>

        {/* App Section */}
        <section id="app" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">The App</h2>
            {/* Add app screenshots or description here */}
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p>
                AutoBuddy is your AI-powered automotive assistant, helping you
                manage and maintain your vehicles with ease.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul>
                <li>
                  <Link href="#features" className="hover:text-orange-500">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="hover:text-orange-500">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#resources" className="hover:text-orange-500">
                    Resources
                  </Link>
                </li>
                <li>
                  <Link href="#app" className="hover:text-orange-500">
                    The App
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p>Email: info@autobuddy.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              {/* Add social media icons here */}
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 AutoBuddy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
