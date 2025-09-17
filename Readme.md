# 📝 To-Do List

Aplicación **To-Do List** desarrollada con **Node.js**, **MySQL** en el backend y **Vite + React** en el frontend.  
Este proyecto permite gestionar tareas de manera sencilla, integrando una API REST con un cliente moderno en React.  

---
## Demostración del proyecto
---
https://www.youtube.com/watch?v=3kSyaD1Zpmk
---

## 📂 Estructura del Proyecto
```
/to_do_list
  ├── backend   # API REST con Node.js y MySQL
  ├── frontend  # Aplicación React con Vite
  └── README.md
```

---

## 🚀 Requisitos Previos
Antes de comenzar asegúrate de tener instalado:
- [Node.js](https://nodejs.org/) (versión LTS recomendada)
- [MySQL](https://dev.mysql.com/downloads/) corriendo en tu máquina

---

## ⚙️ Configuración del Backend
1. Abre un terminal y entra a la carpeta del backend:
   ```bash
   cd backend
   ```
2. Crea un archivo `.env` copiando el contenido de `.env.example` y completa las variables:
   ```env
   PORT=
   DB_HOST=
   DB_PORT=
   DB_USER=
   DB_PASSWORD=
   DB_NAME=
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Ejecuta el servidor:
   ```bash
   npm run run_app
   ```
✅ El backend debería estar corriendo.  
Puedes probar los endpoints con herramientas como *Postman* o *Thunder Client*.  

---

## 💻 Configuración del Frontend
1. Abre un terminal y entra a la carpeta del frontend:
   ```bash
   cd frontend
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Levanta la aplicación en modo desarrollo:
   ```bash
   npm run dev
   ```
✅ El frontend estará disponible en [http://localhost:5173](http://localhost:5173).  

---

## 🔗 Conexión entre Frontend y Backend
Para que el proyecto funcione correctamente es necesario levantar ambos servicios:
- **Backend** (API con Node.js + MySQL)
- **Frontend** (React con Vite)

---

## ☁️ Subir el Proyecto a GitHub
Si deseas subir este proyecto a GitHub:
```bash
# Ir a la ruta del proyecto
cd to_do_list

# Inicializar Git
git init

# Añadir archivos al repositorio
git add .

# Crear el primer commit
git commit -m "Primer commit"

# Conectar con tu repositorio en GitHub
git remote add origin https://github.com/tu_usuario/tu_repositorio.git

# Cambiar a la rama main
git branch -M main

# Subir cambios a GitHub
git push -u origin main
```

---

## 🛠️ Tecnologías Usadas
- **Backend:** Node.js, Express, MySQL, dotenv
- **Frontend:** React, Vite, Axios
- **Herramientas:** Postman/Thunder Client para pruebas de API, Git para control de versiones
