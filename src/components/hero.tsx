"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * ============================================================================
 * HERO COMPONENT
 * ============================================================================
 *
 * DESCRIPCIÓN GENERAL:
 * - Sección principal (hero) de la página de inicio
 * - Llamada a la acción (CTA) para enganchar a usuarios
 * - Presenta la propuesta de valor de CitySafe
 * - Incluye estadísticas clave para generar confianza
 *
 * UBICACIÓN: src/components/hero.tsx
 *
 * CARACTERÍSTICAS:
 * 1. Gradiente azul de fondo (from-blue-600 to-blue-800)
 * 2. Formas decorativas (círculos redondeados con opacidad)
 * 3. Títulos y textos animados con Framer Motion
 * 4. Dos botones CTA: "Reportar Incidente" y "Saber Más"
 * 5. Grid de estadísticas (500+ reportes, 2450+ miembros, 89% resolución)
 * 6. Responsive: Padding diferente en móvil (py-20) vs desktop (py-32)
 *
 * SECCIONES:
 * 1. Fondo decorativo: Círculos translúcidos posicionados absolutamente
 * 2. Contenido principal: Título, descripción y CTA
 * 3. Estadísticas: Grid de 3 tarjetas con metrics clave
 *
 * ANIMACIONES:
 * - Título: Entra con opacidad y movimiento vertical (y: 20)
 * - Descripción: Similar al título con delay
 * - Estadísticas: Stagger delay entre cada tarjeta
 *
 * PROPS: Ninguno
 * ESTADOS: Ninguno
 *
 * ============================================================================
 */
export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-linear-to-br from-blue-600 to-blue-800 py-20 md:py-32">
      {/* Background decoration */}
      {/* 
      Capa de decoración visual con formas abstractas
      - Position absolute para no afectar el flujo del documento
      - Overflow hidden en el contenedor padre
      - Círculos con opacidad (20%) para efecto sutil
      */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Círculo superior derecha - Azul 500 con 20% opacidad */}
        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-blue-500/20" />
        {/* Círculo inferior izquierda - Azul 400 con 20% opacidad */}
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-400/20" />
      </div>

      {/* Content */}
      {/* 
      Contenedor con posición relativa para aparecer encima de decoración
      max-width: 7xl, padding responsivo
      */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Haz tu Comunidad Más Segura
          </h1>
          <p className="mt-6 text-lg text-blue-100 md:text-xl max-w-2xl mx-auto">
            Reporta incidentes, mantente informado y conecta con tus vecinos.
            CitySafe empodera a las comunidades mediante reportes de incidentes
            transparentes.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
            <Link href="/report">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-100 font-semibold"
              >
                Reportar un Incidente
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="#features">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white  text-blue-600 hover:bg-gray-100 "
              >
                Saber Más
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Stats Preview */}
        {/* 
        Grid de 3 tarjetas con métricas clave
        Cada tarjeta tiene:
        - Fondo semi-transparente (white/10)
        - Backdrop blur para efecto de cristal
        - Borde sutil (white/20)
        - Números grandes y etiquetas en texto claro
        */}
        <motion.div
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Tarjeta 1: Incidentes Reportados */}
          <div className="rounded-lg bg-white/10 backdrop-blur p-6 border border-white/20">
            <p className="text-3xl font-bold text-white">500+</p>
            <p className="mt-2 text-blue-100">Incidentes Reportados</p>
          </div>

          {/* Tarjeta 2: Miembros Activos */}
          <div className="rounded-lg bg-white/10 backdrop-blur p-6 border border-white/20">
            <p className="text-3xl font-bold text-white">2,450+</p>
            <p className="mt-2 text-blue-100">Miembros Activos</p>
          </div>

          {/* Tarjeta 3: Tasa de Resolución */}
          <div className="rounded-lg bg-white/10 backdrop-blur p-6 border border-white/20">
            <p className="text-3xl font-bold text-white">89%</p>
            <p className="mt-2 text-blue-100">Tasa de Resolución</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
