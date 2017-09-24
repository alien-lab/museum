/**
 * Created by asus on 2017/9/20.
 */
(function () {
    'use strict';
    var app=angular.module("pandectApp",[]);

    app.controller("pandectCtrl",["$scope","paperContentService",function ($scope,paperContentService) {

        $scope.paperList = [];

        paperContentService.loadpaperList(function (data,flag) {
            if(!flag){
                // alert(data);
            }
            $scope.paperList = data;
            console.log($scope.paperList);
        });


        $scope.slides = [{
            "image":'img/1_1_1_1.png'
        },{
            "image":'img/1_1_1_2.png'
        },{
            "image":'img/1_1_1_3.png'
        },{
            "image":'img/1_1_1_4.png'
        },{
            "image":'img/1_1_1_3.png'
        },{
            "image":'img/1_1_1_4.png'
        }];






    }]);

    app.service("paperContentService",["$http",function ($http) {
        this.loadpaperList = function (callback) {
            $http({
                url:'data.json',
                method:'GET'
            }).then(function (data) {
                if(callback){
                    callback(data.data,true);
                }
            },function (error) {
                if(callback){
                    callback(error,false);
                }
            });
        }
    }])
})();
