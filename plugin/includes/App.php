<?php
/**
 * Class file used to load our plugins app.js file created by React.
 */
namespace ${namespace};

class App
{
    public static $menu_icon = 'dashicons-admin-plugins';

    public static function init()
    {
        add_action('admin_menu', ['${namespace}\App', 'register_plugin_menu']);
    }

    public static function register_plugin_menu()
    {
        $menu = add_menu_page(
            '${plugin_name}',
            '${plugin_name}',
            'manage_options',
            '${plugin_slug}',
            ['${namespace}\App', 'plugin_front_end'],
            self::$menu_icon,
            '81'
        );

        add_action('admin_print_scripts-' . $menu, ['${namespace}\App', 'load_app']);
    }

    public static function load_app()
    {
        wp_enqueue_script(
            '${plugin_slug}_app_js',
            plugins_url( 'assets/js/app.js', ${DEFINE_BASE}_BASE_FILE),
            [],
            ${DEFINE_BASE}_VERSION,
            true
        );
    }

    public static function plugin_front_end()
    {
        echo '<div id="app"></div>';
    }
}

