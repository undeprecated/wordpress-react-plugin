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
        echo 'Save completed.';
        wp_die();
    }
}