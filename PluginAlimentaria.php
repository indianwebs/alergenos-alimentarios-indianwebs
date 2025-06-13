<?php
/*
Plugin Name: Iconos Alérgenos Alimentarios
Description: Inserta iconos de alérgenos en WordPress compatibles con Gutenberg y el editor clásico.
Version: 1.0
Author: IndianWebs / Lin
Author Uri: http://indianwebs.com/
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html
*/

function ExisteGuternberg()
{
    return function_exists('register_block_type');
}

function UtilizarGutenberg()
{
    if (ExisteGuternberg()) {
        wp_enqueue_script(
            'mi-plugin-react-block',
            plugins_url('build/index.js', __FILE__),
            array('wp-blocks', 'wp-element', 'wp-editor', 'wp-components'),
            filemtime(plugin_dir_path(__FILE__) . 'build/index.js'),
            false
        );

        wp_localize_script('mi-plugin-react-block', 'miPluginData', array(
            'cuadrada' => plugins_url('icons/cuadrada/', __FILE__),
            'redonda' => plugins_url('icons/redonda/', __FILE__),
            'triangular' => plugins_url('icons/triangular/', __FILE__),
        ));
    }
}
add_action('enqueue_block_editor_assets', 'UtilizarGutenberg');

function UtilizarEditorClasico($hook)
{
    $post_id = isset($_GET['post']) ? intval($_GET['post']) : 0;

    if (!function_exists('use_block_editor_for_post') || !use_block_editor_for_post($post_id)) {

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

        wp_enqueue_script('tinymce-plugin', plugins_url('tinymce-plugin.js', __FILE__), array(), null, true);
        wp_localize_script('tinymce-plugin', 'miPluginImagenes', $imagenes_icono);
    }
}
add_action('admin_enqueue_scripts', 'UtilizarEditorClasico');

function AddBotonClasico($buttons)
{
    $post_id = isset($_GET['post']) ? intval($_GET['post']) : 0;
    if (!function_exists('use_block_editor_for_post') || !use_block_editor_for_post($post_id)) {
        array_push($buttons, "mi_icono_alergeno");
    }
    return $buttons;
}
add_filter("mce_buttons", "AddBotonClasico");

function RegistrarPlugin($plugins)
{
    $post_id = isset($_GET['post']) ? intval($_GET['post']) : 0;
    if (!function_exists('use_block_editor_for_post') || !use_block_editor_for_post($post_id)) {
        $plugins["mi_icono_alergeno"] = plugins_url("tinymce-plugin.js", __FILE__);
    }
    return $plugins;
}
add_filter("mce_external_plugins", "RegistrarPlugin");
