<?php

/**
 * Class file used to register plugin hooks. Used for plugin activation,
 * deactivating, and deleting/uninstalling.
 */
namespace ${namespace};

class Registers
{
    public static function init()
    {
        register_activation_hook( ${DEFINE_BASE}_BASE_FILE, [ __CLASS__, 'on_activation' ] );
        register_deactivation_hook( ${DEFINE_BASE}_BASE_FILE, [ __CLASS__, 'on_deactivate' ] );
        register_uninstall_hook( ${DEFINE_BASE}_BASE_FILE, [ __CLASS__, 'on_uninstall' ] );
    }

    public static function on_activation()
    {
        // Code executed when plugin is activated in WordPress.
    }

    public static function on_deactivate()
    {
        // Code to execute when plugin is deactivated in WordPress.
    }

    public static function on_uninstall()
    {
        // Code executed when plugin is uninstalled and deleted from WordPress.
    }

}
