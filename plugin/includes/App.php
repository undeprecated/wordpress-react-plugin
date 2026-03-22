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
        add_filter('script_loader_tag', [__CLASS__, 'add_module_type'], 10, 3);

        if (self::is_vite_dev()) {
            // Prepend the React Refresh preamble before the vite-client tag so it
            // runs first in document order (all module scripts are deferred).
            add_filter('script_loader_tag', function($tag, $handle) {
                if ($handle === 'vite-client') {
                    $preamble = '<script type="module">
import RefreshRuntime from "http://localhost:5173/@react-refresh";
RefreshRuntime.injectIntoGlobalHook(window);
window.$RefreshReg$ = () => {};
window.$RefreshSig$ = () => () => {};
window.__vite_plugin_react_preamble_installed__ = true;
</script>';
                    return $preamble . $tag;
                }
                return $tag;
            }, 11, 2); // priority 11 runs after add_module_type (10) so $tag already has type="module"

            // Dev mode: load from Vite dev server
            wp_enqueue_script('vite-client', 'http://localhost:5173/@vite/client', [], null, false);
            wp_enqueue_script('${plugin_slug}-app', 'http://localhost:5173/src/index.jsx', ['vite-client'], null, false);
        } else {
            wp_enqueue_script(
                '${plugin_slug}-app',
                plugins_url( 'assets/js/app.mjs.js', ${DEFINE_BASE}_BASE_FILE),
                [],
                ${DEFINE_BASE}_VERSION,
                true
            );
        }
    }

    private static function is_vite_dev(): bool
    {
        // Check for the existance of a .hot file created by Vite in the project root. This is a common pattern used by Vite to indicate dev mode.

        $hot_file = dirname(__DIR__, 2) . '/.dev';
        if (file_exists($hot_file)) {
            return true;
        }

        return false;
    }
    

    public static function add_module_type($tag, $handle, $src)
    {
        if (in_array($handle, ['vite-client', '${plugin_slug}-app'])) {
            return '<script type="module" crossorigin="anonymous" src="' . esc_url($src) . '"></script>';
        }
        return $tag;
    }

    /**
     * Creates a div to bootstrap the frontend app.
     * 
     * You can use this as a way to hook static PHP values into your frontend applicaiton.
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

