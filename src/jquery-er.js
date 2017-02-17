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
        return this.length;
    }
};

