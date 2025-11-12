#!/bin/bash

# 🔄 Comandos Git Rápidos para CitySafe
# ==================================
# Guía rápida de comandos más usados durante el desarrollo

# Color codes para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}╔════════════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║     CitySafe - Git Commands Quick Reference                    ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════════════════════════════╝${NC}"

echo -e "\n${YELLOW}📋 VERIFICAR ESTADO:${NC}"
echo -e "  ${GREEN}git status${NC}                  - Ver cambios pendientes"
echo -e "  ${GREEN}git log --oneline -5${NC}       - Ver últimos 5 commits"
echo -e "  ${GREEN}git remote -v${NC}               - Ver repositorio remoto"

echo -e "\n${YELLOW}📝 HACER CAMBIOS:${NC}"
echo -e "  ${GREEN}git add .${NC}                   - Agregar todos los cambios"
echo -e "  ${GREEN}git add archivo.tsx${NC}         - Agregar archivo específico"
echo -e "  ${GREEN}git commit -m 'Mensaje'${NC}     - Crear commit"
echo -e "  ${GREEN}git push origin main${NC}        - Subir a GitHub"

echo -e "\n${YELLOW}🔄 SINCRONIZAR CON GITHUB:${NC}"
echo -e "  ${GREEN}git pull origin main${NC}        - Descargar cambios"
echo -e "  ${GREEN}git fetch origin${NC}            - Obtener datos sin mergear"

echo -e "\n${YELLOW}🌿 TRABAJAR CON RAMAS:${NC}"
echo -e "  ${GREEN}git checkout -b feature/nombre${NC}    - Crear nueva rama"
echo -e "  ${GREEN}git checkout main${NC}                 - Cambiar a main"
echo -e "  ${GREEN}git branch -a${NC}                     - Ver todas las ramas"
echo -e "  ${GREEN}git merge feature/nombre${NC}          - Mergear rama a main"

echo -e "\n${YELLOW}🔙 DESHACER CAMBIOS:${NC}"
echo -e "  ${GREEN}git restore archivo.tsx${NC}      - Deshacer cambios sin hacer commit"
echo -e "  ${GREEN}git reset --soft HEAD~1${NC}      - Deshacer último commit (mantener cambios)"
echo -e "  ${GREEN}git reset --hard HEAD~1${NC}      - Deshacer completamente último commit"

echo -e "\n${YELLOW}⚙️  CONFIGURACIÓN:${NC}"
echo -e "  ${GREEN}git config user.name 'Tu Nombre'${NC}        - Configurar nombre"
echo -e "  ${GREEN}git config user.email 'email@example.com'${NC} - Configurar email"
echo -e "  ${GREEN}git config --global${NC}                    - Usar --global para todas las repos"

echo -e "\n${YELLOW}📦 CLONAR PROYECTO (en otra máquina):${NC}"
echo -e "  ${GREEN}git clone https://github.com/AlejoOspina01/citysafe.git${NC}"
echo -e "  ${GREEN}cd citysafe${NC}"
echo -e "  ${GREEN}npm install${NC}"
echo -e "  ${GREEN}npm run dev${NC}"

echo -e "\n${BLUE}═══════════════════════════════════════════════════════════════${NC}"
echo -e "${GREEN}✅ Proyecto sincronizado en GitHub${NC}"
echo -e "${BLUE}═══════════════════════════════════════════════════════════════${NC}\n"
