# ⚡ Quick Start - CitySafe

## 30 segundos para tener el proyecto corriendo

```bash
cd citysafe
npm install
npm run dev
```

Abre: **http://localhost:3000**

---

## 📋 Rutas para Explorar

### Home Page
- **URL**: http://localhost:3000
- **Qué ver**: Landing page con gráficos y características

### Reporte de Incidentes
- **URL**: http://localhost:3000/report
- **Qué probar**: Formulario de 2 pasos

### Contacto
- **URL**: http://localhost:3000/contact
- **Qué hacer**: Llenar formulario de contacto

### Login
- **URL**: http://localhost:3000/login
- **Opciones**: Password, Email Link, Guest

### Admin Dashboard
- **URL**: http://localhost:3000/admin
- **Qué ver**: Estadísticas y gráficos

### Lista de Reportes
- **URL**: http://localhost:3000/admin/reports
- **Qué hacer**: Filtrar y buscar reportes

### Descargar Reportes
- **URL**: http://localhost:3000/admin/download
- **Qué hacer**: Exportar a CSV, XLSX, PDF

---

## 🛠️ Comandos Principales

| Comando | Qué hace |
|---------|----------|
| `npm run dev` | Inicia servidor desarrollo (hot reload) |
| `npm run build` | Build optimizado para producción |
| `npm run start` | Ejecuta build de producción localmente |
| `npm run lint` | Verifica calidad del código |

---

## 📁 Estructura Principal

```
src/
├── app/              # Rutas (Home, Contact, Report, etc)
├── components/       # Componentes reutilizables
├── data/            # Datos simulados
└── lib/             # Utilidades
```

---

## 🎨 Personalización Rápida

### Cambiar Colores Principales

Editar en `tailwind.config.js`:

```javascript
colors: {
  blue: {
    600: '#YOUR_COLOR',  // Cambiar azul primario
  }
}
```

### Cambiar Textos

Los textos principales están en los componentes. Buscar y reemplazar es fácil en VS Code.

### Agregar Nueva Página

1. Crear carpeta en `src/app/`
2. Crear `page.tsx` dentro
3. ¡Automáticamente disponible en esa ruta!

Ejemplo:
```
src/app/about/page.tsx → http://localhost:3000/about
```

---

## 🔗 Conectar Backend

1. Crear archivo `src/lib/api.ts`
2. Agregar variable de entorno `.env.local`
3. Reemplazar datos simulados con llamadas API

Ver `SETUP_GUIDE.md` para detalles completos.

---

## 📚 Documentación

- **README.md** - Guía completa
- **SETUP_GUIDE.md** - Setup y configuración detallada
- **PROJECT_SUMMARY.md** - Resumen del proyecto
- **Comentarios en código** - Explicaciones en archivos

---

## ✨ Tips Rápidos

### Hot Reload
El servidor se recarga automáticamente cuando cambias código. ¡No necesitas reiniciar!

### TypeScript
Tienes type safety completo. VS Code muestra errores en tiempo real.

### TailwindCSS
Usa clases directamente:
```tsx
<button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white">
  Click me
</button>
```

### Componentes Reutilizables
Importa desde `@/components/ui/`:
```tsx
import { Button } from '@/components/ui/button';
```

---

## 🎯 Próximos Pasos

1. ✅ Ejecutar en desarrollo (`npm run dev`)
2. 📱 Explorar todas las páginas
3. 🔍 Revisar código de componentes
4. 🎨 Personalizar colores y textos
5. 🔗 Conectar con tu backend

---

## ❓ Problemas Comunes

**Puerto 3000 en uso?**
```bash
npm run dev -- -p 3001  # Usar puerto 3001
```

**Dependencias no instaladas?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Errores de TypeScript?**
```bash
npm run build  # Ver errores específicos
```

---

## 📞 Necesitas Ayuda?

- Revisa los comentarios en el código
- Consulta `SETUP_GUIDE.md`
- Mira `PROJECT_SUMMARY.md` para arquitectura

---

🚀 **¡Ahora estás listo para desarrollar!**
