# Git Commands - CitySafe Project

## Comandos Utilizados para Subir los Cambios Iniciales

Los siguientes comandos se ejecutaron para subir el proyecto completo a GitHub:

### 1. Configurar el repositorio remoto
```bash
git remote add origin https://github.com/AlejoOspina01/citysafe.git
```

### 2. Verificar que el remoto se agregó correctamente
```bash
git remote -v
```

### 3. Agregar todos los cambios al stage
```bash
git add .
```

### 4. Crear el commit inicial con mensaje descriptivo
```bash
git commit -m "Initial CitySafe project setup with Next.js 14, TypeScript, TailwindCSS, and shadcn/ui"
```

### 5. Sincronizar con el repositorio remoto (si hay cambios)
```bash
git pull --rebase origin main
```

### 6. Subir los cambios a GitHub
```bash
git push -u origin main
```

---

## Comandos Usuales para Trabajar en el Futuro

### Verificar estado del proyecto
```bash
git status
```

### Agregar cambios específicos
```bash
# Un archivo específico
git add src/components/navbar.tsx

# Todos los cambios
git add .
```

### Crear un nuevo commit
```bash
git commit -m "Descripción breve de los cambios"
```

### Subir cambios al repositorio remoto
```bash
git push origin main
```

### Descargar cambios del repositorio remoto
```bash
git pull origin main
```

### Ver el historial de commits
```bash
# Últimos 10 commits
git log --oneline -10

# Todos los commits con detalles
git log
```

### Crear una nueva rama para desarrollar features
```bash
# Crear y cambiar a nueva rama
git checkout -b feature/nombre-feature

# Cambiar entre ramas
git checkout main
```

### Hacer merge de una rama a main
```bash
# Primero cambiar a main
git checkout main

# Luego hacer merge
git merge feature/nombre-feature

# Finalmente, subir los cambios
git push origin main
```

### Deshacer cambios
```bash
# Deshacer cambios en un archivo sin hacer commit
git restore nombre-archivo.tsx

# Deshacer el último commit (pero mantener los cambios)
git reset --soft HEAD~1

# Deshacer completamente el último commit
git reset --hard HEAD~1
```

### Clonar el proyecto (en otra máquina)
```bash
git clone https://github.com/AlejoOspina01/citysafe.git
cd citysafe
npm install
npm run dev
```

---

## Flujo de Trabajo Recomendado

### Para nuevas features:
```bash
# 1. Actualizar main desde remoto
git pull origin main

# 2. Crear nueva rama
git checkout -b feature/nueva-caracteristica

# 3. Hacer cambios y commits
git add .
git commit -m "Agregar nueva característica"

# 4. Subir la rama
git push -u origin feature/nueva-caracteristica

# 5. Crear Pull Request en GitHub

# 6. Después de merge, volver a main
git checkout main
git pull origin main
```

### Para cambios rápidos:
```bash
# 1. Asegurarse de estar en main
git checkout main
git pull origin main

# 2. Hacer cambios
# ...

# 3. Agregar, commitear y subir
git add .
git commit -m "Descripción del cambio"
git push origin main
```

---

## Estado Actual del Repositorio

✅ **Rama**: main
✅ **Último commit**: Initial CitySafe project setup with Next.js 14, TypeScript, TailwindCSS, and shadcn/ui
✅ **Sincronización**: Todo está subido a GitHub
✅ **URL del repositorio**: https://github.com/AlejoOspina01/citysafe.git

---

## Notas Importantes

- Siempre haz `git pull origin main` antes de empezar a trabajar
- Escribe mensajes de commit claros y descriptivos
- Haz commits frecuentes y pequeños, no uno grande al final
- Usa ramas para nuevas features o bugfixes
- Revisa `git status` regularmente para saber qué cambios tienes pendientes
