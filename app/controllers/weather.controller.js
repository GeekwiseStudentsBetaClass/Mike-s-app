angular.module('app')
    .controller('weatherCtrl', function homeCtrl($scope){
        $scope.weatherUp = 10;
        $scope.weatherDown = 5;
        $scope.totalVote = $scope.faceBookUp - $scope.faceBookDown;
        $scope.thisString = [];
        $scope.insertText = function($event, inputText){
          if(inputText !=='' && $event.keyCode === 13){
          $scope.thisString.push(inputText);
          $scope.inputText = '';}
        };
        $scope.insertClick = function(inputText){
          if(inputText !==''){
          $scope.thisString.push(inputText);
          $scope.inputText = '';}
        };
        $scope.deleteText = function(index){
          $scope.thisString.splice(index,1);
        };
        $scope.addToLiked = function(){
          $scope.weatherUp++;
        }
        $scope.addToDisliked = function(){
          $scope.weatherDown++;
        }
});
