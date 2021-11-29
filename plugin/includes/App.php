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
        add_action('admin_menu', [__CLASS__, 'register_plugin_menu']);
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

        add_action('admin_print_styles-' . $menu, [__CLASS__, 'load_plugin_styles']);
        add_action('admin_print_scripts-' . $menu, [__CLASS__, 'load_plugin_scripts']);
    }

    /**
     * This method will load your plugin styles. 
     * A styles.css file will be built from frontend/style.css into plugin/assets/styles.css
     */
    public static function load_plugin_styles()
    {
        wp_enqueue_style('${plugin_slug}-plugin-styles', plugins_url('/assets/styles.css', ${DEFINE_BASE}_BASE_FILE));
    }

    /**
     * Loads the built app.js created by our frontend code.
     */
    public static function load_plugin_scripts()
    {
        wp_enqueue_script(
            '${plugin_slug}-plugin-app',
            plugins_url( 'assets/js/app.js', ${DEFINE_BASE}_BASE_FILE),
            [],
            ${DEFINE_BASE}_VERSION,
            true
        );
    }

    /**
     * Creates a div to bootstrap the frontend app.
     */
    public static function plugin_front_end()
    {
        /**
         * Uncomment this if you wish to include PHP values into your JavaScript.
         * 
         * 
        $php_to_js = array(
            'avatar_url'     => get_avatar_url( get_the_author_meta( 'ID' )),           
            'total_counts'   => 1,
        );

        // @TODO replace  _YOUR_PLUGIN_GLOBALS with whatever global name you want to use.
        echo '<script type="application/javascript">window._YOUR_PLUGIN_GLOBALS=' . json_encode($php_to_js) . ';</script>';
        */

        echo '<div id="app"></div>';
    }

}

