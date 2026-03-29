<?php
/**
 * Class file used to for handling ajax requests sent from app.js.
 */

namespace ${namespace};

class Ajax
{
    public static function init()
    {
        // @NOTE: rename this to whatever ajax name you need.
        add_action('wp_ajax_save_config', [__CLASS__, 'save_config']);
    }

    public static function save_config()
    {
        self::verify_request();

        echo 'Save completed.';
        wp_die();
    }

    /**
     * Verify the current request has a valid nonce and comes from an admin user.
     * Must be called at the top of every public AJAX handler.
     */
    private static function verify_request()
    {
        if ( ! current_user_can('manage_options') ) {
            wp_die( -1, '', array( 'response' => 403 ) );
        }
        check_ajax_referer( App::slug() . '_ajax', 'nonce');
    }
}