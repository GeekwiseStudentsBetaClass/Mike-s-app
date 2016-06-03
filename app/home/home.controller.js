
angular.module('app')
    .controller('homeCtrl', function homeCtrl($scope){
        $scope.list = true;
        $scope.hideContent = function() {
          $scope.list = false;
        };
        $scope.showContent = function(){
          $scope.list = true;
        };
        $scope.thisString = [];
        $scope.insertText = function(input){
          $scope.thisString.push(input);
          $scope.inputText = '';
        };
        $scope.deleteText = function(input){
          $scope.thisString.splice('index',1);
        };
        $scope.numUpVoted = 9001;
        $scope.numDownVoted = 9000;
        $scope.totalPopularity;
        $scope.addToLiked = function(input) {
          $scope.numUpVoted += 1;
        };
        $scope.addToDisliked = function() {
          $scope.numDownVoted += 1;
        }
        $scope.overallPopularity = function() {
          $scope.totalPopularity = ($scope.numUpVoted - $scope.numDownVoted);
        }

});
