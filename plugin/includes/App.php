<?php
/**
 * Class file used to load our plugins app.js file created by React.
 */
namespace Plugin;

class App
{
    public static $menu_icon = 'dashicons-admin-plugins';

    public static function init()
    {
        add_action('admin_menu', ['Plugin\App', 'register_plugin_menu']);
    }

    public static function register_plugin_menu()
    {
        $menu = add_menu_page(
            'Plugin',
            'Plugin',
            'manage_options',
            'plugin',
            ['Plugin\App', 'plugin_front_end'],
            self::$menu_icon,
            '81'
        );

        add_action('admin_print_scripts-' . $menu, ['Plugin\App', 'load_app']);
    }

    public static function load_app()
    {
        wp_enqueue_script(
            'plugin_app_js',
            plugins_url( 'assets/js/app.js', PLUGIN_BASE_FILE),
            [],
            PLUGIN_VERSION,
            true
        );
    }

    public static function plugin_front_end()
    {
        echo '<div id="app"></div>';
    }
}

