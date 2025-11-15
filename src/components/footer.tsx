"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

/**
 * ============================================================================
 * FOOTER COMPONENT
 * ============================================================================
 *
 * DESCRIPCIÓN GENERAL:
 * - Pie de página que aparece al final de toda la aplicación
 * - Contiene información de la empresa, enlaces y contacto
 * - Divide en 3 secciones principales
 * - Incluye información de privacidad y términos
 *
 * UBICACIÓN: src/components/footer.tsx
 *
 * CARACTERÍSTICAS:
 * 1. Logo y descripción de CitySafe (izquierda)
 * 2. Enlaces rápidos (centro) - Inicio, Contacto, Reportar, Admin
 * 3. Información de contacto (derecha) - Teléfono, Email, Dirección
 * 4. Sección de derechos y enlaces legales (pie)
 * 5. Borde superior sutil separador
 * 6. Fondo gris claro (bg-gray-50)
 * 7. Grid responsivo: 1 columna (móvil), 3 columnas (desktop)
 *
 * SECCIONES:
 * 1. Brand Section: Logo y descripción
 * 2. Quick Links: Enlaces principales de navegación
 * 3. Contact Section: Información de contacto
 * 4. Copyright & Legal: Derechos y términos
 *
 * PROPS: Ninguno (anteriormente)
 * PROPS ACTUALIZADOS: className?: string - Para ajustar margen en admin
 * ESTADOS: Ninguno
 *
 * ============================================================================
 */
export function Footer({ className = "" }: { className?: string }) {
  return (
    <footer className={`bg-gray-900 text-white py-16 mt-20 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand and Description */}
          <div>
            <h3 className="text-lg font-semibold text-white">CitySafe</h3>
            <p className="mt-2 text-sm text-gray-300">
              Empoderando comunidades a través de reportes de incidentes
              transparentes y eficientes. Construyendo barrios más seguros
              juntos.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase">
              Enlaces Rápidos
            </h4>
            <nav className="mt-4 space-y-4 flex flex-col">
              <Link
                href="/"
                className="text-sm text-gray-300 hover:text-blue-600 transition-colors"
              >
                Inicio
              </Link>
              <Link
                href="/contact"
                className="text-sm text-gray-300 hover:text-blue-600 transition-colors"
              >
                Contacto
              </Link>
              <Link
                href="/report"
                className="text-sm text-gray-300 hover:text-blue-600 transition-colors"
              >
                Reportar Incidente
              </Link>
              <Link
                href="/login"
                className="text-sm text-gray-300 hover:text-blue-600 transition-colors"
              >
                Ingreso Administrador
              </Link>
            </nav>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase">
              Contacto
            </h4>
            <div className="mt-4 space-y-3">
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-blue-600 transition-colors"
              >
                <Phone className="h-4 w-4" />
                +57 (300) 717-1333
              </a>
              <a
                href="mailto:support@citysafe.com"
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-blue-600 transition-colors"
              >
                <Mail className="h-4 w-4" />
                soporte@citysafe.com
              </a>
              <div className="flex items-start gap-2 text-sm text-gray-300">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>
                  Carrera 20a # 50 - 11
                  <br />
                  Palmira, Valle del cauca
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-200" />

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-gray-300">
            © 2025 CitySafe. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-sm text-gray-300 hover:text-blue-600 transition-colors"
            >
              Política de Privacidad
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-300 hover:text-blue-600 transition-colors"
            >
              Términos de Servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
