"use client";

import { useEffect } from "react";

/**
 * Admin Layout
 * Layout específico para páginas dentro de /admin
 * Agrega margen izquierdo al footer para acomodarse al sidebar
 * Usa efecto para agregar clase CSS dinámicamente al footer global
 */
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Agregar clase md:ml-64 al footer cuando estamos en admin
    const footer = document.querySelector("footer");
    if (footer) {
      footer.classList.add("md:ml-64");
    }

    // Cleanup: remover la clase cuando salimos de admin
    return () => {
      if (footer) {
        footer.classList.remove("md:ml-64");
      }
    };
  }, []);

  return <>{children}</>;
}
