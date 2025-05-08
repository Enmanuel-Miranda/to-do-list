* Requisitos Previos
    Tener Node.js instalado.
    Tener MySQL instalado y corriendo.

* Backend
    1. Abre un terminal y ve a la carpeta backend :
        cd backend
    2. Crea un archivo .env copiando el contenido de .env.example y completa las
    variables necesarias:
        PORT=
        DB_HOST=
        DB_PORT=
        DB_USER=
        DB_PASSWORD=
        DB_NAME=
    3. Instala las dependencias:
        npm install
    4. Ejecuta el servidor:
        npm run run_app

 ¡Listo! El backend debería estar corriendo. Puedes probar los endpoints usando
 Postman, Thunder Client o cualquier herramienta similar.

* Frontend
    1. Abre un terminal y ve a la carpeta frontend :
        cd frontend
    2. Instala las dependencias:
        npm install
    3. Levanta la aplicación en modo desarrollo:
        npm run dev
 
 ¡Y ya está! El frontend estará disponible normalmente en 
http://localhost:5173

Para probar el proyecto tener ambos proyectos corriendo, backend y frontend


* Pasos para subir el proyecto a git hub

Ir a la ruta del proyecto
Abrir la terminal escribir
Inicializa git en el proyecto   
    git init
Añade todos los archivos al seguimiento     
    git add .
Crea el primer commit   
    git commit -m "Primer commit"  

git remote add origin https://github.com/tu_usuario/tu_repositorio.git
git branch -M main
git push -u origin main