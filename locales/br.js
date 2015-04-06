(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('br', function pluralize_br(n) {
        if (typeof n === "string") n = parseInt(n, 10);
        if (n % 10 === 1 && !(n % 100 === 11 || n % 100 === 71 || n % 100 === 91)) return "one";
        if (n % 10 === 2 && !(n % 100 === 12 || n % 100 === 72 || n % 100 === 92)) return "two";
        if (n % 10 === Math.floor(n % 10) && (n % 10 >= 3 && n % 10 <= 4 || n % 10 === 9) && !(n % 100 >= 10 && n % 100 <= 19 || n % 100 >= 70 && n % 100 <= 79 || n % 100 >= 90 && n % 100 <= 99)) return "few";
        if (!(n === 0) && n % 1e6 === 0) return "many";
        return "other"
    });
}).call(this);