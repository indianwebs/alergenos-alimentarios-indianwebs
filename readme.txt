=== Iconos Alérgenos Alimentarios ===
Contributors: indianWebs
Tags: alérgenos, iconos, gutenberg, accesibilidad, editor
Requires at least: 4.7
Tested up to: 6.8
Stable tag: 1.0
Requires PHP: 7.0
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html
Inserta iconos de alérgenos compatibles con Gutenberg y el editor clásico.

== Descripción ==

Este plugin permite insertar iconos de alérgenos en el contenido de WordPress, tanto con el editor Gutenberg como con el editor clásico.

**Con Gutenberg:**
– Añade una opción en el bloque de contenido para insertar iconos de alérgenos junto a los botones de negrita e hipervínculo.

**Sin Gutenberg:**
– Añade un botón en el editor clásico que despliega un menú movible con los iconos disponibles.

== Requisitos ==

* WordPress 5.0 o superior  
* PHP 5.6 o superior  

Para uso con Gutenberg:  
* Node.js y npm instalados  
* Gutenberg activado  

Para uso sin Gutenberg:  
* Plugin Editor Clásico instalado y activado  

== Instalación ==

= Opción 1: Con Gutenberg =

1. Subir la carpeta del plugin a `wp-content/plugins/`.
2. En la raíz del plugin, ejecutar `npm install` para instalar dependencias.

= Opción 2: Sin Gutenberg (Editor Clásico) =

1. Subir la carpeta del plugin a `wp-content/plugins/`.
2. Instalar y activar el plugin Editor Clásico.

== Funcionalidades ==

* Inserción de iconos de alérgenos en ambos editores.
* Menú desplegable y movible en el editor clásico.
* Detección automática de si Gutenberg está activo.
* Icono flotante en el área de administración si no está activado Gutenberg.

== Uso ==

* Con Gutenberg: usar el desplegable junto a negrita y enlace para insertar iconos.
* Con Editor Clásico: usar el botón de icono para mostrar el menú movible.

== Personalización ==

* Los iconos son imágenes estáticas. Se pueden añadir más modificando el objeto `miPluginImagenes` en el archivo PHP principal.

== Archivos Incluidos ==

* `mi_plugin_icono_editor_clasico()` – Detecta si Gutenberg no está activo y añade el icono flotante.
* `mi_plugin_muestra_icono_clasico()` – Genera HTML y estilos para el icono flotante.
* `tinymce-plugin.js` – Añade el botón y el menú desplegable en TinyMCE.

== Desarrollo Futuro ==

* Implementar una galería visual para elegir iconos.
* Extender el soporte para bloques de Gutenberg personalizados.

== Frequently Asked Questions ==

= ¿Este plugin funciona sin Gutenberg? =  
Sí. Si Gutenberg no está activo, el plugin usa el editor clásico.

= ¿Puedo añadir más iconos? =  
Sí, modificando el array de imágenes en el archivo PHP.

== Changelog ==

= 1.1 =
* Primera versión publicada en WordPress.org.

== Upgrade Notice ==

= 1.1 =
Primera versión estable del plugin.

== Screenshots ==

1. Inserción desde Gutenberg.
2. Menú en el editor clásico.

== Licencia ==

GPLv2 or later  
https://www.gnu.org/licenses/gpl-2.0.html

== Autor ==

Desarrollado por IndianWebs
