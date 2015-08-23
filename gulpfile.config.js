'use strict';
var GulpConfig = (function () {
    function GulpConfig() {
        this.TS_ROOT_PATH = "./ts";
        this.JS_ROOT_PATH = "./js";
        this.TS_DEFS_PATH = './typings';
        this.TS_FILES = this.TS_ROOT_PATH + '/**/*.ts';
    }

    return GulpConfig;
})();
module.exports = GulpConfig;