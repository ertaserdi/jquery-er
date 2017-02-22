/**
 * Created by ertaserdi on 16.02.2017.
 */

var er = {
    array_keys: function (a) {
        var a = [];
        $.each(this, function (i, v) {
            a.push(i);
        });
        return a;
    },
    end: function (a) {
        var i = this.length - 1;
        var r = this[i];
        return r;
    },
    count: function (a) {
        if (typeof a == 'Array') {
            return this.length;
        }else if (typeof a == 'Object') {
            return Object.keys(field).length;
        }
    },
    isset : function (v) {
        return this.count(v) > 0
    },
    ucfirst : function (str) {
        return str.toLowerCase().replace(/\b[a-z]/g, function(letter) {
            return letter.toUpperCase();
        });
    }

};

