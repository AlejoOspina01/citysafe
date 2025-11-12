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
 * Contact Page (/contact)
 * Contact form for users to reach out to CitySafe team
 * Includes form validation and contact information
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to backend API
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-blue-600 to-blue-700 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h1
            className="text-3xl font-bold text-white md:text-4xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contáctanos
          </motion.h1>
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

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-3">
            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Teléfono</h3>
                    <p className="mt-2 text-gray-600">+1 (234) 567-890</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Lun-Vie, 9am-6pm EST
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Correo Electrónico
                    </h3>
                    <p className="mt-2 text-gray-600">support@citysafe.com</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Responderemos en 24 horas
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Dirección</h3>
                    <p className="mt-2 text-gray-600">
                      123 Safety Street
                      <br />
                      City, State 12345
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-8">
                {isSubmitted ? (
                  <motion.div
                    className="flex flex-col items-center justify-center py-12"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
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
                    <h3 className="text-xl font-semibold text-gray-900">
                      ¡Mensaje Enviado!
                    </h3>
                    <p className="mt-2 text-gray-600 text-center">
                      Gracias por contactarnos. Te responderemos pronto.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
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
