"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import { ArrowLeft, Check, User } from "lucide-react";
import Link from "next/link";

/**
 * ============================================================================
 * REGISTER PAGE (/register)
 * ============================================================================
 *
 * DESCRIPCIÓN GENERAL:
 * - Página de registro para nuevos usuarios de la plataforma
 * - Formulario completo con validación de campos
 * - Recopila información personal y de ubicación
 * - Interfaz intuitiva con animaciones
 * - Pantalla de confirmación post-registro
 *
 * UBICACIÓN: src/app/register/page.tsx
 *
 * CARACTERÍSTICAS:
 * 1. Formulario de registro con 8 campos principales
 * 2. Validación de campos requeridos
 * 3. Selecciones predefinidas (tipo de documento, ocupación)
 * 4. Estados de carga (isLoading)
 * 5. Pantalla de éxito post-registro
 * 6. Animaciones suaves (Framer Motion)
 * 7. Diseño responsivo
 * 8. Enlace a login para usuarios existentes
 *
 * CAMPOS DEL REGISTRO:
 * 1. Nombre (obligatorio) - Nombre de pila
 * 2. Apellido (obligatorio) - Apellido del usuario
 * 3. Tipo de Documento (obligatorio) - CC, CE, PA, etc.
 * 4. Número de Documento (obligatorio) - Identificación única
 * 5. Barrio (obligatorio) - Sector/zona de residencia
 * 6. Dirección (obligatorio) - Dirección exacta
 * 7. Ocupación (opcional) - Profesión/empleo
 * 8. Teléfono (opcional) - Contacto directo
 *
 * FLUJO DE USUARIO:
 * 1. Usuario accede a /register
 * 2. Ve formulario vacío con todos los campos
 * 3. Rellena campos requeridos (nombre, apellido, documento, etc.)
 * 4. Selecciona tipo de documento de dropdown
 * 5. Selecciona ocupación de dropdown
 * 6. Hace click en "Crear Cuenta"
 * 7. Sistema valida campos (TODO: backend)
 * 8. Muestra pantalla de éxito
 * 9. Opción para ir a login
 *
 * TIPOS DE DOCUMENTO DISPONIBLES:
 * - CC (Cédula de Ciudadanía)
 * - CE (Cédula de Extranjería)
 * - PA (Pasaporte)
 * - TI (Tarjeta de Identidad)
 * - RC (Registro Civil)
 *
 * OCUPACIONES PREDEFINIDAS:
 * - Estudiante
 * - Empleado Privado
 * - Empleado Público
 * - Independiente
 * - Empresario
 * - Desempleado
 * - Jubilado
 * - Otro
 *
 * ============================================================================
 */

interface RegisterFormData {
  firstName: string;
  lastName: string;
  documentType: string;
  documentNumber: string;
  neighborhood: string;
  address: string;
  occupation: string;
  phone: string;
}

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<RegisterFormData>({
    firstName: "",
    lastName: "",
    documentType: "",
    documentNumber: "",
    neighborhood: "",
    address: "",
    occupation: "",
    phone: "",
  });

  // Arrays para selecciones predefinidas
  const documentTypes = [
    { value: "CC", label: "Cédula de Ciudadanía (CC)" },
    { value: "CE", label: "Cédula de Extranjería (CE)" },
    { value: "PA", label: "Pasaporte (PA)" },
    { value: "TI", label: "Tarjeta de Identidad (TI)" },
    { value: "RC", label: "Registro Civil (RC)" },
  ];

  const occupations = [
    "Estudiante",
    "Empleado Privado",
    "Empleado Público",
    "Independiente",
    "Empresario",
    "Desempleado",
    "Jubilado",
    "Otro",
  ];

  /**
   * Maneja cambios en los inputs del formulario
   *
   * FUNCIONAMIENTO:
   * - Extrae name y value del input
   * - Actualiza estado formData manteniendo otros campos
   * - Controlled component pattern
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /**
   * Maneja cambios en los selects (dropdown)
   *
   * FUNCIONAMIENTO:
   * - Recibe el nombre del campo y el valor seleccionado
   * - Actualiza estado formData
   * - Para documentType y occupation
   */
  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /**
   * Valida los campos requeridos del formulario
   *
   * CAMPOS REQUERIDOS:
   * - firstName
   * - lastName
   * - documentType
   * - documentNumber
   * - neighborhood
   * - address
   *
   * RETORNA: boolean
   *   - true si todos los campos requeridos están rellenos
   *   - false si falta algún campo requerido
   */
  const isFormValid = (): boolean => {
    return (
      formData.firstName.trim() !== "" &&
      formData.lastName.trim() !== "" &&
      formData.documentType !== "" &&
      formData.documentNumber.trim() !== "" &&
      formData.neighborhood.trim() !== "" &&
      formData.address.trim() !== ""
    );
  };

  /**
   * Maneja el envío del formulario de registro
   *
   * FUNCIONAMIENTO:
   * 1. Previene envío por defecto
   * 2. Valida que todos los campos requeridos estén rellenos
   * 3. Establece isLoading = true (simula carga)
   * 4. Simula delay de 2 segundos (en servidor sería validación real)
   * 5. Establece isSuccess = true (muestra pantalla de éxito)
   * 6. TODO: Integrar con backend para validación real
   *    - Verificar que documentNumber sea único
   *    - Crear usuario en base de datos
   *    - Enviar email de confirmación
   *    - Crear sesión de usuario
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid()) {
      alert("Por favor, completa todos los campos requeridos");
      return;
    }

    setIsLoading(true);

    // Simula delay de procesamiento
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 2000);
  };

  // Pantalla de éxito
  if (isSuccess) {
    return (
      <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <Card className="p-8 border-0 shadow-2xl">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex justify-center mb-6"
            >
              <div className="bg-green-100 p-4 rounded-full">
                <Check className="w-8 h-8 text-green-600" />
              </div>
            </motion.div>

            <h1 className="text-3xl font-bold text-center text-gray-900 mb-2">
              ¡Bienvenido!
            </h1>

            <p className="text-center text-gray-600 mb-4">
              Tu cuenta ha sido creada exitosamente
            </p>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Usuario registrado:</span>
              </p>
              <p className="text-lg font-bold text-blue-600">
                {formData.firstName} {formData.lastName}
              </p>
              <p className="text-sm text-gray-600 mt-2">
                {formData.documentType} - {formData.documentNumber}
              </p>
            </div>

            <p className="text-center text-gray-600 text-sm mb-6">
              Ya puedes iniciar sesión con tus datos para comenzar a reportar
              incidentes de seguridad en tu comunidad.
            </p>

            <Link href="/login">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Ir a Iniciar Sesión
              </Button>
            </Link>

            <Link href="/">
              <Button variant="outline" className="w-full mt-3">
                Volver al Inicio
              </Button>
            </Link>
          </Card>
        </motion.div>
      </div>
    );
  }

  // Formulario de registro
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver
            </Button>
          </Link>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-600 p-3 rounded-lg">
                <User className="w-6 h-6 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Crear Cuenta
            </h1>
            <p className="text-gray-600">
              Regístrate para comenzar a reportar incidentes de seguridad
            </p>
          </div>
        </motion.div>

        {/* Formulario */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="p-8 border-0 shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                {/* Nombre y Apellido */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="firstName"
                      className="text-gray-700 font-semibold"
                    >
                      Nombre *
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="Juan"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="mt-2 border-gray-300"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="lastName"
                      className="text-gray-700 font-semibold"
                    >
                      Apellido *
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Pérez García"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="mt-2 border-gray-300"
                    />
                  </div>
                </div>

                {/* Tipo de Documento */}
                <div>
                  <Label className="text-gray-700 font-semibold">
                    Tipo de Documento *
                  </Label>
                  <Select
                    value={formData.documentType}
                    onValueChange={(value) =>
                      handleSelectChange("documentType", value)
                    }
                  >
                    <SelectTrigger className="mt-2 border-gray-300">
                      <SelectValue placeholder="Selecciona el tipo de documento" />
                    </SelectTrigger>
                    <SelectContent>
                      {documentTypes.map((doc) => (
                        <SelectItem key={doc.value} value={doc.value}>
                          {doc.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Número de Documento */}
                <div>
                  <Label
                    htmlFor="documentNumber"
                    className="text-gray-700 font-semibold"
                  >
                    Número de Documento *
                  </Label>
                  <Input
                    id="documentNumber"
                    name="documentNumber"
                    placeholder="1234567890"
                    value={formData.documentNumber}
                    onChange={handleInputChange}
                    className="mt-2 border-gray-300"
                  />
                </div>

                {/* Barrio */}
                <div>
                  <Label
                    htmlFor="neighborhood"
                    className="text-gray-700 font-semibold"
                  >
                    Barrio *
                  </Label>
                  <Input
                    id="neighborhood"
                    name="neighborhood"
                    placeholder="Ej: Laureles, Centro, Sabaneta"
                    value={formData.neighborhood}
                    onChange={handleInputChange}
                    className="mt-2 border-gray-300"
                  />
                </div>

                {/* Dirección */}
                <div>
                  <Label
                    htmlFor="address"
                    className="text-gray-700 font-semibold"
                  >
                    Dirección *
                  </Label>
                  <Input
                    id="address"
                    name="address"
                    placeholder="Calle 50 #25-40, Apartamento 302"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="mt-2 border-gray-300"
                  />
                </div>

                {/* Ocupación */}
                <div>
                  <Label className="text-gray-700 font-semibold">
                    Ocupación
                  </Label>
                  <Select
                    value={formData.occupation}
                    onValueChange={(value) =>
                      handleSelectChange("occupation", value)
                    }
                  >
                    <SelectTrigger className="mt-2 border-gray-300">
                      <SelectValue placeholder="Selecciona tu ocupación (opcional)" />
                    </SelectTrigger>
                    <SelectContent>
                      {occupations.map((occ) => (
                        <SelectItem key={occ} value={occ}>
                          {occ}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Teléfono */}
                <div>
                  <Label
                    htmlFor="phone"
                    className="text-gray-700 font-semibold"
                  >
                    Teléfono
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="3001234567"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-2 border-gray-300"
                  />
                </div>

                {/* Nota de campos requeridos */}
                <p className="text-sm text-gray-500">* Campo requerido</p>

                {/* Botones */}
                <div className="flex gap-4 pt-4">
                  <Link href="/login" className="flex-1">
                    <Button type="button" variant="outline" className="w-full">
                      Tengo Cuenta
                    </Button>
                  </Link>

                  <Button
                    type="submit"
                    disabled={!isFormValid() || isLoading}
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                  >
                    {isLoading ? "Creando cuenta..." : "Crear Cuenta"}
                  </Button>
                </div>
              </div>
            </form>
          </Card>
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-gray-600 text-sm mt-6"
        >
          Al registrarte, aceptas nuestros términos de servicio y política de
          privacidad
        </motion.p>
      </div>
    </div>
  );
}
