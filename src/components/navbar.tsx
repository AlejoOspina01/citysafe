"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertCircle, Home } from "lucide-react";

/**
 * ============================================================================
 * NAVBAR COMPONENT
 * ============================================================================
 *
 * DESCRIPCIÓN GENERAL:
 * - Barra de navegación principal fija en la parte superior de la aplicación
 * - Proporciona navegación principal a todas las secciones de CitySafe
 * - Incluye branding (logo y nombre), menús de navegación y botones de acción
 * - Diseño responsivo con adaptación a dispositivos móviles
 *
 * UBICACIÓN: src/components/navbar.tsx
 *
 * CARACTERÍSTICAS PRINCIPALES:
 * 1. Posicionamiento sticky: Se adhiere al scroll vertical
 * 2. Branding con logo de alerta (AlertCircle) y nombre "CitySafe"
 * 3. Menú de navegación en desktop (Inicio, Contacto)
 * 4. Botones de acción: "Reportar Incidente" y "Iniciar Sesión"
 * 5. Responsive: Oculta menú desktop en móviles, muestra botones en ambos
 * 6. Z-index alto (z-50) para aparecer encima de otros elementos
 *
 * ESTRUCTURA:
 * - Logo/Branding (izquierda)
 * - Navegación Desktop (centro, visible en md+)
 * - Botones de acción (derecha)
 * - Sombra sutil para separación visual
 *
 * DEPENDENCIAS:
 * - next/link: Enrutamiento del lado del cliente
 * - ui/button: Componente de botón personalizado
 * - lucide-react: Íconos (AlertCircle, Home)
 *
 * PROPS: Ninguno
 *
 * ESTADOS: Ninguno (componente sin estado)
 *
 * ============================================================================
 */
export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
      {/* Contenedor principal con max-width y padding responsivo */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Flex container para distribuir elementos (logo, nav, botones) */}
        <div className="flex h-16 items-center justify-between">
          {/* ===== SECCIÓN 1: LOGO Y BRANDING ===== */}
          {/* 
          - Link a página de inicio
          - Icono AlertCircle (azul 600) representa seguridad/alerta
          - Nombre "CitySafe" en bold y gris oscuro
          */}
          <Link href="/" className="flex items-center gap-2">
            <AlertCircle className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">CitySafe</span>
          </Link>

          {/* ===== SECCIÓN 2: NAVEGACIÓN DESKTOP ===== */}
          {/* 
          Visible solo en pantallas medianas (md) o mayores
          - Flex: 1 para ocupar espacio disponible
          - Hidden en móviles: "hidden" + "md:flex"
          - Justify center para posicionar en el centro
          */}
          <div className="hidden flex-1 items-center justify-center md:flex">
            {/* Link Inicio */}
            <Link
              href="/"
              className="mx-6 text-gray-700 hover:text-blue-600 transition-colors"
            >
              Inicio
            </Link>
            {/* Link Contacto */}
            <Link
              href="/contact"
              className="mx-6 text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contacto
            </Link>
          </div>

          {/* ===== SECCIÓN 3: BOTONES DE ACCIÓN ===== */}
          {/* 
          Botones principales de la aplicación
          - Visible en desktop (md+)
          - Orden: Reportar Incidente (primario) → Iniciar Sesión (outline)
          */}
          <div className="flex items-center gap-3">
            {/* Botón: Reportar Incidente */}
            <Link href="/report">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Reportar Incidente
              </Button>
            </Link>
            {/* Botón: Iniciar Sesión */}
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
