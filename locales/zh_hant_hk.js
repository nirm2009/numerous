(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('zh_hant_hk', function pluralize_zh_hant_hk(n /**/ ) {
        return "other"
    });
}).call(this);