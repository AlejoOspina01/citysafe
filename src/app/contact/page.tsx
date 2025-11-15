"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

/**
 * ============================================================================
 * CONTACT PAGE (/contact)
 * ============================================================================
 *
 * DESCRIPCIÓN GENERAL:
 * - Página de contacto para que usuarios se comuniquen con el equipo CitySafe
 * - Información de contacto directo (teléfono, email, dirección)
 * - Formulario de contacto con validación
 * - Incluye animaciones suaves y feedback visual
 *
 * UBICACIÓN: src/app/contact/page.tsx
 *
 * CARACTERÍSTICAS:
 * 1. Sección de héroe con título y descripción
 * 2. Grid responsivo (2 columnas en desktop, 1 en mobile)
 * 3. Tarjetas de información de contacto (3 métodos):
 *    - Teléfono: +1 (234) 567-890 (Lun-Vie 9am-6pm EST)
 *    - Email: support@citysafe.com (Respuesta en 24 horas)
 *    - Dirección: 123 Safety Street, City, State 12345
 * 4. Formulario de contacto con 3 campos:
 *    - Nombre (requerido)
 *    - Email (requerido)
 *    - Mensaje (requerido, textarea)
 * 5. Mensaje de éxito post-envío
 * 6. Animaciones de entrada (fade + translate)
 *
 * COMPONENTES UI USADOS:
 * - Card: Contenedores para info y formulario
 * - Input: Campos de texto (nombre, email)
 * - Textarea: Campo para mensaje
 * - Label: Etiquetas de formulario
 * - Button: Botón de envío
 * - motion.div: Animaciones Framer Motion
 * - Lucide Icons: Mail, Phone, MapPin
 *
 * FLUJO DE USUARIO:
 * 1. Usuario ve héroe con título
 * 2. Arriba: 3 tarjetas con info de contacto
 * 3. Abajo (derecha): Formulario de contacto
 * 4. Ingresa nombre, email, mensaje
 * 5. Hace click en "Enviar Mensaje"
 * 6. Sistema valida campos (requeridos)
 * 7. Muestra mensaje de éxito por 5 segundos
 * 8. Limpia el formulario
 *
 * ESTADOS:
 * - formData: objeto con {name, email, message}
 * - isSubmitted: boolean para mostrar mensaje de éxito
 *
 * ============================================================================
 */
export default function Contact() {
  /**
   * Estado del formulario de contacto
   *
   * formData: {name, email, message} - Datos ingresados por usuario
   * isSubmitted: boolean - Muestra mensaje de éxito por 5 segundos
   *
   * FLUJO DE DATOS:
   * 1. Usuario escribe → handleInputChange actualiza formData
   * 2. Usuario envía → handleSubmit valida y simula envío
   * 3. isSubmitted = true → Mostrar pantalla de éxito
   * 4. setTimeout (5000ms) → isSubmitted = false → Volver al formulario
   */
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  /**
   * Maneja cambios en los inputs del formulario
   *
   * FUNCIONAMIENTO:
   * - Desestructura name y value del evento
   * - Actualiza formData de forma inmediata (controlled component)
   * - Usa spread operator para preservar otros campos
   *
   * PARÁMETROS:
   * - e: Evento de cambio del input o textarea
   *
   * NOTA: Ambos Input y Textarea soportan el mismo manejador
   */
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /**
   * Maneja el envío del formulario de contacto
   *
   * PASOS:
   * 1. Prevenir comportamiento por defecto del formulario
   * 2. Log a consola con datos del formulario
   * 3. Mostrar mensaje de éxito (isSubmitted = true)
   * 4. Limpiar formulario
   * 5. Auto-ocultar mensaje después de 5 segundos
   *
   * VALIDACIÓN:
   * - HTML5 valida campos requeridos (required attribute)
   * - Los campos vacíos previenen envío automáticamente
   *
   * TODO: Conectar a API backend real
   * - POST /api/contact/send
   * - Manejar errores de envío
   * - Implementar CAPTCHA para prevenir spam
   * - Enviar confirmación por email al usuario
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to backend API
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    // Auto-ocultar mensaje de éxito después de 5 segundos
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <main className="flex flex-col">
      {/* ===== SECCIÓN HÉROE ===== */}
      {/* Encabezado azul con título y descripción */}
      <section className="bg-linear-to-r from-blue-600 to-blue-700 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Título principal animado */}
          <motion.h1
            className="text-3xl font-bold text-white md:text-4xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contáctanos
          </motion.h1>

          {/* Subtítulo descriptivo */}
          <motion.p
            className="mt-4 text-lg text-blue-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            ¿Tienes una pregunta o comentario? Nos encantaría escucharte.
          </motion.p>
        </div>
      </section>

      {/* ===== SECCIÓN DE CONTENIDO ===== */}
      {/* Grid responsivo: 1 col en mobile, 3 cols en desktop */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-3">
            {/* ===== COLUMNA 1: INFORMACIÓN DE CONTACTO ===== */}
            {/* 3 tarjetas con métodos de contacto (Teléfono, Email, Dirección) */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* TARJETA 1: Teléfono */}
              {/* Información de contacto por teléfono con horario */}
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-blue-600 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Teléfono</h3>
                    <p className="mt-2 text-gray-600">+57 (300) 717-1333</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Lun-Vie, 9am-6pm EST
                    </p>
                  </div>
                </div>
              </Card>

              {/* TARJETA 2: Email */}
              {/* Información de contacto por email con tiempo de respuesta */}
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-blue-600 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Correo Electrónico
                    </h3>
                    <p className="mt-2 text-gray-600">soporte@citysafe.com</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Responderemos en 24 horas
                    </p>
                  </div>
                </div>
              </Card>

              {/* TARJETA 3: Dirección */}
              {/* Información de ubicación física */}
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Dirección</h3>
                    <p className="mt-2 text-gray-600">
                      Carrera 20a # 50 - 11
                      <br />
                      Palmira, Valle del cauca
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* ===== COLUMNA 2-3: FORMULARIO DE CONTACTO ===== */}
            {/* Ocupa 2 columnas en desktop, 1 en mobile */}
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-8">
                {/* RENDERIZADO CONDICIONAL: Mostrar éxito o formulario */}
                {isSubmitted ? (
                  // ===== PANTALLA DE ÉXITO =====
                  <motion.div
                    className="flex flex-col items-center justify-center py-12"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* Ícono de éxito: círculo verde con checkmark */}
                    <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                      <svg
                        className="h-6 w-6 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>

                    {/* Título de éxito */}
                    <h3 className="text-xl font-semibold text-gray-900">
                      ¡Mensaje Enviado!
                    </h3>

                    {/* Mensaje confirmatorio */}
                    <p className="mt-2 text-gray-600 text-center">
                      Gracias por contactarnos. Te responderemos pronto.
                    </p>
                  </motion.div>
                ) : (
                  // ===== FORMULARIO DE CONTACTO =====
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* INPUT 1: Nombre */}
                    <div>
                      <Label
                        htmlFor="name"
                        className="font-medium text-gray-900"
                      >
                        Nombre *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Tu nombre"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-2"
                      />
                    </div>

                    {/* INPUT 2: Email */}
                    <div>
                      <Label
                        htmlFor="email"
                        className="font-medium text-gray-900"
                      >
                        Correo Electrónico *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="tu@correo.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-2"
                      />
                    </div>

                    {/* TEXTAREA: Mensaje */}
                    <div>
                      <Label
                        htmlFor="message"
                        className="font-medium text-gray-900"
                      >
                        Mensaje *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        placeholder="Tu mensaje aquí..."
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="mt-2"
                      />
                    </div>

                    {/* BOTÓN: Enviar Mensaje */}
                    {/* Deshabilitado mientras hay validación de HTML5 */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                    >
                      Enviar Mensaje
                    </Button>
                  </form>
                )}
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
