# CitySafe

**Sistema de Reporte y Monitoreo de Incidentes de Seguridad Ciudadana**

## 📋 Descripción

CitySafe es una aplicación web desarrollada con **Next.js** y **TypeScript** que permite a los ciudadanos reportar incidentes de seguridad en tiempo real. El sistema proporciona herramientas de visualización de datos, análisis de tendencias y un panel administrativo para gestionar reportes de incidentes.

## ✨ Características Principales

- 🗺️ **Reportes Georeferenciados**: Reporte de incidentes con ubicación exacta mediante coordenadas geográficas
- 📊 **Dashboard Administrativo**: Panel de control con estadísticas y gráficos en tiempo real
- 📈 **Análisis de Tendencias**: Visualización de tendencias de incidentes por mes y tipo
- 🔍 **Categorización de Incidentes**: Clasificación automática por tipos (Robo, Vandalismo, Actividad Sospechosa, Accidentes, Quejas)
- 👥 **Gestión de Reportes**: Sistema de estados para seguimiento (Pendiente, En Investigación, Resuelto)
- 📱 **Interfaz Responsiva**: Diseño adaptable para dispositivos móviles y escritorio
- 🎨 **Interfaz Moderna**: Componentes UI personalizados con Shadcn/ui
- ⚡ **Rendimiento Optimizado**: Construcción con Next.js para máxima velocidad

## 🛠️ Stack Tecnológico

### Frontend

- **Next.js 15**: Framework React con renderizado del lado del servidor
- **TypeScript**: Lenguaje tipado para mayor seguridad
- **Tailwind CSS**: Framework de estilos utilitarios
- **Shadcn/ui**: Componentes UI reutilizables y accesibles
- **Recharts**: Librería de gráficos para visualización de datos

### Herramientas de Desarrollo

- **ESLint**: Linter para mantener calidad de código
- **PostCSS**: Procesador de CSS
- **npm**: Gestor de dependencias

## 📁 Estructura del Proyecto

```
citysafe/
├── src/
│   ├── app/                    # Rutas y layouts de Next.js
│   │   ├── admin/             # Sección administrativa
│   │   │   ├── download/      # Descarga de reportes
│   │   │   └── reports/       # Gestión de reportes
│   │   ├── contact/           # Página de contacto
│   │   ├── login/             # Página de inicio de sesión
│   │   ├── report/            # Página de reporte
│   │   ├── globals.css        # Estilos globales
│   │   ├── layout.tsx         # Layout principal
│   │   └── page.tsx           # Página de inicio
│   ├── components/            # Componentes reutilizables
│   │   ├── admin-sidebar.tsx
│   │   ├── city-safety-index.tsx
│   │   ├── features.tsx
│   │   ├── footer.tsx
│   │   ├── hero.tsx
│   │   ├── navbar.tsx
│   │   ├── partners.tsx
│   │   └── ui/               # Componentes UI base (Shadcn)
│   ├── data/                  # Datos simulados y configuración
│   │   └── mock-incidents.ts
│   └── lib/                   # Funciones utilitarias
│       └── utils.ts
├── public/                    # Archivos estáticos
├── package.json              # Dependencias del proyecto
├── tsconfig.json             # Configuración de TypeScript
├── next.config.ts            # Configuración de Next.js
├── tailwind.config.ts        # Configuración de Tailwind CSS
├── postcss.config.mjs        # Configuración de PostCSS
└── eslint.config.mjs         # Configuración de ESLint
```

## 🚀 Guía de Instalación

### Requisitos Previos

- Node.js (v18 o superior)
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/AlejoOspina01/citysafe.git
   cd citysafe
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Configurar variables de entorno** (si es necesario)

   ```bash
   cp .env.example .env.local
   ```

4. **Iniciar el servidor de desarrollo**
   ```bash
   npm run dev
   ```
   La aplicación estará disponible en `http://localhost:3000`

## 📚 Scripts Disponibles

```bash
# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Ejecutar la aplicación compilada
npm start

# Ejecutar linter para verificar calidad del código
npm run lint

# Corregir problemas de linting automáticamente
npm run lint --fix
```

## 📖 Páginas Principales

### Inicio (`/`)

- Página de bienvenida con información sobre CitySafe
- Destacado de características principales
- Llamada a la acción para reportar incidentes

### Reporte (`/report`)

- Formulario para crear nuevos reportes
- Selección de tipo de incidente
- Ubicación del incidente (coordenadas)
- Descripción detallada del evento
- Información del reportero

### Administración (`/admin`)

- **Dashboard**: Estadísticas generales de incidentes
- **Reportes**: Vista de todos los reportes con filtros
- **Descargas**: Exportación de datos en diferentes formatos

### Contacto (`/contact`)

- Formulario de contacto para consultas
- Información de comunicación

### Inicio de Sesión (`/login`)

- Autenticación para acceso al panel administrativo

## 🗂️ Datos del Sistema

### Tipos de Incidentes

1. **Robo**: Sustracciones de bienes
2. **Vandalismo**: Daño a propiedad pública
3. **Actividad Sospechosa**: Comportamientos inusuales
4. **Accidente de Tráfico**: Incidentes viales
5. **Queja por Ruido**: Molestias acústicas

### Estados de Reporte

- **Pendiente**: Incidente reportado, esperando investigación
- **En Investigación**: Autoridades investigando activamente
- **Resuelto**: Incidente procesado y cerrado

## 🔐 Seguridad

- Validación de entrada en formularios
- Componentes seguros con TypeScript
- Protección CSRF mediante Next.js

## 📋 Roadmap

- [ ] Integración con base de datos real
- [ ] Sistema de autenticación completo
- [ ] Notificaciones en tiempo real
- [ ] Aplicación móvil nativa
- [ ] Integración con autoridades locales
- [ ] Análisis avanzado con IA
- [ ] Mapas interactivos mejorados

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT - Ver el archivo [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Autores

- **Alejandro Ospina**
- **Katherine Sanchez**
- **Gustavo Quintero**

## 📞 Contacto y Soporte

Para preguntas, reportar bugs o sugerencias, por favor:

- Abre un [Issue](https://github.com/AlejoOspina01/citysafe/issues)
- Envía un email a través del formulario de contacto en la aplicación

## 🙏 Agradecimientos

- UNAD por el apoyo académico
- Comunidad de Next.js y React
- Shadcn/ui por componentes reutilizables
- Todos los contribuidores y usuarios de CitySafe

---

**Última actualización**: Noviembre 2025
