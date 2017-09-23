/*
 * @Author: 
 * @Date:   2017-09-22 19:55:04
 *    
 * @Last Modified time: 2017-09-22 21:16:31
 */
(function(angular) {
    var app = angular.module("mo_details", ["ngRoute", "myApp"]);
    app.config(["$routeProvider", function($routeProvider) {
        $routeProvider.when("/details/:id", {
            templateUrl: "./details/details.html",
            controller: "detailsController"
        });
    }])

    app.controller("detailsController",["$scope","myjsonp","$routeParams",function ($scope,myjsonp,$routeParams) {
        myjsonp({
          url:"http://api.douban.com/v2/movie/subject/"+ $routeParams.id,
          method:"get",
          params:{},
          callback:function (data) {
            $scope.movie = data;  //获取返回的数据
            $scope.isShow = false;  
            $scope.$apply();//视图发生变化,刷新视图
          }
        })
    }])


})(angular)
