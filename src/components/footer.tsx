'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

/**
 * Footer Component
 * Contains company information, quick links, and contact details
 * Professional footer for civic tech application
 */
export function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand and Description */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">CitySafe</h3>
            <p className="mt-2 text-sm text-gray-600">
              Empowering communities through transparent and efficient incident reporting.
              Building safer neighborhoods together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase">Quick Links</h4>
            <nav className="mt-4 space-y-2">
              <Link
                href="/"
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/contact"
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/report"
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                Report Incident
              </Link>
              <Link
                href="/login"
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                Admin Login
              </Link>
            </nav>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase">Contact</h4>
            <div className="mt-4 space-y-3">
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Phone className="h-4 w-4" />
                +1 (234) 567-890
              </a>
              <a
                href="mailto:support@citysafe.com"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Mail className="h-4 w-4" />
                support@citysafe.com
              </a>
              <div className="flex items-start gap-2 text-sm text-gray-600">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>123 Safety Street<br />City, State 12345</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-200" />

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-gray-600">
            © 2025 CitySafe. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
