
angular.module('app')
    .controller('profileCtrl', function profileCtrl($scope, $window, profileInfo){
        $scope.vote = [{
              likes: 0,
              dislikes: 0
        }];
        $scope.activeTab = 1;
        $scope.profileInfo = profileInfo;
        $scope.things_todo = [];
        $scope.plusOne = function(index) {
      	     $scope.vote[index].likes += 1;
    	};
        $scope.minusOne = function(index) {
      	     $scope.vote[index].dislikes += 1;
    	};
        $scope.get_todo = function() {
            var string =  $window.localStorage.things_todo;
            $scope.things_todo = string.split(',');
            $scope.keep_todo();
        };
        $scope.push_todo = function(item) {
            $scope.things_todo.push(item);
            $scope.inputModel = '';
            $scope.keep_todo();
        };
        $scope.read = function(input) {
            $scope.inputModel = input;
        };
        $scope.keep_todo = function() {
            $window.localStorage.things_todo = $scope.things_todo;
        };
        $scope.delete = function(index) {
            $scope.things_todo.splice(index, 1);
            $scope.keep_todo();
        };
        $scope.edit_start= function(index){
            $scope.toEdit = index;
            $scope.editModel = $scope.things_todo[index];
            console.log($scope.toEdit);
            $scope.editing=true;
            // $scope.keep_todos();
        };
        $scope.edit_complete =function(index){
            $scope.things_todo[index] = $scope.editModel;
            console.log[index];
            console.log($scope.things_todo);
            console.log($scope.editModel);
            $scope.keep_todo();
        };

    });
