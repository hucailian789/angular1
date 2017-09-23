(function (angular) {
    var app = angular.module("moviecat", [
        "moviecat_home",
        "mo_details",
        "moviecat_movie_list"

    ]);
    app.controller("searchCtrl", ["$scope", "$window", function ($scope, $window) {
        $scope.query = function () {
            var kq = $scope.keyworld; //1.先拿到用户输入的关键字/.
            $window.location.hash = "#/search?q=" + kq; //2.修改url地址栏的路由.
        }
    }])

})(angular);