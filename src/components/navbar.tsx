"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { AlertCircle, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

/**
 * ============================================================================
 * NAVBAR COMPONENT - DINÁMICO CON AUTENTICACIÓN
 * ============================================================================
 *
 * DESCRIPCIÓN GENERAL:
 * - Barra de navegación principal fija en la parte superior de la aplicación
 * - Cambia dinámicamente según estado de autenticación del usuario
 * - Proporciona navegación principal a todas las secciones de CitySafe
 * - Diseño responsivo con adaptación a dispositivos móviles
 *
 * UBICACIÓN: src/components/navbar.tsx
 *
 * CARACTERÍSTICAS PRINCIPALES:
 * 1. Posicionamiento sticky: Se adhiere al scroll vertical
 * 2. Branding con logo de alerta (AlertCircle) y nombre "CitySafe"
 * 3. Navegación DINÁMICA basada en autenticación:
 *    - NO autenticado: Inicio, Contacto, Reportar, Registrarse, Login
 *    - Autenticado: Reportar, Mi Perfil, Cerrar Sesión
 * 4. Menú de navegación en desktop (centro, visible en md+)
 * 5. Responsive: Oculta menú desktop en móviles, muestra botones en ambos
 * 6. Z-index alto (z-50) para aparecer encima de otros elementos
 *
 * ESTRUCTURA:
 * - Logo/Branding (izquierda)
 * - Navegación Desktop (centro, visible en md+)
 * - Botones de acción dinámicos (derecha)
 * - Sombra sutil para separación visual
 *
 * ESTADOS DE NAVEGACIÓN:
 *
 * USUARIO NO AUTENTICADO:
 *   Navegación: Inicio | Contacto
 *   Botones: Reportar Incidente | Registrarse | Iniciar Sesión
 *
 * USUARIO AUTENTICADO:
 *   Navegación: (no muestra links de navegación)
 *   Botones: Reportar Incidente | Mi Perfil | Cerrar Sesión
 *
 * DEPENDENCIAS:
 * - next/link: Enrutamiento del lado del cliente
 * - ui/button: Componente de botón personalizado
 * - lucide-react: Íconos (AlertCircle, LogOut)
 * - hooks/useAuth: Hook de autenticación personalizado
 *
 * PROPS: Ninguno
 *
 * HOOKS: useAuth (maneja estado de autenticación)
 *
 * ============================================================================
 */
export function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

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

          {/* ===== SECCIÓN 2: NAVEGACIÓN DESKTOP (Solo si NO está autenticado) ===== */}
          {/* 
          - Visible solo si el usuario NO está autenticado
          - En pantallas medianas (md) o mayores
          - Flex: 1 para ocupar espacio disponible
          - Justify center para posicionar en el centro
          */}
          {!isAuthenticated && (
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
          )}

          {/* ===== SECCIÓN 3: BOTONES DINÁMICOS (Varía según autenticación) ===== */}
          {/* 
          Los botones cambian según si el usuario está autenticado o no
          */}
          <div className="flex items-center gap-3">
            {/* Botón: Reportar Incidente (SIEMPRE visible) */}
            <Link href="/report">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Reportar Incidente
              </Button>
            </Link>

            {/* ===== SI NO ESTÁ AUTENTICADO ===== */}
            {!isAuthenticated && (
              <>
                {/* Botón: Registrarse */}
                <Link href="/register">
                  <Button variant="outline" className="border-gray-300">
                    Registrarse
                  </Button>
                </Link>
                {/* Botón: Iniciar Sesión */}
                <Link href="/login">
                  <Button variant="outline" className="border-gray-300">
                    Iniciar Sesión
                  </Button>
                </Link>
              </>
            )}

            {/* ===== SI ESTÁ AUTENTICADO ===== */}
            {isAuthenticated && (
              <>
                {/* Botón: Mi Perfil */}
                <Link href="/profile">
                  <Button variant="outline" className="border-gray-300">
                    Mi Perfil
                  </Button>
                </Link>
                {/* Botón: Cerrar Sesión */}
                <Button
                  variant="outline"
                  className="border-red-300 text-red-600 hover:bg-red-50"
                  onClick={handleLogout}
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Cerrar Sesión
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
