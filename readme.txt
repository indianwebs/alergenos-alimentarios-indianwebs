=== Iconos Alérgenos Alimentarios ===
Contributors: IndianWebs
Tags: Alergenos Alimentarios IndianWebs, indianwebs, alergenos, alérgenos, alimentarios, alergenos alimentarios, iconos, icons, alimentarios
Requires at least: 4.7
Tested up to: 6.8
Stable tag: 1.2
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

== Frequently Asked Questions ==



= Nueva Ley de Información Alimentaria (Alérgenos) =



La nueva Ley de Información Alimentaria (Alérgenos), recogida en el Reglamento Europeo 1169/2011 establece que todas las empresas operadoras de colectividades tendrán que informar de los alérgenos que contengan sus platos. A continuación, podrás consultar toda la información relevante para tu negocio.


= Los 14 alérgenos de los que deberás informar =



La nueva Ley de Información Alimentaria (Alérgenos) cuenta con un anexo en el que se listan todas las sustancias que suponen un riesgo para las personas que sufren alergias o intolerancias alimentarias. Recuerda que debes advertir de su presencia en los platos, aunque sólo exista la posibilidad de que haya trazas de alguno de ellos. A continuación, tienes disponible el listado de los 14 alérgenos de los que todo hostelero deberá informar:

* Cereales que contengan gluten y productos derivados.
* Crustáceos y productos a base de crustáceos.
* Huevos y productos a base de huevo.
* Pescado y productos a base de pescado.
* Cacahuetes y productos a base de cacahuete.
* Soja y productos a base de soja.
* Leche y sus derivados (incluida la lactosa).
* Frutos de cáscara (almendras, avellanas, nueces, y productos derivados).
* Apio y productos derivados.
* Mostaza y productos derivados.
* Granos de sésamo y productos a base de granos de sésamo.
* Anhídrido sulfuroso y sulfitos en concentraciones superiores a 10mg/kg.
* Altramuces.

== Desarrollo Futuro ==

* Implementar una galería visual para elegir iconos.
* Extender el soporte para bloques de Gutenberg personalizados.

== Frequently Asked Questions ==

= ¿Este plugin funciona sin Gutenberg? =  
Sí. Si Gutenberg no está activo, el plugin usa el editor clásico.

= ¿Puedo añadir más iconos? =  
Sí, modificando el array de imágenes en el archivo PHP.

== Changelog ==

= 1.2 =
* Primera versión nueva publicada en WordPress.org.

== Upgrade Notice ==

= 1.2 =
Primera versión nueva estable del plugin.

== Screenshots ==

screenshot-1.png

screenshot-2.png

== Licencia ==

GPLv2 or later  
https://www.gnu.org/licenses/gpl-2.0.html

== Autor ==

Desarrollado por IndianWebs
