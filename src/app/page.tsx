import { Hero } from "@/components/hero";
import { CitySafetyIndex } from "@/components/city-safety-index";
import { Features } from "@/components/features";
import { Partners } from "@/components/partners";

/**
 * ============================================================================
 * HOME PAGE (/)
 * ============================================================================
 *
 * DESCRIPCIÓN GENERAL:
 * - Página principal / landing page de la aplicación CitySafe
 * - Presenta la propuesta de valor de la plataforma
 * - Compuesta por múltiples componentes stacked verticalmente
 * - Primera impresión del usuario en la plataforma
 *
 * UBICACIÓN: src/app/page.tsx
 *
 * ARQUITECTURA:
 * La página está compuesta por 4 secciones principales (componentes):
 * 1. Hero Section - Llamada a la acción principal
 * 2. City Safety Index - Gráfico de tendencias
 * 3. Features - Características principales
 * 4. Partners - Organizaciones aliadas
 *
 * COMPONENTES IMPORTADOS:
 * - Hero: Sección principal con CTA "Reportar Incidente"
 * - CitySafetyIndex: Gráfico de líneas con estadísticas
 * - Features: Grid de 3 características clave
 * - Partners: Grid de 3 aliados/partners
 *
 * FLUJO DE LA PÁGINA:
 * 1. Hero atrae la atención del usuario
 * 2. City Safety Index genera confianza con datos
 * 3. Features explica los beneficios
 * 4. Partners refuerza credibilidad
 *
 * PROPS: Ninguno
 * ESTADO: Ninguno (página estática)
 *
 * RESPONSABILIDADES:
 * - Orquestar la composición de secciones
 * - Proporcionar estructura semántica (main, section)
 * - Manejar el espacing entre componentes
 * - Crear la experiencia de usuario completa
 *
 * NOTAS:
 * - La página usa componentes client-side (motion, interactivos)
 * - No requiere autenticación
 * - Es la entrada principal a la aplicación
 * - Debe ser optimizada para SEO (meta tags en layout.tsx)
 *
 * ============================================================================
 */

/**
 * Componente raíz de la página de inicio
 *
 * ESTRUCTURA:
 * <main> - Elemento semántico principal
 *   <Hero /> - Sección de bienvenida
 *   <CitySafetyIndex /> - Gráfico de tendencias
 *   <div id="features"> - Ancla para navegación
 *     <Features /> - Características
 *   </div>
 *   <Partners /> - Aliados
 * </main>
 *
 * ID "features":
 * - Permite al botón "Saber Más" del Hero hacer scroll a esta sección
 * - Facilita navegación intra-página
 *
 * RENDERIZADO:
 * Todos los componentes se renderizan en secuencia
 * No hay lógica condicional ni loops
 * Cada componente maneja su propia lógica de animación
 */
export default function Home() {
  return (
    <main className="flex flex-col">
      {/* ===== SECCIÓN 1: HERO ===== */}
      {/* 
      Primer componente que ve el usuario
      Contiene:
      - Título principal "Haz tu Comunidad Más Segura"
      - Descripción corta
      - 2 botones CTA
      - Estadísticas de confianza
      - Gradiente azul de fondo
      - Formas decorativas
      */}
      <Hero />

      {/* ===== SECCIÓN 2: ÍNDICE DE SEGURIDAD ===== */}
      {/* 
      Muestra tendencias de datos
      Contiene:
      - Gráfico de líneas Recharts
      - 2 líneas: Incidentes totales vs Resueltos
      - 3 estadísticas clave
      - Fondo gradiente azul → blanco
      */}
      <CitySafetyIndex />

      {/* ===== SECCIÓN 3: CARACTERÍSTICAS ===== */}
      {/* 
      Explica los 3 pilares de CitySafe
      Div con id="features" para navegación intra-página
      - Características Real-Time Alerts
      - Community Engagement
      - Easy Reporting
      */}
      <div id="features">
        <Features />
      </div>

      {/* ===== SECCIÓN 4: ALIADOS ===== */}
      {/* 
      Genera confianza mostrando partners
      Contiene:
      - 3 organizaciones aliadas
      - Íconos de oficinas
      - Grid responsivo
      - Animaciones escalonadas
      */}
      <Partners />
    </main>
  );
}
