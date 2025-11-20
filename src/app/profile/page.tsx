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
import {
  ArrowLeft,
  Edit2,
  Save,
  X,
  MapPin,
  Phone,
  Briefcase,
  FileText,
  LogOut,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

/**
 * ============================================================================
 * USER PROFILE PAGE (/profile)
 * ============================================================================
 *
 * DESCRIPCIÓN GENERAL:
 * - Página de perfil para usuarios que han iniciado sesión
 * - Muestra información personal del usuario
 * - Permite editar datos personales
 * - Visualiza estadísticas de reportes del usuario
 * - Interfaz intuitiva con animaciones
 *
 * UBICACIÓN: src/app/profile/page.tsx
 *
 * CARACTERÍSTICAS:
 * 1. Información personal del usuario (8 campos)
 * 2. Modo lectura y modo edición
 * 3. Validación de cambios
 * 4. Estadísticas de reportes del usuario
 * 5. Historial reciente de reportes (últimos 3)
 * 6. Opción para cerrar sesión
 * 7. Animaciones suaves (Framer Motion)
 * 8. Diseño responsivo
 * 9. Foto de perfil (placeholder)
 * 10. Fecha de registro
 *
 * SECCIONES DEL PERFIL:
 * 1. Header con foto y datos básicos
 * 2. Información Personal (modo lectura/edición)
 * 3. Estadísticas de Reportes
 * 4. Historial de Últimos Reportes
 * 5. Opciones de Cuenta
 *
 * DATOS DE PRUEBA:
 * - Usuario: Juan Pérez García
 * - Documento: CC - 1234567890
 * - Ubicación: Laureles, Medellín
 * - Dirección: Calle 50 #25-40, Apt 302
 * - Ocupación: Empleado Privado
 * - Teléfono: 3001234567
 * - Fecha de Registro: 15 de Noviembre de 2025
 * - Reportes Totales: 5
 * - Reportes Resueltos: 3
 * - Reportes Pendientes: 2
 *
 * FLUJO DE USUARIO:
 * 1. Usuario accede a /profile (debe estar autenticado)
 * 2. Ve su información personal en modo lectura
 * 3. Ve estadísticas de sus reportes
 * 4. Ve historial reciente de reportes
 * 5. Puede hacer click en "Editar Perfil"
 * 6. Entra en modo edición
 * 7. Puede cambiar datos personales
 * 8. Hace click en "Guardar Cambios"
 * 9. Se actualizan datos (TODO: backend)
 * 10. Vuelve a modo lectura
 * 11. Puede ver opción "Cerrar Sesión"
 *
 * ============================================================================
 */

interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  documentType: string;
  documentNumber: string;
  neighborhood: string;
  address: string;
  occupation: string;
  phone: string;
  registeredDate: string;
  totalReports: number;
  resolvedReports: number;
  pendingReports: number;
}

interface ReportHistory {
  id: string;
  type: string;
  status: "pending" | "investigating" | "resolved";
  date: string;
  location: string;
}

export default function UserProfilePage() {
  // ===== HOOKS =====
  const { logout } = useAuth();
  const router = useRouter();

  const [isEditMode, setIsEditMode] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // Datos de prueba del usuario
  const [userData, setUserData] = useState<UserProfile>({
    id: "USR-001",
    firstName: "Juan",
    lastName: "Pérez García",
    documentType: "CC",
    documentNumber: "1234567890",
    neighborhood: "Laureles",
    address: "Calle 50 #25-40, Apartamento 302",
    occupation: "Empleado Privado",
    phone: "3001234567",
    registeredDate: "15 de Noviembre de 2025",
    totalReports: 5,
    resolvedReports: 3,
    pendingReports: 2,
  });

  // Datos para edición
  const [editData, setEditData] = useState<UserProfile>(userData);

  // Historial reciente de reportes
  const recentReports: ReportHistory[] = [
    {
      id: "INC-001",
      type: "Robo",
      status: "resolved",
      date: "10 de Noviembre",
      location: "Centro Comercial Santa Fe",
    },
    {
      id: "INC-002",
      type: "Vandalismo",
      status: "investigating",
      date: "12 de Noviembre",
      location: "Parque Principal",
    },
    {
      id: "INC-003",
      type: "Actividad Sospechosa",
      status: "pending",
      date: "15 de Noviembre",
      location: "Barrio Laureles",
    },
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
   * Maneja cambios en los inputs del formulario de edición
   */
  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /**
   * Maneja cambios en el select de ocupación
   */
  const handleOccupationChange = (value: string) => {
    setEditData((prev) => ({
      ...prev,
      occupation: value,
    }));
  };

  /**
   * Valida que los datos editados sean válidos
   */
  const isEditValid = (): boolean => {
    return (
      editData.firstName.trim() !== "" &&
      editData.lastName.trim() !== "" &&
      editData.documentNumber.trim() !== "" &&
      editData.neighborhood.trim() !== "" &&
      editData.address.trim() !== ""
    );
  };

  /**
   * Guarda los cambios realizados al perfil
   * TODO: Integrar con backend para persistencia de datos
   */
  const handleSaveChanges = async () => {
    if (!isEditValid()) {
      alert("Por favor, completa todos los campos requeridos");
      return;
    }

    setIsSaving(true);

    // Simula delay de procesamiento
    setTimeout(() => {
      setUserData(editData);
      setIsSaving(false);
      setIsEditMode(false);
    }, 1500);
  };

  /**
   * Cancela la edición sin guardar cambios
   */
  const handleCancelEdit = () => {
    setEditData(userData);
    setIsEditMode(false);
  };

  /**
   * Obtiene el color de estado según el tipo
   */
  const getStatusColor = (status: string) => {
    switch (status) {
      case "resolved":
        return "bg-green-100 text-green-800";
      case "investigating":
        return "bg-yellow-100 text-yellow-800";
      case "pending":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  /**
   * Traduce el estado al español
   */
  const getStatusLabel = (status: string) => {
    switch (status) {
      case "resolved":
        return "Resuelto";
      case "investigating":
        return "Investigando";
      case "pending":
        return "Pendiente";
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header con botón volver */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link href="/admin">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver
            </Button>
          </Link>
        </motion.div>

        {/* Tarjeta de Perfil - Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-8 border-0 shadow-lg mb-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Foto de perfil */}
              <div className="shrink-0">
                <div className="w-24 h-24 bg-linear-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">
                    {userData.firstName[0]}
                    {userData.lastName[0]}
                  </span>
                </div>
              </div>

              {/* Información básica */}
              <div className="grow text-center md:text-left">
                <h1 className="text-3xl font-bold text-gray-900">
                  {userData.firstName} {userData.lastName}
                </h1>
                <p className="text-gray-600 mt-1">
                  {userData.documentType} - {userData.documentNumber}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Miembro desde {userData.registeredDate}
                </p>
              </div>

              {/* Botones de acción */}
              <div className="flex gap-3">
                {!isEditMode ? (
                  <>
                    <Button
                      onClick={() => setIsEditMode(true)}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      <Edit2 className="w-4 h-4 mr-2" />
                      Editar Perfil
                    </Button>
                    <Button
                      onClick={() => {
                        logout();
                        router.push("/");
                      }}
                      variant="outline"
                      className="border-red-300 hover:bg-red-50 text-red-600"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Cerrar Sesión
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      onClick={handleSaveChanges}
                      disabled={!isEditValid() || isSaving}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      <Save className="w-4 h-4 mr-2" />
                      {isSaving ? "Guardando..." : "Guardar Cambios"}
                    </Button>
                    <Button onClick={handleCancelEdit} variant="outline">
                      <X className="w-4 h-4 mr-2" />
                      Cancelar
                    </Button>
                  </>
                )}
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Estadísticas de Reportes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid md:grid-cols-3 gap-4 mb-6"
        >
          <Card className="p-6 border-0 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Reportes Totales</p>
                <p className="text-3xl font-bold text-blue-600">
                  {userData.totalReports}
                </p>
              </div>
              <FileText className="w-8 h-8 text-blue-600 opacity-20" />
            </div>
          </Card>

          <Card className="p-6 border-0 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Reportes Resueltos</p>
                <p className="text-3xl font-bold text-green-600">
                  {userData.resolvedReports}
                </p>
              </div>
              <FileText className="w-8 h-8 text-green-600 opacity-20" />
            </div>
          </Card>

          <Card className="p-6 border-0 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Reportes Pendientes</p>
                <p className="text-3xl font-bold text-red-600">
                  {userData.pendingReports}
                </p>
              </div>
              <FileText className="w-8 h-8 text-red-600 opacity-20" />
            </div>
          </Card>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Información Personal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="p-8 border-0 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Información Personal
              </h2>

              {!isEditMode ? (
                // Modo Lectura
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-gray-600 text-sm">Nombre</p>
                      <p className="text-lg font-semibold text-gray-900">
                        {userData.firstName}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Apellido</p>
                      <p className="text-lg font-semibold text-gray-900">
                        {userData.lastName}
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-gray-600 text-sm">Tipo de Documento</p>
                      <p className="text-lg font-semibold text-gray-900">
                        {userData.documentType}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">
                        Número de Documento
                      </p>
                      <p className="text-lg font-semibold text-gray-900">
                        {userData.documentNumber}
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-gray-600 text-sm flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Barrio
                      </p>
                      <p className="text-lg font-semibold text-gray-900">
                        {userData.neighborhood}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Dirección</p>
                      <p className="text-lg font-semibold text-gray-900">
                        {userData.address}
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-gray-600 text-sm flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        Ocupación
                      </p>
                      <p className="text-lg font-semibold text-gray-900">
                        {userData.occupation || "No especificada"}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        Teléfono
                      </p>
                      <p className="text-lg font-semibold text-gray-900">
                        {userData.phone}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                // Modo Edición
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-gray-700 font-semibold">
                        Nombre
                      </Label>
                      <Input
                        name="firstName"
                        value={editData.firstName}
                        onChange={handleEditChange}
                        className="mt-2 border-gray-300"
                      />
                    </div>
                    <div>
                      <Label className="text-gray-700 font-semibold">
                        Apellido
                      </Label>
                      <Input
                        name="lastName"
                        value={editData.lastName}
                        onChange={handleEditChange}
                        className="mt-2 border-gray-300"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-gray-700 font-semibold">
                        Número de Documento
                      </Label>
                      <Input
                        name="documentNumber"
                        value={editData.documentNumber}
                        onChange={handleEditChange}
                        className="mt-2 border-gray-300"
                      />
                    </div>
                    <div>
                      <Label className="text-gray-700 font-semibold">
                        Barrio
                      </Label>
                      <Input
                        name="neighborhood"
                        value={editData.neighborhood}
                        onChange={handleEditChange}
                        className="mt-2 border-gray-300"
                      />
                    </div>
                  </div>

                  <div>
                    <Label className="text-gray-700 font-semibold">
                      Dirección
                    </Label>
                    <Input
                      name="address"
                      value={editData.address}
                      onChange={handleEditChange}
                      className="mt-2 border-gray-300"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-gray-700 font-semibold">
                        Ocupación
                      </Label>
                      <Select
                        value={editData.occupation}
                        onValueChange={handleOccupationChange}
                      >
                        <SelectTrigger className="mt-2 border-gray-300">
                          <SelectValue />
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
                    <div>
                      <Label className="text-gray-700 font-semibold">
                        Teléfono
                      </Label>
                      <Input
                        name="phone"
                        value={editData.phone}
                        onChange={handleEditChange}
                        className="mt-2 border-gray-300"
                      />
                    </div>
                  </div>
                </div>
              )}
            </Card>
          </motion.div>

          {/* Historial de Reportes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="p-6 border-0 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Últimos Reportes
              </h3>

              <div className="space-y-4">
                {recentReports.map((report) => (
                  <motion.div
                    key={report.id}
                    whileHover={{ translateX: 4 }}
                    className="border-l-4 border-blue-600 pl-4 py-2"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-semibold text-gray-900">
                        {report.type}
                      </span>
                      <span
                        className={`text-xs px-2 py-1 rounded-full font-semibold ${getStatusColor(
                          report.status
                        )}`}
                      >
                        {getStatusLabel(report.status)}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{report.location}</p>
                    <p className="text-xs text-gray-500 mt-1">{report.date}</p>
                  </motion.div>
                ))}
              </div>

              <Button variant="outline" className="w-full mt-6">
                Ver Todos los Reportes
              </Button>
            </Card>
          </motion.div>
        </div>

        {/* Botón para crear nuevo reporte */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center"
        >
          <Link href="/report">
            <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg">
              Crear Nuevo Reporte
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
