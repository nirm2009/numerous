(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('ii_cn', function pluralize_ii_cn(n) {
        return "other"
    });
}).call(this);