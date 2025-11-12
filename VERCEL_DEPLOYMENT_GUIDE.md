# 🚀 Guía de Despliegue en Vercel - CitySafe

## Paso 1: Crear Cuenta en Vercel (5 minutos)

### Opción A: Registrarse con GitHub (RECOMENDADO)
1. Ir a https://vercel.com
2. Click en **"Sign Up"**
3. Seleccionar **"Continue with GitHub"**
4. Autorizar Vercel para acceder a tu cuenta de GitHub
5. ¡Listo! Ya tienes cuenta en Vercel

### Opción B: Registrarse con Email
1. Ir a https://vercel.com
2. Click en **"Sign Up"**
3. Ingresa tu email
4. Verifica tu email
5. ¡Listo!

---

## Paso 2: Conectar tu Repositorio de GitHub

1. Después de registrarte, irás al **Dashboard de Vercel**
2. Click en **"New Project"** o **"Add New..."**
3. Se abrirá una ventana con tus repositorios
4. **Busca y selecciona "citysafe"**
5. Click en **"Import"**

### Vercel automáticamente detectará:
- ✅ Framework: **Next.js**
- ✅ TypeScript: **Sí**
- ✅ Configuración: **Detectada automáticamente**

---

## Paso 3: Configurar el Proyecto (2 minutos)

En la página de configuración:

### Project Name
- Por defecto: `citysafe`
- Puedes cambiarla si quieres
- Ejemplo: `citysafe-demo`, `citysafe-app`, etc.

### Environment Variables (si las necesitas)
- Por ahora, **no necesitas agregar nada**
- Más adelante cuando conectes con backend Laravel, aquí añadirás:
  ```
  NEXT_PUBLIC_API_URL=https://tu-api-laravel.com
  ```

### Root Directory
- Debe ser: `.` (punto)
- Vercel lo detecta automáticamente

### Build Command
- Debe ser: `npm run build`
- Vercel lo detecta automáticamente

### Output Directory
- Debe ser: `.next`
- Vercel lo detecta automáticamente

---

## Paso 4: Desplegar (1 minuto)

1. Click en **"Deploy"**
2. Vercel comenzará a construir tu proyecto
3. Espera a que termine (2-3 minutos)

### ¿Qué verás?
- 📦 **Building** - Vercel está compilando tu código
- ⚙️ **Installing** - Instalando dependencias
- 🔨 **Building** - Construyendo el proyecto
- ✅ **Ready** - ¡Proyecto desplegado!

---

## Paso 5: Compartir tu Proyecto

### Tu URL pública será algo como:
```
https://citysafe.vercel.app
```

O si cambiaste el nombre:
```
https://citysafe-demo.vercel.app
```

### Compartir con tus compañeros:
- 📱 Envía el link por WhatsApp, email, etc.
- 👥 Todos pueden acceder sin necesidad de instalación
- 🔗 El link funciona desde cualquier dispositivo

---

## Paso 6: Configurar Dominio Personalizado (OPCIONAL)

Si quieres un dominio como `citysafe.com`:

1. En Vercel Dashboard → Tu Proyecto → **Settings**
2. Click en **"Domains"**
3. Agrega tu dominio
4. Sigue las instrucciones de Vercel para configurar DNS

---

## Paso 7: Actualizar Cambios Automáticamente

### Lo mejor de Vercel:
**Vercel se conecta a tu GitHub automáticamente**

Cada vez que hagas:
```bash
git push origin main
```

Vercel **automáticamente**:
1. Detecta los cambios
2. Compila el código
3. Despliega la nueva versión
4. Tu sitio se actualiza en segundos

### No necesitas hacer nada más - ¡es automático! 🎉

---

## Monitoreo y Analytics (BONUS)

En tu Dashboard de Vercel puedes ver:

- 📊 **Analytics** - Visitantes, ubicaciones, dispositivos
- ⏱️ **Performance** - Velocidad de carga
- 🔴 **Errors** - Errores si ocurren
- 📈 **Deployments** - Historial de despliegues

---

## Troubleshooting: Si algo falla

### Error: "Build failed"
```bash
# En tu máquina local, verifica que todo compila:
npm run build

# Si hay errores, corrígelos y haz push:
git add .
git commit -m "Fix build errors"
git push origin main
```

### Error: "Dependencies not installed"
- Vercel automáticamente corre `npm install`
- Si aún falla, verifica tu `package.json`

### URL no funciona
- Espera 1-2 minutos, Vercel puede estar finalizando el despliegue
- Recarga la página (Ctrl+Shift+R o Cmd+Shift+R)

### Mi sitio no se ve correctamente
- Verifica en la consola del navegador si hay errores
- Usa `npm run build` localmente para ver errores

---

## Resumen Rápido

| Paso | Acción | Tiempo |
|------|--------|--------|
| 1 | Ir a vercel.com y registrarse | 5 min |
| 2 | Click "New Project" y seleccionar citysafe | 2 min |
| 3 | Click "Deploy" | 1 min |
| 4 | Esperar a que termine | 2-3 min |
| 5 | ¡Compartir URL con compañeros! | 1 min |
| **Total** | | **11-15 min** |

---

## Links Útiles

- 🌐 Vercel: https://vercel.com
- 📚 Docs Vercel: https://vercel.com/docs
- 🆘 Vercel Support: https://vercel.com/support
- ⚡ Next.js en Vercel: https://vercel.com/solutions/nextjs

---

## Ejemplo Final

Después de desplegar, compartes algo como:

```
¡Hola compañeros! 👋

He deployado CitySafe en Vercel. Pueden verlo aquí:
🔗 https://citysafe.vercel.app

Es una plataforma de reportes de seguridad comunitaria.
Prueben las diferentes páginas:
- Home: Ver estadísticas y características
- Report: Reportar un incidente
- Contact: Enviar un mensaje
- Login: Acceder al admin
- Admin: Ver dashboard con gráficos

¡Feedback bienvenido! ��
```

---

## Próximas Mejoras

Cuando conectes con tu backend Laravel:

1. Agregar **Environment Variables** en Vercel
2. Conectar a tu API en `NEXT_PUBLIC_API_URL`
3. Cambiar datos simulados por datos reales
4. Todo seguirá siendo automático con `git push`

¡Es muy fácil! 🚀
