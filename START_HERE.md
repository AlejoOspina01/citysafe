# 🚀 START HERE - CitySafe Setup

Bienvenido a **CitySafe**, una plataforma moderna de reportes de seguridad comunitaria.

## ⚡ Inicio Rápido (2 minutos)

### Paso 1: Navega a la carpeta del proyecto
```bash
cd citysafe
```

### Paso 2: Instala las dependencias
```bash
npm install
```

Esto instalará:
- Next.js 14
- React 19
- TypeScript
- TailwindCSS
- shadcn/ui
- Y más...

### Paso 3: Inicia el servidor de desarrollo
```bash
npm run dev
```

Deberías ver:
```
> ready - started server on 0.0.0.0:3000, url: http://localhost:3000
```

### Paso 4: Abre en tu navegador
```
http://localhost:3000
```

---

## 🎯 Qué Explorar Primero

### 1. Home Page (`/`)
- Visita la landing page principal
- Observa el gráfico de tendencias
- Mira las animaciones suaves

### 2. Report Incident (`/report`)
- Prueba el formulario de 2 pasos
- Completa la información del usuario
- Llena los detalles del incidente

### 3. Admin Dashboard (`/admin`)
- Ve las estadísticas
- Observa los gráficos
- Explora la tabla de reportes

### 4. Login (`/login`)
- Prueba diferentes métodos de login
- Observa el flujo de autenticación

---

## 📚 Documentación

Hay 4 archivos de documentación disponibles:

| Archivo | Contenido |
|---------|----------|
| **QUICKSTART.md** | Guía de 30 segundos |
| **SETUP_GUIDE.md** | Guía completa de configuración |
| **PROJECT_SUMMARY.md** | Resumen del proyecto completo |
| **README.md** | Documentación principal |

---

## 🗂️ Estructura del Código

```
src/
├── app/                      # Páginas (Home, Contact, Report, etc)
│   ├── page.tsx             # / (Home)
│   ├── contact/page.tsx     # /contact
│   ├── report/page.tsx      # /report (Reporte 2 pasos)
│   ├── login/page.tsx       # /login
│   └── admin/               # /admin (Panel administrativo)
│       ├── page.tsx         # Dashboard
│       ├── reports/         # /admin/reports
│       └── download/        # /admin/download
│
├── components/              # Componentes reutilizables
│   ├── navbar.tsx          # Navegación
│   ├── footer.tsx          # Footer
│   ├── hero.tsx            # Sección hero
│   ├── city-safety-index.tsx  # Gráficos
│   ├── features.tsx        # Características
│   ├── partners.tsx        # Partners
│   ├── admin-sidebar.tsx   # Sidebar admin
│   └── ui/                 # shadcn/ui components
│
├── data/
│   └── mock-incidents.ts   # Datos simulados
│
└── lib/
    └── utils.ts            # Utilidades
```

---

## 🎨 Tecnologías Usadas

- **Next.js 14** - Framework React moderno
- **TypeScript** - Type safety
- **TailwindCSS** - Estilos
- **shadcn/ui** - Componentes UI
- **Framer Motion** - Animaciones
- **Recharts** - Gráficos

---

## 🔧 Comandos Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor (http://localhost:3000)

# Producción
npm run build        # Build optimizado
npm start            # Ejecuta build en producción

# Calidad de código
npm run lint         # Verifica errores
```

---

## 🌐 Rutas Disponibles

| Ruta | Descripción |
|------|------------|
| `/` | Home - Landing page |
| `/contact` | Contacto - Formulario |
| `/report` | Reporte - Formulario 2 pasos |
| `/login` | Login - Autenticación |
| `/admin` | Dashboard - Panel control |
| `/admin/reports` | Lista de reportes |
| `/admin/download` | Descarga de reportes |

---

## 🎯 Próximos Pasos

### Después de ejecutar `npm run dev`:

1. **Explora el código**
   - Abre `src/app/page.tsx` para ver la home
   - Revisa `src/components/` para entender estructura
   - Lee los comentarios en el código

2. **Personaliza**
   - Cambia colores en `tailwind.config.js`
   - Modifica textos en componentes
   - Ajusta animaciones en componentes

3. **Integra con Backend**
   - Crea `src/lib/api.ts`
   - Agrega `.env.local` con URL de API
   - Reemplaza datos simulados

4. **Prueba en Producción**
   - Ejecuta `npm run build`
   - Ejecuta `npm start`
   - Verifica que todo funciona

---

## 📱 Datos Simulados

El proyecto incluye datos simulados funcionales:

```typescript
// En src/data/mock-incidents.ts

// 5 incidentes de ejemplo
// Estadísticas calculadas
// Datos para gráficos
// Información de partners
```

Para usar datos reales, crea una API y conéctala.

---

## ⚙️ Configuración

### Variables de Entorno

Crear archivo `.env.local`:

```env
# Backend API
NEXT_PUBLIC_API_URL=http://localhost:8000/api

# Agregar otras variables según sea necesario
```

### TypeScript

El proyecto tiene `tsconfig.json` configurado con:
- Soporte para módulos ES6
- Path alias: `@/*` → `src/`
- Strict mode habilitado

---

## 🐛 Troubleshooting

### Puerto 3000 ocupado
```bash
npm run dev -- -p 3001
```

### Errores de dependencias
```bash
rm -rf node_modules package-lock.json
npm install
```

### Limpiar cache
```bash
rm -rf .next
npm run dev
```

---

## 📖 Recursos Útiles

- **Next.js**: https://nextjs.org/docs
- **React**: https://react.dev
- **TailwindCSS**: https://tailwindcss.com
- **TypeScript**: https://www.typescriptlang.org
- **shadcn/ui**: https://ui.shadcn.com

---

## ✅ Checklist

- [ ] Ejecuté `npm install`
- [ ] Ejecuté `npm run dev`
- [ ] Abrí http://localhost:3000
- [ ] Exploré la home page
- [ ] Probé el formulario de reporte
- [ ] Visité el admin dashboard
- [ ] Leí QUICKSTART.md
- [ ] Leí SETUP_GUIDE.md

---

## 💡 Tips

1. **Hot Reload**: El código se recarga automáticamente
2. **TypeScript**: VS Code muestra errores en tiempo real
3. **Componentes**: Todo es componentes React reutilizables
4. **Animaciones**: Usa Framer Motion para movimiento
5. **Estilos**: Solo TailwindCSS, sin CSS adicional

---

## 📞 ¿Necesitas Ayuda?

1. Lee los comentarios en el código
2. Consulta `SETUP_GUIDE.md` para detalles
3. Mira `PROJECT_SUMMARY.md` para arquitectura
4. Revisa `README.md` para documentación completa

---

## 🎉 ¡Listo!

Ya tienes CitySafe corriendo localmente. 

**Ahora puedes:**
- Explorar el código
- Personalizar el diseño
- Conectar con tu backend
- Llevar a producción

---

**Happy coding! 🚀**

Para más información, revisa los archivos `.md` en la raíz del proyecto.
