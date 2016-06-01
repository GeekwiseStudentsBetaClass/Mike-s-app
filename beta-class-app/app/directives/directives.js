
angular.module('app')
    .directive('navDir', navDir);
    function navDir() {
        var directive = {
            restrict: 'E',
            templateUrl: 'nav/nav.html'
        };
        return directive;
    }
