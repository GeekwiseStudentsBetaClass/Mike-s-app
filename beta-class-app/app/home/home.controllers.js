angular.module('app')

    .controller('homeCtrl', function($scope) {
      $scope.title1 = 'Button';
      $scope.title4 = 'Warn';
      $scope.isDisabled = true;

      $scope.googleUrl = 'http://google.com';

    });
