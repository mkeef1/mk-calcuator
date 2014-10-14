(function(){
  'use strict';

  angular.module('mk-calculator')
  .controller('MainCtrl', ['$scope', function($scope){
    $scope.display = '0';
    $scope.numbers = [];
    $scope.number = function(num){
      $scope.display += num;
        if($scope.display[0] === '0'){
          $scope.display = $scope.display.slice(1);
          console.log(num);
        };

          return $scope.display;
      };

      $scope.clear = function(){
        $scope.display = '0';
      };

      $scope.decimal = function(){
        if($scope.display.indexOf('.') === -1){
          $scope.display = '.';
        }
      };

      $scope.add = function(){
        $scope.numbers.push($scope.display);
        $scope.clear;
      };

      $scope.equals = function(x, y){
        var x = $scope.numbers[0],
              y = $scope.numbers[1];

        return x + y;
      };
  }]);
})();