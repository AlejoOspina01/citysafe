"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Mail, Lock, UserCheck } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";

/**
 * ============================================================================
 * LOGIN PAGE (/login)
 * ============================================================================
 *
 * DESCRIPCIÓN GENERAL:
 * - Página de autenticación para usuarios administrativos
 * - Permite 3 métodos de acceso diferentes
 * - Interfaz intuitiva con pasos claros
 * - Incluye animaciones y validación de formularios
 *
 * UBICACIÓN: src/app/login/page.tsx
 *
 * CARACTERÍSTICAS:
 * 1. Selector de método de login (3 opciones):
 *    a) Contraseña
 *    b) Enlace de correo electrónico
 *    c) Acceso de invitado
 * 2. Validación de formularios
 * 3. Estados de carga (isLoading)
 * 4. Pantalla de éxito post-login
 * 5. Animaciones suaves (Framer Motion)
 * 6. Diseño responsivo
 *
 * FLUJOS DE USUARIO:
 * Flujo 1: Login con Contraseña
 *   - Usuario selecciona "Log in with Password"
 *   - Ingresa email y contraseña
 *   - Sistema valida credenciales (TODO: backend)
 *   - Muestra pantalla de éxito
 *   - Redirige a /admin
 *
 * Flujo 2: Login con Enlace de Email
 *   - Usuario selecciona "Continue with Email Link"
 *   - Ingresa solo el email
 *   - Sistema envía enlace de acceso (TODO: backend)
 *   - Muestra pantalla de éxito
 *
 * Flujo 3: Acceso de Invitado
 *   - Usuario selecciona "Continue as Guest"
 *   - No requiere credenciales
 *   - Crea sesión anónima (TODO: backend)
 *   - Acceso limitado al dashboard
 *
 * COMPONENTES UI USADOS:
 * - Button: Botones primarios y secundarios
 * - Input: Campos de texto (email, contraseña)
 * - Label: Etiquetas para inputs
 * - Card: Tarjetas para organizar contenido
 * - motion.div: Animaciones Framer Motion
 * - Lucide Icons: Íconos (Mail, Lock, UserCheck)
 *
 * ============================================================================
 */

/**
 * Estados del componente Login
 *
 * email: string - Email ingresado por el usuario
 * password: string - Contraseña ingresada
 * loginMethod: 'password' | 'email-link' | 'guest' | null - Método seleccionado
 * isLoading: boolean - Indica si se está procesando (simulado en frontend)
 * isSuccess: boolean - Indica si el login fue exitoso
 *
 * TRANSICIONES DE ESTADO:
 * 1. Inicial: loginMethod = null (mostrar selector)
 * 2. Intermedio: loginMethod = seleccionado (mostrar formulario)
 * 3. Loading: isLoading = true (deshabilitar inputs)
 * 4. Final: isSuccess = true (mostrar mensaje de éxito)
 */
export default function Login() {
  // ===== HOOKS =====
  const { login } = useAuth();

  // ===== ESTADOS =====
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMethod, setLoginMethod] = useState<
    "password" | "email-link" | "guest" | null
  >(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // ===== MANEJADORES DE EVENTOS =====

  /**
   * Maneja el login con contraseña
   *
   * PASOS:
   * 1. Prevenir envío del formulario (e.preventDefault)
   * 2. Activar estado de carga
   * 3. Enviar credenciales al backend (TODO)
   * 4. Simular delay de red (1000ms)
   * 5. Llamar a login() para establecer la sesión
   * 6. Mostrar pantalla de éxito
   *
   * VALIDACIÓN:
   * - Email y contraseña no pueden estar vacíos
   * - Los inputs se deshabilitan mientras isLoading = true
   *
   * TODO: Conectar a API backend real
   * - POST /api/auth/login
   * - Manejar errores de autenticación
   * - Almacenar JWT token en localStorage/cookie
   */
  const handlePasswordLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: Connect to backend authentication API
    console.log("Password login:", { email, password });
    setTimeout(() => {
      // Crear usuario mock y establecer sesión
      login({
        id: Math.random().toString(),
        firstName: email.split("@")[0],
        lastName: "Admin",
        email: email,
      });
      setIsLoading(false);
      setIsSuccess(true);
    }, 1000);
  };

  /**
   * Maneja el login con enlace de email
   *
   * PASOS:
   * 1. Prevenir envío del formulario
   * 2. Activar estado de carga
   * 3. Enviar email al backend (TODO)
   * 4. Backend envía enlace de acceso al email
   * 5. Llamar a login() para establecer la sesión
   * 6. Mostrar pantalla de éxito
   *
   * FLUJO:
   * - Usuario recibe email con link mágico
   * - Al hacer click, se autentica sin contraseña
   * - Ideal para mejorar seguridad
   *
   * TODO: Implementar autenticación sin contraseña
   * - POST /api/auth/send-login-link
   * - Crear endpoints para validar links mágicos
   */
  const handleEmailLink = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: Connect to backend API for email link
    console.log("Email link login:", { email });
    setTimeout(() => {
      // Crear usuario mock y establecer sesión
      login({
        id: Math.random().toString(),
        firstName: email.split("@")[0],
        lastName: "Admin",
        email: email,
      });
      setIsLoading(false);
      setIsSuccess(true);
    }, 1000);
  };

  /**
   * Maneja el acceso como invitado
   *
   * FUNCIONAMIENTO:
   * - No requiere credenciales
   * - Crea sesión anónima/limitada
   * - Acceso de solo lectura al dashboard
   * - Llamar a login() para establecer la sesión de invitado
   *
   * LIMITACIONES:
   * - No puede crear/editar reportes
   * - Acceso a dashboard limitado
   * - Sesión temporal
   *
   * TODO: Implementar guest sessions
   * - POST /api/auth/guest
   * - Crear token de sesión temporal
   * - Establecer permisos limitados
   */
  const handleGuestAccess = () => {
    setIsLoading(true);
    // TODO: Create guest session
    console.log("Guest access");
    setTimeout(() => {
      // Crear usuario invitado mock y establecer sesión
      login({
        id: "guest_" + Math.random().toString(),
        firstName: "Invitado",
        lastName: "",
        email: "guest@citysafe.com",
      });
      setIsLoading(false);
      setIsSuccess(true);
    }, 1000);
  };

  /**
   * PANTALLA DE ÉXITO
   *
   * Se muestra después de un login exitoso
   * Contiene:
   * - Encabezado azul con título de bienvenida
   * - Card de éxito con ícono de check verde
   * - Botón para navegar al panel /admin
   * - Animación de entrada (fade + scale)
   *
   * UBICACIÓN EN FLUJO:
   * isSuccess = true → Mostrar esta pantalla
   */
  if (isSuccess) {
    return (
      <main className="flex flex-col">
        {/* Encabezado con fondo azul degradado */}
        <section className="bg-linear-to-r from-blue-600 to-blue-700 py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-white md:text-4xl">
              Bienvenido al Panel de Administración CitySafe
            </h1>
          </div>
        </section>

        {/* Sección de contenido con Card de éxito */}
        <section className="py-16 md:py-24 bg-gray-50 grow">
          <div className="mx-auto max-w-md px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              {/* Card de éxito con ícono y mensaje */}
              <Card className="p-8">
                {/* Ícono de éxito: circle verde con checkmark */}
                <div className="flex justify-center mb-6">
                  <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                    <UserCheck className="h-8 w-8 text-green-600" />
                  </div>
                </div>

                {/* Título de éxito */}
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  ¡Ingreso Exitoso!
                </h2>

                {/* Mensaje de redirección */}
                <p className="text-gray-600 mb-8">
                  Redirigiendo al panel de control...
                </p>

                {/* Botón para ir al admin */}
                <Link href="/admin">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Ir al Panel de Control
                  </Button>
                </Link>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>
    );
  }

  // ===== RENDERIZADO PRINCIPAL =====
  // Pantalla de selección de método o formularios de login

  return (
    <main className="flex flex-col">
      {/* ===== SECCIÓN HÉROE ===== */}
      {/* Encabezado con fondo azul degradado y título/descripción */}
      <section className="bg-linear-to-r from-blue-600 to-blue-700 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Título principal con animación */}
          <motion.h1
            className="text-3xl font-bold text-white md:text-4xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Ingreso de Administrador
          </motion.h1>

          {/* Subtítulo descriptivo con animación */}
          <motion.p
            className="mt-4 text-lg text-blue-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Accede al panel de administración de CitySafe para gestionar
            reportes de incidentes.
          </motion.p>
        </div>
      </section>

      {/* ===== SECCIÓN DE LOGIN ===== */}
      {/* Contenedor principal con fondo gris claro */}
      <section className="py-16 md:py-24 bg-gray-50 grow">
        <div className="mx-auto max-w-md px-4 sm:px-6 lg:px-8">
          {/* RENDERIZADO CONDICIONAL: Mostrar selector o formulario según loginMethod */}
          {loginMethod === null ? (
            // ===== PANTALLA 1: SELECTOR DE MÉTODOS =====
            // Mostrada cuando usuario no ha seleccionado método aún
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Card principal con 3 opciones de login */}
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Elige un Método de Ingreso
                </h2>

                {/* OPCIÓN 1: Login con Contraseña */}
                {/* Botón primario azul que activa formulario de email/password */}
                <Button
                  onClick={() => setLoginMethod("password")}
                  className="w-full mb-3 bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2"
                >
                  <Lock className="h-4 w-4" />
                  Ingresar con Contraseña
                </Button>

                {/* OPCIÓN 2: Login con Enlace de Email */}
                {/* Botón outline que activa formulario de email solamente */}
                <Button
                  onClick={() => setLoginMethod("email-link")}
                  variant="outline"
                  className="w-full mb-3 border-gray-300 flex items-center justify-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  Continuar con Enlace de Correo
                </Button>

                {/* OPCIÓN 3: Acceso de Invitado */}
                {/* Botón que crea sesión temporal sin credenciales */}
                <Button
                  onClick={() => handleGuestAccess()}
                  variant="outline"
                  className="w-full border-gray-300 flex items-center justify-center gap-2"
                  disabled={isLoading}
                >
                  <UserCheck className="h-4 w-4" />
                  Continuar como Invitado
                </Button>
              </Card>

              {/* Texto de ayuda para usuarios sin cuenta */}
              <p className="text-center text-sm text-gray-600">
                ¿No tienes una cuenta?{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Contacta al administrador
                </a>
              </p>
            </motion.div>
          ) : (
            // ===== PANTALLA 2: FORMULARIOS DE LOGIN =====
            // Mostrada después de seleccionar un método
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8">
                {/* Botón para volver al selector de métodos */}
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setLoginMethod(null)}
                  className="mb-6 border-gray-300 w-full"
                >
                  ← Atrás
                </Button>

                {/* ===== FORMULARIO 1: LOGIN CON CONTRASEÑA ===== */}
                {/* Mostrado si loginMethod === 'password' */}
                {loginMethod === "password" && (
                  <form onSubmit={handlePasswordLogin} className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900">
                      Ingresar con Contraseña
                    </h2>

                    {/* Input: Email */}
                    <div>
                      <Label
                        htmlFor="email"
                        className="font-medium text-gray-900"
                      >
                        Correo Electrónico *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="admin@citysafe.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-2"
                      />
                    </div>

                    {/* Input: Contraseña */}
                    <div>
                      <Label
                        htmlFor="password"
                        className="font-medium text-gray-900"
                      >
                        Contraseña *
                      </Label>
                      <Input
                        id="password"
                        type="password"
                        required
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-2"
                      />
                    </div>

                    {/* Link de recuperación de contraseña */}
                    <a
                      href="#"
                      className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                    >
                      ¿Olvidaste la contraseña?
                    </a>

                    {/* Botón de envío del formulario */}
                    {/* Deshabilitado si faltan campos o se está cargando */}
                    <Button
                      type="submit"
                      disabled={isLoading || !email || !password}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                    >
                      {isLoading ? "Ingresando..." : "Ingresar"}
                    </Button>
                  </form>
                )}

                {/* ===== FORMULARIO 2: LOGIN CON ENLACE DE EMAIL ===== */}
                {/* Mostrado si loginMethod === 'email-link' */}
                {loginMethod === "email-link" && (
                  <form onSubmit={handleEmailLink} className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900">
                      Inicio de Sesión con Enlace
                    </h2>

                    {/* Explicación del método */}
                    <p className="text-gray-600 text-sm">
                      Ingresa tu correo electrónico y te enviaremos un enlace de
                      acceso seguro.
                    </p>

                    {/* Input: Email solamente */}
                    <div>
                      <Label
                        htmlFor="email"
                        className="font-medium text-gray-900"
                      >
                        Correo Electrónico *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="admin@citysafe.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-2"
                      />
                    </div>

                    {/* Botón de envío */}
                    {/* Deshabilitado si email está vacío o se está cargando */}
                    <Button
                      type="submit"
                      disabled={isLoading || !email}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                    >
                      {isLoading
                        ? "Enviando enlace..."
                        : "Enviar Enlace de Acceso"}
                    </Button>
                  </form>
                )}
              </Card>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
}
