"use client";

import { Bell, Users, FileText } from "lucide-react";
import { motion } from "framer-motion";

/**
 * Features Component
 * Displays three key features of CitySafe with icons and descriptions
 */
interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    id: "real-time",
    title: "Alertas en Tiempo Real",
    description:
      "Recibe notificaciones instantáneas sobre incidentes en tu barrio. Mantente informado y ayuda a tu comunidad a mantenerse segura.",
    icon: <Bell className="h-8 w-8 text-blue-600" />,
  },
  {
    id: "community",
    title: "Participación Comunitaria",
    description:
      "Conecta con tus vecinos y autoridades locales. Reporta problemas y rastrea soluciones juntos.",
    icon: <Users className="h-8 w-8 text-blue-600" />,
  },
  {
    id: "reporting",
    title: "Reportes Fáciles",
    description:
      "Interfaz simple e intuitiva para reportar incidentes. Solo unos pocos clics para ayudar a que nuestra ciudad sea más segura.",
    icon: <FileText className="h-8 w-8 text-blue-600" />,
  },
];

export function Features() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Características Principales
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Todo lo que necesitas para hacer nuestra comunidad más segura
          </p>
        </div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
