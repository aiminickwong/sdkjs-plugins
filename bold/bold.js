(function(window, undefined){

    window.Asc.plugin.init = function()
    {
        this.button(-1);
    };

    window.Asc.plugin.button = function(id)
    {
        window.Asc.plugin_sendMessage("close", "window.g_asc_plugins.api.put_TextPrBold(true);");
    };

})(window, undefined);
