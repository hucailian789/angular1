(function (angular) {
    var app = angular.module("moviecat_movie_list", ["myApp", "ngRoute"]);

    app.config(["$routeProvider", function ($routeProvider) { //2. 配置和正在热映模块相关的路由.

        $routeProvider.when("/:movieType/:page?", {
            templateUrl: "./movie_list/movie_list.html",
            controller: "movie_listController"
        })
    }])

    app.directive("mvActive", function () {
        return {
            restrict: "A",
            link: function (scope, element, attrs) {
                element.on("click", function () {
                    element.parent().children().removeClass("active");
                    element.addClass("active");
                });
            }
        };
    });

    app.controller("movie_listController", ["$scope", "myjsonp", "$routeParams", "$route", "$window", function ($scope, myjsonp, $routeParams, $route, $window) {
        //1.定义页容量.
        $scope.pageSize = 10;
        //2.页码.
        $scope.pageIndex = ($routeParams.page || "1") - 0; //-0是转换数字类型

        myjsonp({
            url: "http://api.douban.com/v2/movie/" + $routeParams.movieType,
            params: {
                count: $scope.pageSize,
                start: ($scope.pageIndex - 1) * $scope.pageSize,
                q: $routeParams.q
            },
            callback: function (data) {

                $scope.movie = data;
                $scope.pageCount = $window.Math.ceil(data.total / $scope.pageSize); //多少页                  
                $scope.isShow = false;
                $scope.$apply(); //告诉视图数据模型发生变化了.你该刷新视图了.
            }
        })

        $scope.getPage = function (pageIndex) {
            if (pageIndex < 1 || pageIndex > $scope.pageCount) {
                return;
            }
            $route.updateParams({
                page: pageIndex
            });
        }
    }])
})(angular);