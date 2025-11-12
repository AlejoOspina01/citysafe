'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

/**
 * Hero Component
 * Main hero section with call-to-action for home page
 */
export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-linear-to-br from-blue-600 to-blue-800 py-20 md:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-blue-500/20" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-400/20" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Make Your Community Safer
          </h1>
          <p className="mt-6 text-lg text-blue-100 md:text-xl max-w-2xl mx-auto">
            Report incidents, stay informed, and connect with your neighbors.
            CitySafe empowers communities through transparent incident reporting.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
            <Link href="/report">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-100 font-semibold"
              >
                Report an Incident
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="#features">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white text-white hover:bg-blue-700"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Stats Preview */}
        <motion.div
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="rounded-lg bg-white/10 backdrop-blur p-6 border border-white/20">
            <p className="text-3xl font-bold text-white">500+</p>
            <p className="mt-2 text-blue-100">Incidents Reported</p>
          </div>
          <div className="rounded-lg bg-white/10 backdrop-blur p-6 border border-white/20">
            <p className="text-3xl font-bold text-white">2,450+</p>
            <p className="mt-2 text-blue-100">Active Members</p>
          </div>
          <div className="rounded-lg bg-white/10 backdrop-blur p-6 border border-white/20">
            <p className="text-3xl font-bold text-white">89%</p>
            <p className="mt-2 text-blue-100">Resolution Rate</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
