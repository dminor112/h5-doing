/**
 * Created by wenlinli on 2016/2/23.
 */
define(function(require, exports, module){
    var Util = {};
    Util.getParam = function (param1, param2) {
        var reg, url;

        if (typeof param2 === 'undefined') {
            url =  window.location.href;
            reg = new RegExp('(^|&?)' + param1 + '=([^&]*)(&|$)', 'i');

        } else {
            url = param1;
            reg = new RegExp('(^|&?)' + param2 + '=([^&]*)(&|$)', 'i');
        }
        var rstArr = url.match(reg);

        if (rstArr !== null) {

            return decodeURIComponent(rstArr[2]);
        }
        return null;
    }
    module.exports = Util;
});