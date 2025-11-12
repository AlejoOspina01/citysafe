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
 * Admin Dashboard (/admin)
 * Main admin panel with statistics, charts, and incident overview
 * Shows key metrics, trending data, and recent incidents
 */
export default function AdminDashboard() {
  const COLORS = ["#2563eb", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"];

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
      <AdminSidebar />

      <main className="flex-1 md:ml-64">
        {/* Header */}
        <header className="sticky top-0 z-40 border-b border-gray-200 bg-white">
          <div className="flex items-center justify-between px-6 py-4 md:px-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Panel de Control
              </h1>
              <p className="mt-1 text-sm text-gray-600">
                Bienvenido de vuelta al Panel de Administración CitySafe
              </p>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Generar Reporte
            </Button>
          </div>
        </header>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Stats Cards */}
          <motion.div
            className="grid gap-6 md:grid-cols-4 mb-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Total Incidents */}
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

            {/* Resolved */}
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

            {/* Pending */}
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

            {/* Investigating */}
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

          {/* Charts */}
          <motion.div
            className="grid gap-6 md:grid-cols-2 mb-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Trending Chart */}
            <motion.div variants={itemVariants}>
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Tendencia de Incidentes
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={trendingData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis
                      dataKey="month"
                      stroke="#6b7280"
                      style={{ fontSize: "12px" }}
                    />
                    <YAxis stroke="#6b7280" style={{ fontSize: "12px" }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#ffffff",
                        border: "1px solid #e5e7eb",
                        borderRadius: "8px",
                      }}
                    />
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

            {/* Incident Types */}
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
                      {incidentTypesData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </Card>
            </motion.div>
          </motion.div>

          {/* Recent Incidents */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Incidentes Recientes
                </h3>
                <Link href="/admin/reports">
                  <Button
                    variant="outline"
                    className="border-gray-300 text-gray-600 hover:text-gray-900"
                  >
                    Ver Todos
                  </Button>
                </Link>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
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
                  <tbody>
                    {mockIncidents.slice(0, 5).map((incident) => (
                      <tr
                        key={incident.id}
                        className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-4 py-3 font-mono text-gray-900">
                          {incident.id}
                        </td>
                        <td className="px-4 py-3 text-gray-700">
                          {incident.type}
                        </td>
                        <td className="px-4 py-3 text-gray-600 truncate max-w-xs">
                          {incident.location}
                        </td>
                        <td className="px-4 py-3 text-gray-600">
                          {incident.date}
                        </td>
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

          {/* Simulated Map Section */}
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
