"use client";

import { AdminSidebar } from "@/components/admin-sidebar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { AlertCircle, CheckCircle, Clock } from "lucide-react";
import {
  mockIncidents,
  incidentStats,
  trendingData,
  incidentTypesData,
} from "@/data/mock-incidents";
import Link from "next/link";

/**
 * ============================================================================
 * ADMIN DASHBOARD PAGE (/admin)
 * ============================================================================
 *
 * DESCRIPCIÓN GENERAL:
 * - Panel de control principal para administradores
 * - Visualización de estadísticas clave de incidentes
 * - Gráficos de tendencias y tipos de incidentes
 * - Tabla con incidentes recientes
 * - Mapa simulado de ubicaciones de incidentes
 * - Diseño responsivo con sidebar navegable
 *
 * UBICACIÓN: src/app/admin/page.tsx
 *
 * CARACTERÍSTICAS:
 * 1. Layout de 2 columnas (AdminSidebar + Main Content)
 * 2. Header sticky con título y botón de acción
 * 3. Grid de 4 tarjetas de estadísticas:
 *    - Total de Incidentes
 *    - Resueltos (verde)
 *    - Pendientes (naranja)
 *    - En Investigación (púrpura)
 * 4. Gráficos (Recharts):
 *    - LineChart: Tendencia mensual de incidentes
 *    - PieChart: Distribución por tipo de incidente
 * 5. Tabla responsiva con 5 incidentes recientes:
 *    - Columnas: ID, Tipo, Ubicación, Fecha, Estado
 *    - Estados con badges de color
 *    - Enlace a vista completa (/admin/reports)
 * 6. Simulación de Mapa (placeholder)
 * 7. Animaciones Framer Motion (stagger effect)
 * 8. Colores personalizados para tipos de incidente
 *
 * COMPONENTES IMPORTADOS:
 * - AdminSidebar: Barra lateral con navegación
 * - Card: Contenedores
 * - Button: Botones
 * - motion.div: Animaciones
 * - Recharts: BarChart, LineChart, PieChart, etc.
 * - Lucide Icons: AlertCircle, CheckCircle, Clock
 * - mock-incidents: Datos simulados (mockIncidents, stats, trends)
 *
 * DATOS SIMULADOS (src/data/mock-incidents.ts):
 * - mockIncidents: Array de incidentes con {id, type, location, date, status}
 * - incidentStats: {total, resolved, pending, investigating}
 * - trendingData: Array de 12 meses con {month, incidents}
 * - incidentTypesData: Array con {type, count}
 *
 * COLORES DE TIPOS (COLORS array):
 * - Índice 0: Azul (#2563eb)
 * - Índice 1: Verde (#10b981)
 * - Índice 2: Naranja (#f59e0b)
 * - Índice 3: Rojo (#ef4444)
 * - Índice 4: Púrpura (#8b5cf6)
 *
 * ANIMACIONES:
 * - containerVariants: staggerChildren (0.1s), delayChildren (0.1s)
 * - itemVariants: opacity + y-translate de 20px, duración 0.6s
 *
 * ============================================================================
 */
export default function AdminDashboard() {
  /**
   * Array de colores para PieChart
   * Usado para colorear segmentos del gráfico circular
   * Se mapea ciclicamente a través de incidentes
   */
  const COLORS = ["#2563eb", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"];

  /**
   * Variantes de animación para contenedor de stats
   *
   * Patrón: Animación secuencial (stagger)
   * - delayChildren: 0.1s - Espera antes de animar primeros hijos
   * - staggerChildren: 0.1s - Espacios 0.1s entre cada hijo
   *
   * Efecto: Las tarjetas entran una después de otra de forma fluida
   */
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  /**
   * Variantes de animación para elementos individuales
   *
   * Patrón: Entrada de abajo a arriba
   * - opacity: 0 → 1
   * - y: 20px → 0px
   * - duración: 0.6s
   *
   * Efecto: Los elementos flotan hacia arriba mientras aparecen
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
    <div className="flex">
      {/* ===== SIDEBAR NAVEGACIÓN ===== */}
      {/* Componente AdminSidebar: Barra lateral con links de navegación */}
      {/* Fija en posición a la izquierda (ancho: 16rem en md y up) */}
      <AdminSidebar />

      {/* ===== CONTENIDO PRINCIPAL ===== */}
      {/* Main: Flex grow para ocupar espacio disponible después del sidebar */}
      <main className="flex-1 md:ml-64">
        {/* ===== HEADER (STICKY) ===== */}
        {/* Encabezado fijo en la parte superior, z-40 para estar sobre contenido */}
        <header className="sticky top-0 z-40 border-b border-gray-200 bg-white">
          <div className="flex items-center justify-between px-6 py-4 md:px-8">
            <div>
              {/* Título principal del dashboard */}
              <h1 className="text-2xl font-bold text-gray-900">
                Panel de Control
              </h1>
              {/* Subtítulo/mensaje de bienvenida */}
              <p className="mt-1 text-sm text-gray-600">
                Bienvenido de vuelta al Panel de Administración CitySafe
              </p>
            </div>
            {/* Botón para generar reportes */}
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Generar Reporte
            </Button>
          </div>
        </header>

        {/* ===== CONTENIDO ===== */}
        <div className="p-6 md:p-8">
          {/* ===== SECCIÓN 1: TARJETAS DE ESTADÍSTICAS ===== */}
          {/* Grid de 4 columnas con animación stagger */}
          {/* Datos provenientes de mock-incidents: incidentStats */}
          <motion.div
            className="grid gap-6 md:grid-cols-4 mb-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* TARJETA 1: Total de Incidentes */}
            {/* Ícono azul, número en gris */}
            <motion.div variants={itemVariants}>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Total de Incidentes
                    </p>
                    <p className="mt-2 text-3xl font-bold text-gray-900">
                      {incidentStats.total}
                    </p>
                  </div>
                  <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center">
                    <AlertCircle className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* TARJETA 2: Resueltos */}
            {/* Ícono verde con checkmark */}
            <motion.div variants={itemVariants}>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Resueltos
                    </p>
                    <p className="mt-2 text-3xl font-bold text-green-600">
                      {incidentStats.resolved}
                    </p>
                  </div>
                  <div className="h-12 w-12 rounded-lg bg-green-50 flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* TARJETA 3: Pendientes */}
            {/* Ícono naranja con reloj */}
            <motion.div variants={itemVariants}>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Pendientes
                    </p>
                    <p className="mt-2 text-3xl font-bold text-orange-600">
                      {incidentStats.pending}
                    </p>
                  </div>
                  <div className="h-12 w-12 rounded-lg bg-orange-50 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* TARJETA 4: En Investigación */}
            {/* Ícono púrpura con alerta */}
            <motion.div variants={itemVariants}>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      En Investigación
                    </p>
                    <p className="mt-2 text-3xl font-bold text-purple-600">
                      {incidentStats.investigating}
                    </p>
                  </div>
                  <div className="h-12 w-12 rounded-lg bg-purple-50 flex items-center justify-center">
                    <AlertCircle className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>

          {/* ===== SECCIÓN 2: GRÁFICOS ===== */}
          {/* Grid de 2 columnas: LineChart y PieChart */}
          {/* Animación con whileInView (anima al scrollear a la vista) */}
          <motion.div
            className="grid gap-6 md:grid-cols-2 mb-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* GRÁFICO 1: Tendencia de Incidentes (LineChart) */}
            {/* Mostra datos de trendingData: 12 meses */}
            <motion.div variants={itemVariants}>
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Tendencia de Incidentes
                </h3>
                {/* ResponsiveContainer: Ajusta tamaño automáticamente */}
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={trendingData}>
                    {/* Grid de fondo punteado */}
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    {/* Eje X: Meses */}
                    <XAxis
                      dataKey="month"
                      stroke="#6b7280"
                      style={{ fontSize: "12px" }}
                    />
                    {/* Eje Y: Cantidad de incidentes */}
                    <YAxis stroke="#6b7280" style={{ fontSize: "12px" }} />
                    {/* Tooltip: Información al pasar el mouse */}
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#ffffff",
                        border: "1px solid #e5e7eb",
                        borderRadius: "8px",
                      }}
                    />
                    {/* Línea: Data de incidentes (azul #2563eb) */}
                    <Line
                      type="monotone"
                      dataKey="incidents"
                      stroke="#2563eb"
                      strokeWidth={2}
                      dot={{ fill: "#2563eb" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Card>
            </motion.div>

            {/* GRÁFICO 2: Incidentes por Tipo (PieChart) */}
            {/* Datos de incidentTypesData con colores del array COLORS */}
            <motion.div variants={itemVariants}>
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Incidentes por Tipo
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={incidentTypesData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ type, count }: any) => `${type}: ${count}`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="count"
                    >
                      {/* Colorea cada segmento del pastel */}
                      {incidentTypesData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    {/* Tooltip para mostrar valores */}
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </Card>
            </motion.div>
          </motion.div>

          {/* ===== SECCIÓN 3: TABLA DE INCIDENTES RECIENTES ===== */}
          {/* Muestra últimos 5 incidentes de mockIncidents */}
          {/* Tabla responsiva con scroll horizontal en mobile */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                {/* Título */}
                <h3 className="text-lg font-semibold text-gray-900">
                  Incidentes Recientes
                </h3>
                {/* Link a vista completa */}
                <Link href="/admin/reports">
                  <Button
                    variant="outline"
                    className="border-gray-300 text-gray-600 hover:text-gray-900"
                  >
                    Ver Todos
                  </Button>
                </Link>
              </div>

              {/* Contenedor con scroll horizontal en mobile */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  {/* ENCABEZADOS DE TABLA */}
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="px-4 py-3 text-left font-medium text-gray-700">
                        ID
                      </th>
                      <th className="px-4 py-3 text-left font-medium text-gray-700">
                        Tipo
                      </th>
                      <th className="px-4 py-3 text-left font-medium text-gray-700">
                        Ubicación
                      </th>
                      <th className="px-4 py-3 text-left font-medium text-gray-700">
                        Fecha
                      </th>
                      <th className="px-4 py-3 text-left font-medium text-gray-700">
                        Estado
                      </th>
                    </tr>
                  </thead>

                  {/* CUERPO DE TABLA */}
                  <tbody>
                    {/* Mapea los primeros 5 incidentes */}
                    {mockIncidents.slice(0, 5).map((incident) => (
                      <tr
                        key={incident.id}
                        className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                      >
                        {/* Columna: ID (monospace para códigos) */}
                        <td className="px-4 py-3 font-mono text-gray-900">
                          {incident.id}
                        </td>
                        {/* Columna: Tipo de incidente */}
                        <td className="px-4 py-3 text-gray-700">
                          {incident.type}
                        </td>
                        {/* Columna: Ubicación (truncada si es larga) */}
                        <td className="px-4 py-3 text-gray-600 truncate max-w-xs">
                          {incident.location}
                        </td>
                        {/* Columna: Fecha */}
                        <td className="px-4 py-3 text-gray-600">
                          {incident.date}
                        </td>
                        {/* Columna: Estado con badge de color */}
                        {/* Verde para resuelto, naranja para pendiente, azul para en investigación */}
                        <td className="px-4 py-3">
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                              incident.status === "resolved"
                                ? "bg-green-100 text-green-800"
                                : incident.status === "pending"
                                ? "bg-orange-100 text-orange-800"
                                : "bg-blue-100 text-blue-800"
                            }`}
                          >
                            {incident.status === "resolved"
                              ? "Resuelto"
                              : incident.status === "pending"
                              ? "Pendiente"
                              : "En Investigación"}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>

          {/* ===== SECCIÓN 4: MAPA SIMULADO ===== */}
          {/* Placeholder para integración futura con Google Maps/Leaflet */}
          <motion.div
            className="mt-8"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Mapa de Ubicaciones de Incidentes
              </h3>
              {/* Altura fija (h-96) para simular contenedor de mapa */}
              <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                <div className="text-center text-gray-600">
                  <p className="font-medium text-lg">
                    🗺️ Vista de Mapa Simulado
                  </p>
                  <p className="text-sm mt-2">
                    Las ubicaciones de incidentes se mostrarían en un mapa
                    interactivo
                  </p>
                  <p className="text-xs mt-4 text-gray-500">
                    En producción, usa Leaflet, Mapbox o Google Maps API
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
