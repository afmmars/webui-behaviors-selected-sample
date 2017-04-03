'use strict';
function pipSampleController($scope) {
    $scope.items = [
                { id: 1, name: 'Item 1' },
                { id: 2, name: 'Item 2' },
                { id: 3, name: 'Item 3' },
                { id: 4, name: 'Item 4' },
                { id: 5, name: 'Item 5' },
                { id: 6, name: 'Item 6' },
                { id: 7, name: 'Item 7' },
                { id: 8, name: 'Item 8' },
                { id: 9, name: 'Item 9' },
                { id: 10, name: 'Item 10' },
                { id: 11, name: 'Item 11' },
                { id: 12, name: 'Item 12' },
                { id: 13, name: 'Item 13' },
                { id: 14, name: 'Item 14' },
                { id: 15, name: 'Item 15' },
                { id: 16, name: 'Item 16' },
                { id: 17, name: 'Item 17' }
            ];
    
            $scope.itemIndex = 0;
            $scope.item =$scope.items[0];

    
            $scope.onItemSelect = function(event) {
                console.log('Selected item #' + event.index);
                $scope.item = $scope.items[$scope.itemIndex];
            };

            $scope.onEnterSpacePress = function ($event) {
                console.log('enter or space pressed', $event);
            };
    
            $scope.onItemDelete = function(event) {
                if ($scope.itemIndex >= 0)
                    $scope.items.splice($scope.itemIndex, 1);
                $scope.itemIndex = Math.min(Math.max(0, $scope.itemIndex), $scope.items.length - 1);
                $scope.item = $scope.items[$scope.itemIndex];
            };
    
            $scope.onMoveToStart = function() {
                $scope.itemIndex = 0;
                $scope.item = $scope.items[$scope.itemIndex];
            };
}


angular
    .module('appBehaviors', [
        'ngMaterial',

        'pipBehaviors',
    ])
    .controller('pipSampleController', pipSampleController);