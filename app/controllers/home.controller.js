angular.module('app')
    .controller('homeCtrl', function homeCtrl($scope){
        $scope.faceBookUp = 50;
        $scope.faceBookDown = 5;
        $scope.myArray = [
          {
            nameUi: 'home.facebook-login',
            name: 'Facebook Login',
            totalVote: 45
          },
          {
            nameUi: 'home.twitter-feed',
            name: 'Twitter Feed',
            totalVote: 23
          },
          {
            nameUi: 'home.weather-api',
            name: 'Local Weather',
            totalVote: 5
          },
          {
            nameUi: 'home.threaded-comments',
            name: 'Threaded Comments',
            totalVote: 15
          },
          {
            nameUi: 'home.profile-picture',
            name: 'Profile Picture',
            totalVote: 9
          }
        ]
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
        $scope.addToLiked = function(index){
          $scope.myArray[0].totalVote++;
        }
        $scope.addToDisliked = function(index){
          $scope.myArray[0].totalVote--;
        }
});
