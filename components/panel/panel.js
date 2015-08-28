angular.module('loggerApp').directive('loggerPanel', function() {
    return {
        restrict: 'E',
        scope: {
            panel: '='
        },
        replace: true,
        templateUrl: '/components/panel/panel.html',
        link: function($scope, $elem, $attrs) {
            var flippy = $elem.find('flippy');
            $scope.flip = function() {
                flippy.toggleClass('flipped');
            };
        },
        controller: function ($scope, PanelsService) {
            $scope.close = function(id) {
                PanelsService.removePanel(id);
            };
        }
    };
});