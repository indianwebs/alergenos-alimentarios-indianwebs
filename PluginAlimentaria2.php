<?php
/*
Plugin Name: Alimentaria 2
Description: Plugin para insertar iconos de alérgenos en Gutenberg o en el editor clásico
Version: 1.1
Author: 林欧博
*/

// Comprueba si Gutenberg está activo
function mi_plugin_es_gutenberg_activo()
{
    return function_exists('register_block_type');
}

// Si Gutenberg está activo, carga el bloque React
function mi_plugin_react_enqueue()
{
    if (mi_plugin_es_gutenberg_activo()) {
        wp_enqueue_script(
            'mi-plugin-react-block',
            plugins_url('build/index.js', __FILE__),
            array('wp-blocks', 'wp-element', 'wp-editor', 'wp-components'),
            filemtime(plugin_dir_path(__FILE__) . 'build/index.js')
        );

        wp_localize_script('mi-plugin-react-block', 'miPluginData', array(
            'cuadrada' => plugins_url('icons/cuadrada/', __FILE__),
            'redonda' => plugins_url('icons/redonda/', __FILE__),
            'triangular' => plugins_url('icons/triangular/', __FILE__),
        ));
    }
}
add_action('enqueue_block_editor_assets', 'mi_plugin_react_enqueue');

// Si Gutenberg NO está activo, muestra un icono flotante
function mi_plugin_icono_editor_clasico()
{
    $post_id = isset($_GET['post']) ? intval($_GET['post']) : 0;
    if (!use_block_editor_for_post($post_id)) {
        add_action('admin_footer', 'mi_plugin_muestra_icono_clasico');
    }
}
add_action('admin_init', 'mi_plugin_icono_editor_clasico');

function mi_plugin_muestra_icono_clasico()
{
    // Crear un objeto con las URLs de todas las imágenes
    $imagenes_icono = array(
        'Apio' => array(
            'cuadrada' => plugins_url('icons/cuadrada/apio.png', __FILE__),
            'redonda' => plugins_url('icons/redonda/apio.png', __FILE__),
            'triangular' => plugins_url('icons/triangular/apio.png', __FILE__),
        ),
        'Gluten' => array(
            'cuadrada' => plugins_url('icons/cuadrada/gluten.png', __FILE__),
            'redonda' => plugins_url('icons/redonda/gluten.png', __FILE__),
            'triangular' => plugins_url('icons/triangular/gluten.png', __FILE__),
        ),
        'Soja' => array(
            'cuadrada' => plugins_url('icons/cuadrada/soja.png', __FILE__),
            'redonda' => plugins_url('icons/redonda/soja.png', __FILE__),
            'triangular' => plugins_url('icons/triangular/soja.png', __FILE__),
        ),
        'Altramuces' => array(
            'cuadrada' => plugins_url('icons/cuadrada/altramuces.png', __FILE__),
            'redonda' => plugins_url('icons/redonda/altramuces.png', __FILE__),
            'triangular' => plugins_url('icons/triangular/altramuces.png', __FILE__),
        ),
        'Cacahuete' => array(
            'cuadrada' => plugins_url('icons/cuadrada/cacahuete.png', __FILE__),
            'redonda' => plugins_url('icons/redonda/cacahuete.png', __FILE__),
            'triangular' => plugins_url('icons/triangular/cacahuete.png', __FILE__),
        ),
        'Crustáceo' => array(
            'cuadrada' => plugins_url('icons/cuadrada/crustaceo.png', __FILE__),
            'redonda' => plugins_url('icons/redonda/crustaceo.png', __FILE__),
            'triangular' => plugins_url('icons/triangular/crustaceo.png', __FILE__),
        ),
        'Fruto Cascara' => array(
            'cuadrada' => plugins_url('icons/cuadrada/frutoCascara.png', __FILE__),
            'redonda' => plugins_url('icons/redonda/frutoCascara1.png', __FILE__),
            'triangular' => plugins_url('icons/triangular/frutoCascara.png', __FILE__),
        ),
        'Huevo' => array(
            'cuadrada' => plugins_url('icons/cuadrada/huevo.png', __FILE__),
            'redonda' => plugins_url('icons/redonda/huevo.png', __FILE__),
            'triangular' => plugins_url('icons/triangular/huevo.png', __FILE__),
        ),
        'Leche' => array(
            'cuadrada' => plugins_url('icons/cuadrada/leche.png', __FILE__),
            'redonda' => plugins_url('icons/redonda/leche.png', __FILE__),
            'triangular' => plugins_url('icons/triangular/leche.png', __FILE__),
        ),
        'Molusco' => array(
            'cuadrada' => plugins_url('icons/cuadrada/molusco.png', __FILE__),
            'redonda' => plugins_url('icons/redonda/molusco1.png', __FILE__),
            'triangular' => plugins_url('icons/triangular/molusco.png', __FILE__),
        ),
        'Mostaza' => array(
            'cuadrada' => plugins_url('icons/cuadrada/mostaza.png', __FILE__),
            'redonda' => plugins_url('icons/redonda/mostaza.png', __FILE__),
            'triangular' => plugins_url('icons/triangular/mostaza.png', __FILE__),
        ),
        'Pescado' => array(
            'cuadrada' => plugins_url('icons/cuadrada/pescado.png', __FILE__),
            'redonda' => plugins_url('icons/redonda/pescado.png', __FILE__),
            'triangular' => plugins_url('icons/triangular/pescado.png', __FILE__),
        ),
        'Sésamo' => array(
            'cuadrada' => plugins_url('icons/cuadrada/sesamo.png', __FILE__),
            'redonda' => plugins_url('icons/redonda/sesamo.png', __FILE__),
            'triangular' => plugins_url('icons/triangular/sesamo.png', __FILE__),
        ),
        'Sulfito' => array(
            'cuadrada' => plugins_url('icons/cuadrada/sulfito.png', __FILE__),
            'redonda' => plugins_url('icons/redonda/sulfito1.png', __FILE__),
            'triangular' => plugins_url('icons/triangular/sulfito.png', __FILE__),
        ),
    );

?>
    <script>
        // Pasar el objeto con todas las URLs de las imágenes
        var miPluginImagenes = <?php echo json_encode($imagenes_icono); ?>;
        console.log('✅ Imágenes disponibles:', miPluginImagenes);
    </script>
    <style>
        #mi-plugin-icono {
            position: fixed;
            bottom: 40px;
            right: 40px;
            z-index: 9999;
            border: 2px solid #ccc;
            background: white;
            padding: 5px;
            border-radius: 4px;
        }
    </style>
    <div id="mi-plugin-icono">
        <img src="<?php echo esc_url($img); ?>" alt="Icono Alérgeno" style="height:40px;">
    </div>
<?php
}



// Mostrar log de depuración básico
add_action('admin_footer', function () {
    echo '<script>console.log("⚠️ Admin cargado");</script>';
});

// Añadir botón personalizado a TinyMCE (editor clásico)
function mi_plugin_agregar_boton_editor_clasico($buttons)
{
    array_push($buttons, "mi_icono_alergeno");
    return $buttons;
}
add_filter("mce_buttons", "mi_plugin_agregar_boton_editor_clasico");

function mi_plugin_registrar_plugin_tinymce($plugins)
{
    $plugins["mi_icono_alergeno"] = plugins_url("tinymce-plugin.js", __FILE__);
    return $plugins;
}
add_filter("mce_external_plugins", "mi_plugin_registrar_plugin_tinymce");
