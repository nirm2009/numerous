(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('yo_bj', function pluralize_yo_bj(n) {
        return "other"
    });
}).call(this);