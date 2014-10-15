(function(){
  'use strict';

  angular.module('mk-calculator')
  .controller('MainCtrl', ['$scope', function($scope){
    $scope.display = '0';

    $scope.calc = function(op){
      $scope.operator = op;
      $scope.temp = $scope.display;
      $scope.display = '0';
    };

    $scope.number = function(num){
      console.log(num);
      num = num.toString();
      if(num === '.' && $scope.display.indexOf('.') > -1){return;}

      if($scope.display === '0' && num !== '.'){
        $scope.display = num;
      }else{
        $scope.display += num;
      }
    };

    $scope.math = function(){
      switch($scope.operator){
        case '+':
          $scope.display = (parseFloat($scope.display) + parseFloat($scope.temp)).toString();
          break;
        case '-':
          $scope.display = (parseFloat($scope.display) - parseFloat($scope.temp)).toString();
          break;
        case '*':
          $scope.display = (parseFloat($scope.display) * parseFloat($scope.temp)).toString();
          break;
        case '/':
          $scope.display = (parseFloat($scope.display) / parseFloat($scope.temp)).toString();
          break;
      }
    };

    $scope.clear = function(){
      $scope.display = '0';
      $scope.operator = '';
      $scope.temp = '';
    };

    }]);
})();
