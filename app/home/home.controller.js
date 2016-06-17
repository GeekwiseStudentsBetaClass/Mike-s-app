
angular.module('app')
    .controller('homeCtrl', function homeCtrl($scope){
        $scope.voteData =
          {
          faceBookUp: 300,
          faceBookDown: 50,
          twitterUp: 100,
          twitterDown: 50,
          weatherUp: 25,
          weatherDown: 0,
          threadedCommentsUp: 10,
          threadedCommentsDown: 0,
          profilePicUp: 5,
          profilePicDown: 1
          }
        $scope.list = true;
        $scope.hideContent = function() {
          $scope.list = false;
        };
        $scope.showContent = function(){
          $scope.list = true;
        };
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
});
