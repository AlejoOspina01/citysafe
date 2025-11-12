'use client';

import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

/**
 * Partners Component
 * Displays partner organizations and sponsors
 * Uses placeholder logos with company names
 */
const partners = [
  {
    id: 'partner-1',
    name: 'City Police Department',
    icon: Building2,
  },
  {
    id: 'partner-2',
    name: 'Community Health Services',
    icon: Building2,
  },
  {
    id: 'partner-3',
    name: 'Emergency Management',
    icon: Building2,
  },
];

export function Partners() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Our Partners
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Collaborating with trusted organizations to enhance community safety
          </p>
        </div>

        {/* Partners Grid */}
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {partners.map((partner) => {
            const IconComponent = partner.icon;
            return (
              <motion.div
                key={partner.id}
                variants={itemVariants}
                className="flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-12 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-blue-50">
                  <IconComponent className="h-8 w-8 text-blue-600" />
                </div>
                <p className="text-center text-gray-900 font-medium">
                  {partner.name}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
