# Iconos de Alérgenos con Gutenberg o sin Gutenberg

Este plugin permite insertar iconos de alérgenos en el contenido de WordPress. Ofrece dos opciones de uso, dependiendo de si utilizas **Gutenberg** o no:

- **Con Gutenberg**: Instalar dependencias JavaScript mediante npm para que funcione correctamente.
- **Sin Gutenberg**: Solo es necesario tener el plugin **Editor Clásico** instalado.

## Requisitos

- WordPress 5.0 o superior.
- PHP 5.6 o superior.
- **Con Gutenberg**:
  - Node.js y npm para instalar dependencias de JavaScript.
  - El editor Gutenberg debe estar activado en WordPress.
- **Sin Gutenberg**:
  - El plugin **Editor Clásico** debe estar instalado y activado para que funcione correctamente.

## Instalación

### Opción 1: **Con Gutenberg**

1. **Subir el plugin a WordPress**:

   - Descarga o clona este repositorio.
   - Sube la carpeta del plugin a la carpeta `wp-content/plugins/` de tu instalación de WordPress.

2. **Instalar dependencias con npm**:

   - Asegúrate de tener **Node.js** y **npm** instalados en tu entorno local.
     - Si no tienes Node.js, puedes descargarlo desde [aquí](https://nodejs.org/).
   - En la raíz de la carpeta del plugin, ejecuta el siguiente comando para instalar las dependencias necesarias:

     ```bash
     npm install
     ```

### Opción 2: **Sin Gutenberg (Editor Clásico)**

1. **Subir el plugin a WordPress**:

   - Descarga o clona este repositorio.
   - Sube la carpeta del plugin a la carpeta `wp-content/plugins/` de tu instalación de WordPress.

2. **Instalar el plugin Editor Clásico**:
   - Asegúrate de tener instalado y activado el plugin **Editor Clásico** para que el plugin funcione correctamente en el editor clásico de WordPress.

## Funcionalidades

### Con Gutenberg:

- El plugin añade una opción para insertar iconos de alérgenos en el bloque de contenido. En el editor de Gutenberg, junto a los botones de **negrita** y **hipervínculo**, se muestra un **desplegable** donde aparecerá la opción de **Insertar Icono Alérgeno**. Al seleccionar esta opción, se insertará el icono correspondiente en el contenido del bloque.

### Sin Gutenberg (Editor Clásico):

- Al hacer clic en el botón **Insertar icono alérgeno** (representado por un icono de alérgeno) en el editor clásico, se desplegará un menú debajo del botón. Este menú es **movible**, lo que permite al usuario posicionarlo donde prefiera para su comodidad. Además, el menú se **cierra automáticamente** cuando el usuario hace clic en la **X** del menú.

### Comprobación de Gutenberg:

- El plugin detecta si Gutenberg está activado o no. Si no está activado, muestra un **icono flotante** en el área de administración de WordPress.

### Interactividad:

- El menú en el editor clásico puede ser movido libremente. Cuando el usuario hace clic en la **X** del menú, este se cierra automáticamente.

## Archivos Principales

- **`mi_plugin_icono_editor_clasico()`**:
  - Función que verifica si Gutenberg está desactivado y agrega el icono flotante.
- **`mi_plugin_muestra_icono_clasico()`**:
  - Función que genera el HTML y los estilos para el icono flotante.
- **Archivo JavaScript (`tinymce-plugin.js`)**:
  - Agrega un botón en el editor clásico de TinyMCE.
  - Muestra un menú desplegable debajo del botón al hacer clic.

## Personalización

### Iconos:

- Los iconos que se insertan en el contenido están actualmente definidos como imágenes estáticas (por ejemplo, un icono de "gluten").
- Para agregar más iconos, simplemente agrega las rutas de las nuevas imágenes en el objeto `miPluginImagenes` en el archivo PHP.

## Ejemplo de Uso

### Con Gutenberg:

- En el editor de Gutenberg, al lado de los botones de **negrita** y **hipervínculo**, haz clic en el **desplegable** y selecciona la opción de **Insertar icono alérgeno**.
- Se insertará el icono de alérgeno en el contenido del bloque.

### Sin Gutenberg (Editor Clásico):

- En el editor clásico de WordPress, haz clic en el botón **Insertar icono alérgeno** (representado por un icono de alérgeno).
- Se abrirá un menú donde puedes cambiar de forma y elegir el icono que necessitas. Este menú puede ser movido y se cierra al hacer clic en la **X**.

## Desarrollo

Si deseas contribuir a este plugin o agregar nuevas funcionalidades, aquí están algunas sugerencias de mejora:

- **Agregar selección visual de iconos**: Implementar un sistema de botones o una galería de iconos que permita al usuario elegir el alérgeno deseado de manera más visual.
- **Soporte para Gutenberg**: Aunque este plugin se enfoca en el editor clásico, puedes agregar soporte para Gutenberg en el futuro.

## Contribuciones

¡Las contribuciones son bienvenidas! Si tienes alguna sugerencia o mejora, abre un **issue** o envía un **pull request**.

---

**Licencia**: Este plugin está bajo la [Licencia GPL v2.0](https://www.gnu.org/licenses/old-licenses/gpl-2.0.html).

**Desarrollado por**: 林欧博 / IndianWebs

---
