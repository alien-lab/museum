/**
 * Created by asus on 2017/9/22.
 */
var app=angular.module("pandectApp",[]);

app.controller("pandectCtrl",["$scope",function ($scope) {

    console.log(1);

    $scope.slides = [{
        "image":'img/1_1_1.png'
    },{
        "image":'img/1_1_2.png'
    },{
        "image":'img/1_1_3.png'
    },{
        "image":'img/1_1_4.png'
    },{
        "image":'img/1_1_5.png'
    },{
        "image":'img/1_1_6.png'
    }];

    $scope.dataList = [{
        id:1
    }]

}]);
