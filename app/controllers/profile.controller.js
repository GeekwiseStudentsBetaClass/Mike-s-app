angular.module('app')
    .controller('profileCtrl', function homeCtrl($scope){
        $scope.profileUp = 10;
        $scope.profileDown = 1;
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
          $scope.profileUp++;
        }
        $scope.addToDisliked = function(){
          $scope.profileDown++;
        }
});
