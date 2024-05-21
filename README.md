# Proyecto de Sitio Web con Next.js, React, Tailwind CSS y Font Awesome

## Descripción

Este proyecto es un sitio web moderno construido utilizando las tecnologías Next.js, React, Tailwind CSS y Font Awesome. El sitio está diseñado para ser servido como una aplicación de página única (SPA) con soporte para SEO mejorado gracias a las capacidades de generación de sitio estático de Next.js.

## Tecnologías Utilizadas

- **Next.js**: Framework de React que permite funcionalidades como el renderizado del lado del servidor y la generación de sitios estáticos.
- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Tailwind CSS**: Framework CSS de utilidades para un diseño rápido y responsivo.
- **Font Awesome**: Biblioteca de íconos y herramientas de estilo para mejorar la interfaz gráfica de usuario.

## Estructura del Proyecto

/proyecto
|--/components
|--/pages
|--/public
|--/styles
|-- next.config.js
|-- tailwind.config.js
|-- README.md


- **components**: Contiene todos los componentes de React utilizados en el proyecto.
- **pages**: Incluye las páginas de la aplicación construidas con Next.js.
- **public**: Archivos estáticos como imágenes, fonts, etc.
- **styles**: Archivos CSS y configuración de Tailwind CSS.

## Configuración del Entorno

### Pre-requisitos

- Node.js versión 12.x o superior.
- npm o yarn como gestor de paquetes.

### Instalación

Clona el repositorio del proyecto e instala las dependencias:

```bash
git clone https://github.com/MrJohanF/web-ucompensar-clone.git
cd web-ucompensar-clone
npm install
```

## Desarrollo Local
Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

Visita http://localhost:3000 para ver la aplicación en funcionamiento.

## Construcción y Despliegue

```bash
npm run build
npm run export
```

Esto generará una carpeta out con todos los archivos estáticos necesarios.

## Configuración del Servidor Apache

Para servir el sitio en un servidor Apache, configura un Virtual Host y ajusta el archivo .htaccess como sigue:


```bash
<VirtualHost *:80>
    DocumentRoot "/var/www/html/web-ucompensar-clone"
    ServerName ucompensar.com

    <Directory "/var/www/html/web-ucompensar-clone">
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
```
No olvides reiniciar el servidor Apache para aplicar los cambios.

## Despliegue en XAMPP
Para servir el sitio usando XAMPP, sigue estos pasos:

Mueve la Carpeta out: Copia la carpeta out generada a la carpeta htdocs en tu instalación de XAMPP.

- Ejemplo: C:\xampp\htdocs\

Configuración de Apache (Opcional): Si necesitas configurar Apache para manejar rutas limpias, modifica el archivo .htaccess dentro de la carpeta de tu proyecto en htdocs:

```bash
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ index.html [L]
```

Esto asegura que todas las solicitudes sean dirigidas al index.html, permitiendo que Next.js maneje el enrutamiento.

Iniciar XAMPP: Abre el Panel de Control de XAMPP y arranca los servicios Apache.


Acceder al Sitio: Ve a http://localhost/ en tu navegador.