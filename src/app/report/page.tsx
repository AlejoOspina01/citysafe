"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

/**
 * ============================================================================
 * REPORT INCIDENT PAGE (/report)
 * ============================================================================
 *
 * DESCRIPCIÓN GENERAL:
 * - Formulario multi-paso para reportar incidentes comunitarios
 * - Recopila información del usuario (Paso 1)
 * - Recopila detalles del incidente (Paso 2)
 * - Incluye validación de formularios
 * - Indicador de progreso visual
 * - Pantalla de confirmación post-envío
 *
 * UBICACIÓN: src/app/report/page.tsx
 *
 * CARACTERÍSTICAS:
 * 1. Formulario de 2 pasos (wizard pattern)
 * 2. Indicador de progreso (progress bar)
 * 3. Validación condicional por paso
 * 4. Estados deshabilitados para botones según validación
 * 5. Transiciones animadas entre pasos
 * 6. 8 tipos de incidentes predefinidos
 * 7. Simulación de mapa (placeholder para integración)
 * 8. Carga de fotos (input hidden, placeholder)
 * 9. Mensaje de éxito con ID de reporte generado
 * 10. Opción para enviar otro reporte
 *
 * FLUJO DE USUARIO:
 * 1. Ve héroe con título y descripción
 * 2. PASO 1: Ingresa nombre (requerido) y email (opcional)
 * 3. Hace click en "Next" → Valida nombre
 * 4. PASO 2: Selecciona tipo, fecha, hora, ubicación
 * 5. Ingresa descripción del incidente
 * 6. Opcionalmente carga fotos
 * 7. Hace click en "Guardar reporte" → Envía formulario
 * 8. Ve pantalla de éxito con ID de reporte
 * 9. Puede enviar otro reporte
 *
 * ESTADOS:
 * - currentStep: 1 | 2 (paso actual del formulario)
 * - isSubmitted: boolean (mostrar éxito o formulario)
 * - userInfo: {name, email}
 * - incidentData: {type, date, time, location, latitude, longitude, description}
 *
 * TIPOS DE INCIDENTE (8):
 * - Robo
 * - Vandalismo
 * - Actividad Sospechosa
 * - Accidente de Tráfico
 * - Queja por Ruido
 * - Daño a Propiedad
 * - Agresión
 * - Otro
 *
 * ============================================================================
 */
export default function ReportIncident() {
  /**
   * Estados del formulario multi-paso
   *
   * currentStep: 1 | 2
   *   - 1: Pantalla de información del usuario
   *   - 2: Pantalla de detalles del incidente
   *
   * isSubmitted: boolean
   *   - false: Mostrar formulario
   *   - true: Mostrar pantalla de éxito
   *
   * userInfo: {name: string, email: string}
   *   - name: Nombre del reportador (requerido)
   *   - email: Email del reportador (opcional, para actualizaciones)
   *
   * incidentData: {
   *   type: string - Categoría del incidente
   *   date: string - Fecha (YYYY-MM-DD)
   *   time: string - Hora (HH:MM)
   *   location: string - Dirección o nombre de ubicación
   *   latitude: string - Coordenada simulada
   *   longitude: string - Coordenada simulada
   *   description: string - Descripción detallada
   * }
   */
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Estado para información del usuario (Paso 1)
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
  });

  // Estado para detalles del incidente (Paso 2)
  // Inicializa con coordenadas de Nueva York como ejemplo
  const [incidentData, setIncidentData] = useState({
    type: "",
    date: "",
    time: "",
    location: "",
    latitude: "40.7128", // Nueva York
    longitude: "-74.0060",
    description: "",
  });

  // Array de tipos de incidente disponibles
  // Se usa para mapear en el Select de Paso 2
  const incidentTypes = [
    "Robo",
    "Vandalismo",
    "Actividad Sospechosa",
    "Accidente de Tráfico",
    "Queja por Ruido",
    "Daño a Propiedad",
    "Agresión",
    "Otro",
  ];

  /**
   * Maneja cambios en los inputs de información del usuario (Paso 1)
   *
   * FUNCIONAMIENTO:
   * - Extrae name y value del input
   * - Actualiza estado userInfo manteniendo otros campos
   * - Controlled component pattern
   */
  const handleUserInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /**
   * Maneja cambios en los inputs de detalles del incidente (Paso 2)
   *
   * FUNCIONAMIENTO:
   * - Extrae name y value del input, textarea, o select
   * - Actualiza estado incidentData
   * - Soporta múltiples tipos de elementos HTML
   */
  const handleIncidentChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setIncidentData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /**
   * Maneja cambio del Select de tipo de incidente
   *
   * El componente Select personalizado usa onValueChange
   * en lugar de onChange, por eso necesita manejador separado
   */
  const handleSelectChange = (value: string) => {
    setIncidentData((prev) => ({
      ...prev,
      type: value,
    }));
  };

  /**
   * Maneja el envío del formulario completo (Paso 2)
   *
   * PASOS:
   * 1. Prevenir comportamiento por defecto del form
   * 2. Combinar datos de usuario e incidente
   * 3. Log a consola (TODO: enviar a backend)
   * 4. Mostrar pantalla de éxito (isSubmitted = true)
   *
   * VALIDACIÓN:
   * - HTML5 valida campos requeridos
   * - Botón de envío solo habilitado si todos requeridos están llenos
   *
   * TODO: Conectar a API backend
   * - POST /api/incidents/report
   * - Manejar errores de envío
   * - Guardar fotos en storage
   * - Enviar email de confirmación
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to backend API
    console.log("Incident Report:", {
      ...userInfo,
      ...incidentData,
    });
    setIsSubmitted(true);
  };

  return (
    <main className="flex flex-col">
      {/* ===== SECCIÓN HÉROE ===== */}
      {/* Encabezado azul con degradado, título y descripción */}
      <section className="bg-linear-to-r from-blue-600 to-blue-700 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Título principal con animación */}
          <motion.h1
            className="text-3xl font-bold text-white md:text-4xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Reportar un Incidente
          </motion.h1>

          {/* Subtítulo descriptivo */}
          <motion.p
            className="mt-4 text-lg text-blue-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ayúdanos a mantener la comunidad segura reportando actividades
            sospechosas o incidentes.
          </motion.p>
        </div>
      </section>

      {/* ===== SECCIÓN DE FORMULARIO ===== */}
      {/* Contenedor para el form multi-paso o pantalla de éxito */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          {/* RENDERIZADO CONDICIONAL: Éxito o Formulario */}
          {isSubmitted ? (
            // ===== PANTALLA DE ÉXITO =====
            // Mostrada después del envío exitoso del formulario
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="p-12">
                {/* Ícono de éxito: círculo verde con checkmark */}
                <div className="flex justify-center mb-6">
                  <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                </div>

                {/* Título de éxito */}
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  ¡Reporte Enviado Exitosamente!
                </h2>

                {/* Mensaje confirmatorio */}
                <p className="text-gray-600 mb-6">
                  Gracias por ayudarnos a mantener la comunidad segura. Tu
                  reporte de incidente ha sido recibido y será revisado por
                  nuestro equipo.
                </p>

                {/* ID de reporte: generado aleatoriamente para demo */}
                <p className="text-sm text-gray-500 mb-8">
                  ID del Reporte:{" "}
                  {Math.random().toString(36).substr(2, 9).toUpperCase()}
                </p>

                {/* Botón para enviar otro reporte */}
                {/* Resetea todos los estados al estado inicial */}
                <Button
                  onClick={() => {
                    setCurrentStep(1);
                    setIsSubmitted(false);
                    setUserInfo({ name: "", email: "" });
                    setIncidentData({
                      type: "",
                      date: "",
                      time: "",
                      location: "",
                      latitude: "40.7128",
                      longitude: "-74.0060",
                      description: "",
                    });
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Enviar Otro Reporte
                </Button>
              </Card>
            </motion.div>
          ) : (
            // ===== FORMULARIO MULTI-PASO =====
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8">
                {/* ===== INDICADOR DE PROGRESO ===== */}
                {/* Muestra paso actual (1 o 2) con barra de progreso */}
                <div className="mb-8">
                  <div className="flex items-center justify-between">
                    {/* Círculo del Paso 1 */}
                    <div
                      className={`h-10 w-10 rounded-full flex items-center justify-center font-semibold text-white ${
                        currentStep >= 1 ? "bg-blue-600" : "bg-gray-300"
                      }`}
                    >
                      1
                    </div>

                    {/* Línea conectora */}
                    <div
                      className={`flex-1 h-1 mx-2 ${
                        currentStep >= 2 ? "bg-blue-600" : "bg-gray-300"
                      }`}
                    />

                    {/* Círculo del Paso 2 */}
                    <div
                      className={`h-10 w-10 rounded-full flex items-center justify-center font-semibold text-white ${
                        currentStep >= 2 ? "bg-blue-600" : "bg-gray-300"
                      }`}
                    >
                      2
                    </div>
                  </div>

                  {/* Etiquetas de pasos */}
                  <div className="flex justify-between mt-2 text-sm text-gray-600">
                    <span>Tu Información</span>
                    <span>Detalles del Incidente</span>
                  </div>
                </div>

                {/* ===== FORMULARIO ===== */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* ===== PASO 1: INFORMACIÓN DEL USUARIO ===== */}
                  {/* Mostrado cuando currentStep === 1 */}
                  {currentStep === 1 && (
                    <motion.div
                      className="space-y-6"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      {/* INPUT: Nombre (Requerido) */}
                      <div>
                        <Label
                          htmlFor="name"
                          className="font-medium text-gray-900"
                        >
                          Nombre Completo *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="Juan Pérez"
                          value={userInfo.name}
                          onChange={handleUserInfoChange}
                          className="mt-2"
                        />
                      </div>

                      {/* INPUT: Email (Opcional) */}
                      <div>
                        <Label
                          htmlFor="email"
                          className="font-medium text-gray-900"
                        >
                          Correo Electrónico (Opcional)
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="tu@correo.com"
                          value={userInfo.email}
                          onChange={handleUserInfoChange}
                          className="mt-2"
                        />
                        <p className="mt-2 text-sm text-gray-500">
                          Proporciona tu correo electrónico para recibir
                          actualizaciones sobre tu reporte.
                        </p>
                      </div>

                      {/* BOTÓN: Siguiente */}
                      {/* Deshabilitado si nombre está vacío */}
                      <div className="flex justify-end pt-4">
                        <Button
                          type="button"
                          onClick={() => setCurrentStep(2)}
                          disabled={!userInfo.name}
                          className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
                        >
                          Siguiente <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {/* ===== PASO 2: DETALLES DEL INCIDENTE ===== */}
                  {/* Mostrado cuando currentStep === 2 */}
                  {currentStep === 2 && (
                    <motion.div
                      className="space-y-6"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      {/* SELECT: Tipo de Incidente (Requerido) */}
                      <div>
                        <Label
                          htmlFor="type"
                          className="font-medium text-gray-900"
                        >
                          Tipo de Incidente *
                        </Label>
                        <Select
                          value={incidentData.type}
                          onValueChange={handleSelectChange}
                        >
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Selecciona tipo de incidente" />
                          </SelectTrigger>
                          <SelectContent>
                            {/* Mapea array de tipos y crea SelectItems */}
                            {incidentTypes.map((type) => (
                              <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* GRID: Fecha y Hora (2 columnas en desktop) */}
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        {/* INPUT: Fecha (Requerido) */}
                        <div>
                          <Label
                            htmlFor="date"
                            className="font-medium text-gray-900"
                          >
                            Fecha *
                          </Label>
                          <Input
                            id="date"
                            name="date"
                            type="date"
                            required
                            value={incidentData.date}
                            onChange={handleIncidentChange}
                            className="mt-2"
                          />
                        </div>

                        {/* INPUT: Hora (Requerido) */}
                        <div>
                          <Label
                            htmlFor="time"
                            className="font-medium text-gray-900"
                          >
                            Hora *
                          </Label>
                          <Input
                            id="time"
                            name="time"
                            type="time"
                            required
                            value={incidentData.time}
                            onChange={handleIncidentChange}
                            className="mt-2"
                          />
                        </div>
                      </div>

                      {/* INPUT: Ubicación (Requerido) */}
                      <div>
                        <Label
                          htmlFor="location"
                          className="font-medium text-gray-900"
                        >
                          Ubicación *
                        </Label>
                        <Input
                          id="location"
                          name="location"
                          type="text"
                          required
                          placeholder="Dirección o nombre de lugar"
                          value={incidentData.location}
                          onChange={handleIncidentChange}
                          className="mt-2"
                        />
                      </div>

                      {/* MAPA SIMULADO */}
                      {/* En producción, integrar con Google Maps o similar */}
                      <div>
                        <Label className="font-medium text-gray-900 block mb-2">
                          Ubicación en Mapa (Simulado)
                        </Label>
                        <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                          <div className="text-center text-gray-600">
                            <p className="font-medium">📍 Mapa Simulado</p>
                            <p className="text-sm mt-2">
                              Latitud: {incidentData.latitude}
                            </p>
                            <p className="text-sm">
                              Longitud: {incidentData.longitude}
                            </p>
                            <p className="text-xs mt-2 text-gray-500">
                              En producción, esto mostraría un mapa interactivo
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* TEXTAREA: Descripción (Requerido) */}
                      <div>
                        <Label
                          htmlFor="description"
                          className="font-medium text-gray-900"
                        >
                          Descripción *
                        </Label>
                        <Textarea
                          id="description"
                          name="description"
                          required
                          placeholder="Describe que pasó en detalle..."
                          rows={5}
                          value={incidentData.description}
                          onChange={handleIncidentChange}
                          className="mt-2"
                        />
                      </div>

                      {/* INPUT: Fotos (Opcional) */}
                      <div>
                        <Label className="font-medium text-gray-900 block mb-2">
                          Fotos (Opcional)
                        </Label>
                        {/* Drag-and-drop simulado con input hidden */}
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                          <input
                            type="file"
                            multiple
                            accept="image/*"
                            className="hidden"
                            id="photos"
                          />
                          <label
                            htmlFor="photos"
                            className="cursor-pointer text-blue-600 hover:text-blue-700 font-medium"
                          >
                            Haz click aquí para subir fotos
                          </label>
                          <p className="text-sm text-gray-500 mt-1">
                            o arrastra y suelta
                          </p>
                        </div>
                      </div>

                      {/* BOTONES: Atrás y Guardar */}
                      <div className="flex justify-between pt-4">
                        {/* Botón Atrás */}
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setCurrentStep(1)}
                          className="flex items-center gap-2 border-gray-300"
                        >
                          <ArrowLeft className="h-4 w-4" /> Atrás
                        </Button>

                        {/* Botón Guardar/Enviar */}
                        {/* Deshabilitado si algún campo requerido está vacío */}
                        <Button
                          type="submit"
                          disabled={
                            !incidentData.type ||
                            !incidentData.date ||
                            !incidentData.time ||
                            !incidentData.location ||
                            !incidentData.description
                          }
                          className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2"
                        >
                          Guardar reporte <Check className="h-4 w-4" />
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </form>
              </Card>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
}
