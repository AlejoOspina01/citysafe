"use client";

import { useState } from "react";
import { AdminSidebar } from "@/components/admin-sidebar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

/**
 * Download Reports Page (/admin/download)
 * Interface for filtering and exporting incident reports
 * Supports CSV, PDF, and XLSX formats
 * Filter by date range, incident type, and more
 */
export default function DownloadReports() {
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [incidentType, setIncidentType] = useState("all");
  const [format, setFormat] = useState("csv");
  const [isDownloading, setIsDownloading] = useState(false);

  const incidentTypes = [
    "Robo",
    "Vandalismo",
    "Actividad Sospechosa",
    "Accidente de Tráfico",
    "Queja por Ruido",
    "Daño a la Propiedad",
    "Agresión",
  ];

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDownloading(true);

    // TODO: Connect to backend API for report generation and download
    console.log("Download request:", {
      dateFrom,
      dateTo,
      incidentType,
      format,
    });

    // Simulate download delay
    setTimeout(() => {
      setIsDownloading(false);
      // In a real app, this would trigger a file download
      alert(
        `Generando ${format.toUpperCase()} reporte desde ${
          dateFrom || "inicio"
        } hasta ${dateTo || "hoy"}`
      );
    }, 1500);
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
                Descarga de Reportes
              </h1>
              <p className="mt-1 text-sm text-gray-600">
                Exportar datos de incidentes en su formato preferido
              </p>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-6 md:p-8">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Download Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Filtrar & Descargar
                </h2>

                <form onSubmit={handleDownload} className="space-y-6">
                  {/* Date Range */}
                  <div className="space-y-4">
                    <h3 className="font-medium text-gray-900">
                      Rango de Fechas
                    </h3>

                    <div>
                      <Label
                        htmlFor="dateFrom"
                        className="text-sm text-gray-700"
                      >
                        Desde
                      </Label>
                      <Input
                        id="dateFrom"
                        type="date"
                        value={dateFrom}
                        onChange={(e) => setDateFrom(e.target.value)}
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="dateTo" className="text-sm text-gray-700">
                        Hasta
                      </Label>
                      <Input
                        id="dateTo"
                        type="date"
                        value={dateTo}
                        onChange={(e) => setDateTo(e.target.value)}
                        className="mt-2"
                      />
                    </div>
                  </div>

                  {/* Incident Type Filter */}
                  <div>
                    <Label
                      htmlFor="type"
                      className="text-sm font-medium text-gray-900"
                    >
                      Tipo de Incidente
                    </Label>
                    <Select
                      value={incidentType}
                      onValueChange={setIncidentType}
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Seleccionar tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todos los Tipos</SelectItem>
                        {incidentTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* File Format */}
                  <div>
                    <Label
                      htmlFor="format"
                      className="text-sm font-medium text-gray-900"
                    >
                      Formato de Exportación
                    </Label>
                    <Select value={format} onValueChange={setFormat}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Seleccionar formato" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="csv">
                          CSV (Hoja de Cálculo)
                        </SelectItem>
                        <SelectItem value="xlsx">XLSX (Excel)</SelectItem>
                        <SelectItem value="pdf">PDF (Documento)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isDownloading}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold flex items-center justify-center gap-2"
                  >
                    <Download className="h-4 w-4" />
                    {isDownloading ? "Generando..." : "Generar & Descargar"}
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Info Section */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Format Information */}
              <Card className="p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-blue-600" />
                  Formatos de Exportación
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-gray-900">CSV</p>
                    <p className="text-sm text-gray-600">
                      Ideal para análisis de datos e importación a otros
                      sistemas
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">XLSX</p>
                    <p className="text-sm text-gray-600">
                      Formato de Excel con formato y gráficos incluidos
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">PDF</p>
                    <p className="text-sm text-gray-600">
                      Formato profesional para informes y compartición
                    </p>
                  </div>
                </div>
              </Card>

              {/* Quick Stats */}
              <Card className="p-6 bg-blue-50 border-blue-200">
                <h3 className="font-bold text-gray-900 mb-4">
                  Datos Disponibles
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ ID de Incidente y tipo</li>
                  <li>✓ Fecha, hora y ubicación</li>
                  <li>✓ Información del reportero</li>
                  <li>✓ Estado y descripción</li>
                  <li>✓ Coordenadas (latitud/longitud)</li>
                  <li>✓ Información de resolución</li>
                </ul>
              </Card>

              {/* Recent Downloads */}
              <Card className="p-6">
                <h3 className="font-bold text-gray-900 mb-4">
                  Descargas Recientes
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                    <span className="text-gray-600">Reports_2025-11.csv</span>
                    <span className="text-xs text-gray-500">hace 2 horas</span>
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                    <span className="text-gray-600">October_Report.pdf</span>
                    <span className="text-xs text-gray-500">hace 1 día</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Q4_Data.xlsx</span>
                    <span className="text-xs text-gray-500">hace 3 días</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
