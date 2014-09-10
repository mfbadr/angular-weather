/* jshint camelcase:false */
(function(){
  'use strict';

  angular.module('weather')
  .controller('ConditionsController', ['$scope', 'wu', function($scope, wu){
    $scope.title = 'Current Conditions';
    $scope.zip = '37212';


    $scope.getConditions = function(){
      wu.getConditions($scope.zip).then(function(response){
        $scope.temperature = response.data.current_observation.temp_f;
        $scope.weather = response.data.current_observation.weather;
        $scope.icon = response.data.current_observation.icon_url;
        $('#zip').focus();
      });
    };
  }]);
})();

