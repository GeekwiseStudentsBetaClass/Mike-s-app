angular.module('app')
    .controller('threadedCtrl', function homeCtrl($scope){
        $scope.threadedUp = 18;
        $scope.threadedDown = 3;
        $scope.totalVote = $scope.threadedUp - $scope.threadedDown;
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
          $scope.threadedUp++;
        }
        $scope.addToDisliked = function(){
          $scope.threadedDown++;
        }
});
