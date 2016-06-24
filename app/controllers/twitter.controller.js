angular.module('app')
    .controller('twitterCtrl', function homeCtrl($scope){
        $scope.twitterUp = 25;
        $scope.twitterDown = 2;
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
          $scope.twitterUp++;
        }
        $scope.addToDisliked = function(){
          $scope.twitterDown++;
        }
});
