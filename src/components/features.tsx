"use client";

import { Bell, Users, FileText } from "lucide-react";
import { motion } from "framer-motion";

/**
 * ============================================================================
 * FEATURES COMPONENT
 * ============================================================================
 *
 * DESCRIPCIÓN GENERAL:
 * - Sección que muestra las 3 características principales de CitySafe
 * - Utiliza animaciones Framer Motion para efecto de entrada escalonada
 * - Grid responsivo: 1 columna (móvil), 3 columnas (desktop)
 *
 * UBICACIÓN: src/components/features.tsx
 *
 * CARACTERÍSTICAS:
 * 1. Título y descripción de sección
 * 2. Grid de 3 tarjetas con características clave
 * 3. Cada tarjeta contiene:
 *    - Icono visual (Bell, Users, FileText)
 *    - Título de la característica
 *    - Descripción detallada
 * 4. Animaciones escalonadas (stagger children)
 * 5. Efectos hover en las tarjetas
 * 6. Fondo blanco limpio
 *
 * SECCIONES:
 * 1. Cabecera de la sección (Título y descripción)
 * 2. Grid de características animado
 * 3. Tarjetas individuales con contenido
 *
 * ANIMACIONES:
 * - containerVariants: Controla entrada del grid completo
 * - itemVariants: Cada tarjeta entra con delay escalonado
 * - Efecto: Aparecen con opacidad y movimiento vertical
 *
 * PROPS: Ninguno
 * ESTADOS: Ninguno
 *
 * ============================================================================
 */

/**
 * Feature Interface
 * Define la estructura de cada característica mostrada
 *
 * Propiedades:
 * - id: string - Identificador único de la característica
 * - title: string - Título de la característica
 * - description: string - Descripción detallada
 * - icon: React.ReactNode - Ícono visual (componente Lucide)
 */
interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

/**
 * Array de características principales
 * Contiene 3 características clave de CitySafe
 * Se utiliza para renderizar las tarjetas en el componente Features
 *
 * Cada feature representa un pilar importante de la plataforma:
 * 1. Alertas en Tiempo Real - Notificaciones inmediatas
 * 2. Participación Comunitaria - Conexión con vecinos
 * 3. Reportes Fáciles - Interfaz simple de uso
 */
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
  /**
   * Variantes de animación para el contenedor (grid)
   *
   * FUNCIONAMIENTO:
   * - hidden: Estado inicial - opacidad 0
   * - visible: Estado final - opacidad 1
   * - staggerChildren: 0.2s de retraso entre cada hijo
   * - delayChildren: 0.1s antes de empezar
   *
   * EJEMPLO:
   * Tarjeta 1: Entra a los 0.1s
   * Tarjeta 2: Entra a los 0.3s (0.1 + 0.2)
   * Tarjeta 3: Entra a los 0.5s (0.1 + 0.4)
   */
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

  /**
   * Variantes de animación para cada tarjeta individual
   *
   * FUNCIONAMIENTO:
   * - hidden: Comienza invisible y 20px abajo
   * - visible: Se mueve hacia arriba (y: 0) y se hace visible
   * - duration: 0.6s de duración en la transición
   *
   * EFECTO VISUAL:
   * Las tarjetas "suben" mientras aparecen, creando un efecto dinámico
   */
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
      {/* Contenedor principal con max-width y padding responsivo */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ===== CABECERA DE LA SECCIÓN ===== */}
        {/* 
        Título y descripción de la sección
        Centrado y con máximo ancho limitado
        */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Características Principales
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Todo lo que necesitas para hacer nuestra comunidad más segura
          </p>
        </div>

        {/* ===== GRID DE CARACTERÍSTICAS ===== */}
        {/* 
        motion.div: Componente animado de Framer Motion
        - className: Grid responsivo (1 col móvil, 3 col desktop)
        - variants: Aplica containerVariants definidas arriba
        - initial: Estado inicial (hidden)
        - whileInView: Anima cuando entra en vista
        - viewport: { once: true } - Anima solo una vez
        */}
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* ===== MAPEAR CARACTERÍSTICAS ===== */}
          {/* 
          Recorre el array features y crea una tarjeta para cada una
          Cada tarjeta es un motion.div con animación itemVariants
          */}
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Contenedor del ícono con fondo azul claro */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
                {feature.icon}
              </div>

              {/* Título de la característica */}
              <h3 className="text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>

              {/* Descripción detallada */}
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
