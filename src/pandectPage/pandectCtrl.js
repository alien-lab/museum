/**
 * Created by asus on 2017/9/20.
 */
(function () {
    'use strict';
    var app=angular.module("pandectApp",["ui.router","ui.bootstrap"]);

    app.controller("pandectCtrl",["$scope","paperContentService","$state","$location","$uibModal",
        function ($scope,paperContentService,$state,$location,$uibModal) {

        $scope.paperList = [];
        var absurl=$location.absUrl();
        console.log(absurl);
        var pos=absurl.indexOf("?part=");
        if(pos>0){
            $scope.partNumber=absurl.substring(pos+6,pos+7);
        }

        $scope.pageback=function(){
            console.log("back");
            window.location.href="/index/index.html#sec";
        }

        paperContentService.loadpaperList(function (data,flag) {
            if(!flag){
                // alert(data);
            }
            console.log($scope.partNumber);
            if($scope.partNumber){
                var newdata=new Array();
                newdata.push(data[$scope.partNumber-1]);
                $scope.paperList = newdata;
            }

            console.log($scope.paperList);
        });

        $scope.modalOpen=function(info){
            var modalInstance=$uibModal.open({
                templateUrl:"contentInfo.html",
                controller:'contentInfoController',
                resolve:{
                    info:info
                }
            });
        }




    }]);

    app.controller("contentInfoController",["$scope","$uibModalInstance","info",
        function($scope,$uibModalInstance,info){
        console.log("info",info);

        $scope.info=info;
        if(info.direction!=null){
            $scope.direction=info.direction;
        }else{
            if(info.infoTitle.indexOf("0-")>=0){
                $scope.info.infoTitle=info.infoTitle.substring(2);
                $scope.direction=0
                info.direction=0;
            }else{
                info.direction=1;
                $scope.direction=1
            }
        }

        $scope.textarr=info.infoText.split("$$");


        $scope.ok=function(){
            $uibModalInstance.dismiss("cancel");
        }

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
