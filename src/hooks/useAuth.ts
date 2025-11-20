/**
 * ============================================================================
 * useAuth Hook - Gestión de Estado de Autenticación
 * ============================================================================
 *
 * DESCRIPCIÓN:
 * - Hook personalizado para manejar el estado de autenticación del usuario
 * - Verifica si el usuario está autenticado
 * - Proporciona funciones para login y logout
 * - Persiste el estado en localStorage
 *
 * UBICACIÓN: src/hooks/useAuth.ts
 *
 * CARACTERÍSTICAS:
 * - Detecta autenticación del usuario
 * - Maneja funciones de login/logout
 * - Almacena estado en localStorage
 * - Hook reutilizable en cualquier componente
 *
 * ============================================================================
 */

import { useState, useEffect, useCallback } from "react";

interface AuthUser {
  id: string;
  firstName: string;
  lastName: string;
  email?: string;
}

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  /**
   * Función reutilizable para verificar autenticación
   * Se usa en el efecto y en el listener de storage
   */
  const checkAuth = useCallback(() => {
    const storedUser = localStorage.getItem("authUser");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Error al parsear usuario:", error);
        setUser(null);
        setIsAuthenticated(false);
      }
    } else {
      setUser(null);
      setIsAuthenticated(false);
    }
  }, []);

  /**
   * Verifica si hay un usuario autenticado al montar el componente
   * Busca en localStorage y configura listeners para cambios en tiempo real
   */
  useEffect(() => {
    // Verifica autenticación inicial
    checkAuth();
    setIsLoading(false);

    /**
     * Listener para cambios en localStorage desde otras pestañas/ventanas
     * o desde la misma aplicación
     */
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "authUser") {
        checkAuth();
      }
    };

    // Listener personalizado para cambios en la misma pestaña
    const handleCustomEvent = () => {
      checkAuth();
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("authChange", handleCustomEvent);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("authChange", handleCustomEvent);
    };
  }, [checkAuth]);

  /**
   * Simula login del usuario
   * Guarda usuario en localStorage y dispara evento de cambio
   *
   * @param user - Datos del usuario a autenticar
   */
  const login = (user: AuthUser) => {
    localStorage.setItem("authUser", JSON.stringify(user));
    setUser(user);
    setIsAuthenticated(true);
    // Dispara evento personalizado para notificar cambios en la misma pestaña
    window.dispatchEvent(new Event("authChange"));
  };

  /**
   * Simula logout del usuario
   * Elimina datos de localStorage y dispara evento de cambio
   */
  const logout = () => {
    localStorage.removeItem("authUser");
    setUser(null);
    setIsAuthenticated(false);
    // Dispara evento personalizado para notificar cambios en la misma pestaña
    window.dispatchEvent(new Event("authChange"));
  };

  return {
    isAuthenticated,
    user,
    isLoading,
    login,
    logout,
  };
}
