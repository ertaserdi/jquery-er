/**
 * Created by ertaserdi on 16.02.2017.
 */

Array.prototype.end = function () {
    var i = this.length - 1;
    var r = this[i];
    return r;
};

Array.prototype.array_keys = function () {
    var a = [];
    $.each(this, function (i,v) {
        a.push(i);
    });
    return a;
};

Array.prototype.count = function () {
    return this.length;
};

Array.prototype.count = function () {
    return this.length;
};

