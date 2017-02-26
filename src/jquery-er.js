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
        if (typeof a == 'array') {
            return this.length;
        } else if (typeof a == 'object') {
            return Object.keys(a).length;
        }
    },
    isset: function (v) {
        // hasOwnProperty
        return this.count(v) > 0
    },
    ucfirst: function (str) {
        return str.toLowerCase().replace(/\b[a-z]/g, function (letter) {
            return letter.toUpperCase();
        });
    },
    like2Delete: function (obj, key) {
        if (typeof obj == 'object') {
            for (var i in obj) {
                if (!obj.hasOwnProperty(i)) continue;
                if (i.indexOf(key) != -1) {
                    delete obj[i];
                }
            }
        }
    },

    is_numeric: function (value) {
        return typeof value == 'number';
    },
    like2Delete: function (obj, key) {
        if (typeof obj == 'object') {
            for (var i in obj) {
                if (!obj.hasOwnProperty(i)) continue;
                if (i.indexOf(key) != -1) {
                    delete obj[i];
                }
            }
        }
    },
    getLikeValues: function (obj, key) {
        if (typeof obj == 'object') {
            var r = {};
            for (var i in obj) {
                if (!obj.hasOwnProperty(i)) continue;
                if (i.indexOf(key) != -1) {
                    r[i] = obj[i];
                }
            }
            return r;
        }
    },
    json_encode: function (values) {
        return JSON.stringify(values);
    },
    json_decode: function (json) {
        // return JSON.parse(values);
        return eval("(function(){return " + json + ";})()");
    },
    clear_form: function (element) {
        return $(':input', element)
            .removeAttr('checked')
            .removeAttr('selected')
            .not(':button, :submit, :reset, :hidden, :radio, :checkbox')
            .val('');
    },
    addChecked: function (input) {
        return input.prop('checked',true);;
    },
    explode: function (delimiter, string) {
        return string.split(delimiter);
    }

};

