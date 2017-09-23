(function(angular) {
    var app = angular.module("myApp", []);
    var id = 1;
    app.factory("myjsonp", ["$window", function($window) {
        return function(opts) {
            var url = opts.url + "?"; //拼接url
            for (var k in opts.params) {
                url += (k + "=" + opts.params[k] + "&");
            }
            //保存回调.
            var callbackName = "myjsonp_" + (id++);
            window[callbackName] = opts.callback;
            url += "callback=" + callbackName;

            var script = $window.document.createElement("script");
            script.src = url;
            $window.document.body.appendChild(script);
        }
    }])
})(angular);
