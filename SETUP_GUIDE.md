# 🚀 Guía de Configuración - CitySafe

## Requisitos del Sistema

- **Node.js**: v18.0.0 o superior
- **npm**: v9.0.0 o superior (incluido con Node.js)
- **Git**: para control de versiones

## 📦 Instalación Inicial

### 1. Instalación de Dependencias

```bash
npm install
```

Esto instalará:
- Next.js 14 y React 19
- TypeScript
- TailwindCSS
- shadcn/ui
- Framer Motion
- Recharts
- Y más...

### 2. Verificar la Instalación

```bash
npm list next react typescript
```

Deberías ver algo como:
```
citysafe@0.1.0
├── next@16.0.2
├── react@19.0.0
└── typescript@5.x.x
```

## 🛠️ Comandos Disponibles

### Desarrollo

```bash
npm run dev
```

- Inicia el servidor de desarrollo en **http://localhost:3000**
- Hot reload habilitado
- TypeScript en tiempo real
- ESLint automático

### Build para Producción

```bash
npm run build
```

- Optimiza el código para producción
- Genera rutas estáticas donde sea posible
- Verifica types y linting

### Ejecutar Producción Localmente

```bash
npm run build
npm start
```

- Simula el ambiente de producción
- Accesible en **http://localhost:3000**

### Linting

```bash
npm run lint
```

- Verifica calidad del código
- ESLint + Next.js rules
- Sin cambios automáticos

## 🔧 Configuración del Proyecto

### Variables de Entorno

Crear archivo `.env.local`:

```env
# API Backend
NEXT_PUBLIC_API_URL=http://localhost:8000/api

# (Agregar otras variables según sea necesario)
```

**Nota**: Variables con prefijo `NEXT_PUBLIC_` son accesibles en el cliente.

### Estructura de Carpetas Importantes

```
src/
├── app/                 # Rutas y layouts de Next.js
├── components/          # Componentes React reutilizables
│   └── ui/             # Componentes de shadcn/ui
├── data/               # Datos simulados
├── lib/                # Utilidades y funciones
└── styles/             # Estilos globales
```

## 🎨 Desarrollo & Estilos

### TailwindCSS

Usa clases de Tailwind directamente:

```tsx
<div className="p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
  Contenido
</div>
```

### Componentes shadcn/ui

Importar desde `@/components/ui`:

```tsx
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function MyComponent() {
  return (
    <Card className="p-6">
      <Button>Click me</Button>
    </Card>
  );
}
```

### Animaciones (Framer Motion)

```tsx
import { motion } from 'framer-motion';

export function MyComponent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Contenido
    </motion.div>
  );
}
```

## 📝 Estructura de Componentes

### Componente Funcional Típico

```tsx
'use client';  // Si es interactivo

import { Button } from '@/components/ui/button';

/**
 * NombreComponente
 * Descripción breve de qué hace
 */
export function NombreComponente() {
  return (
    <div className="...">
      {/* Contenido */}
    </div>
  );
}
```

### Página (Layout + Contenido)

```tsx
/**
 * Página Nombre (/ruta)
 * Descripción de la página
 */
export default function NombrePageName() {
  return (
    <main className="...">
      {/* Contenido */}
    </main>
  );
}
```

## 🔗 Rutas en Next.js 14

Las rutas se crean automáticamente según estructura de carpetas:

```
src/app/
├── page.tsx              → /
├── contact/page.tsx      → /contact
├── report/page.tsx       → /report
├── login/page.tsx        → /login
└── admin/
    ├── page.tsx          → /admin
    ├── reports/page.tsx  → /admin/reports
    └── download/page.tsx → /admin/download
```

## 🧪 Testing Datos

El proyecto incluye datos simulados en `src/data/mock-incidents.ts`.

Para usar en componentes:

```tsx
import { mockIncidents } from '@/data/mock-incidents';

export function MyComponent() {
  console.log(mockIncidents); // Array de incidentes
  // ...
}
```

## 🔐 Integración con Backend

### Paso 1: Crear Servicio API

Crear `src/lib/api.ts`:

```typescript
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

export async function getIncidents() {
  const res = await fetch(`${API_URL}/incidents`);
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
}

export async function createIncident(data: any) {
  const res = await fetch(`${API_URL}/incidents`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to create');
  return res.json();
}
```

### Paso 2: Usar en Componentes

```tsx
'use client';

import { useEffect, useState } from 'react';
import { getIncidents } from '@/lib/api';

export function IncidentsList() {
  const [incidents, setIncidents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getIncidents()
      .then(setIncidents)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Cargando...</div>;

  return (
    <div>
      {incidents.map((i) => (
        <div key={i.id}>{i.type}</div>
      ))}
    </div>
  );
}
```

## �� Diseño Responsivo

Tailwind proporciona breakpoints:

```tsx
<div className="
  text-sm md:text-base lg:text-lg    // Tamaño de texto
  p-4 md:p-6 lg:p-8                  // Padding
  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  // Grid
">
  Responsive
</div>
```

Breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 🐛 Debugging

### Acceder a DevTools

- **Chrome/Edge**: F12 o Ctrl+Shift+I
- **Firefox**: F12
- **Safari**: Cmd+Option+I

### Network Tab

Ver llamadas API en: DevTools → Network → XHR

### Console

Revisar errores y logs en: DevTools → Console

### React DevTools

Instalar extensión oficial para inspeccionar componentes.

## 🚀 Deploy (Vercel)

### Conectar Repositorio Git

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <tu-repo>
git push origin main
```

### Deploy en Vercel

1. Ir a https://vercel.com
2. Conectar repositorio GitHub
3. Vercel deployará automáticamente
4. El proyecto estará en vivo al instante

## 📚 Recursos Útiles

- **Next.js Docs**: https://nextjs.org/docs
- **React Docs**: https://react.dev
- **TailwindCSS**: https://tailwindcss.com
- **shadcn/ui**: https://ui.shadcn.com
- **TypeScript**: https://www.typescriptlang.org

## 🎯 Próximos Pasos Recomendados

1. **Explorar el código**: Revisar páginas y componentes
2. **Entender la estructura**: Familiarizarse con carpetas
3. **Ejecutar en desarrollo**: `npm run dev`
4. **Probar formularios**: Navegar por todas las páginas
5. **Implementar Backend**: Conectar con tu API

## ❓ Preguntas Comunes

**P: ¿Por qué algunos componentes tienen `'use client'`?**
R: Porque usan hooks como `useState` o `useEffect`. Server components no pueden usar estos.

**P: ¿Cómo agregar una nueva página?**
R: Crear carpeta en `src/app/` con `page.tsx` dentro.

**P: ¿Cómo usar componentes de shadcn/ui?**
R: `npx shadcn@latest add <componente>`

**P: ¿Dónde van los estilos globales?**
R: En `src/app/globals.css`

## 📞 Soporte

Para ayuda o preguntas:
- Revisar README.md
- Consultar documentación oficial
- Revisar comentarios en el código

---

¡Happy coding! 🚀
