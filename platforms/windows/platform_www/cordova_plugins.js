cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-sqlite.SQLitePlugin",
        "file": "plugins/cordova-plugin-sqlite/www/SQLitePlugin.js",
        "pluginId": "cordova-plugin-sqlite",
        "clobbers": [
            "window.sqlitePlugin",
            "cordova.plugins.sqlitePlugin"
        ]
    },
    {
        "id": "cordova-plugin-sqlite.SQLiteProxy",
        "file": "plugins/cordova-plugin-sqlite/src/windows/SQLiteProxy.js",
        "pluginId": "cordova-plugin-sqlite",
        "merges": [
            ""
        ]
    },
    {
        "id": "cordova-plugin-sqlite.SQLite3",
        "file": "plugins/cordova-plugin-sqlite/src/windows/SQLite3-WinRT/SQLite3JS/js/SQLite3.js",
        "pluginId": "cordova-plugin-sqlite",
        "merges": [
            ""
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.2",
    "cordova-plugin-sqlite": "1.0.3"
};
// BOTTOM OF METADATA
});