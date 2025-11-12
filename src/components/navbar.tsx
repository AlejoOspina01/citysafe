"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertCircle, Home } from "lucide-react";

/**
 * Navbar Component
 * Fixed header navigation for the CitySafe application
 * Contains branding, main navigation links, and action buttons
 */
export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center gap-2">
            <AlertCircle className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">CitySafe</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden flex-1 items-center justify-center md:flex">
            <Link
              href="/"
              className="mx-6 text-gray-700 hover:text-blue-600 transition-colors"
            >
              Inicio
            </Link>
            <Link
              href="/contact"
              className="mx-6 text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contacto
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <Link href="/report">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Reportar Incidente
              </Button>
            </Link>
            <Link href="/login">
              <Button variant="outline" className="border-gray-300">
                Iniciar Sesión
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
