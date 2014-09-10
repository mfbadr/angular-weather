/* jshint camelcase:false */
(function(){
  'use strict';

  angular.module('weather')
  .controller('ForecastController', ['$scope', 'wu', function($scope, wu){
    $scope.title = 'Forecast';
    $scope.zip = '37212';

    $scope.getForecast = function(){
      wu.getForecast($scope.zip).then(function(response){
        $scope.forecast = response.data.forecast.txt_forecast.forecastday;
        console.log($scope.forecast);
      });
    };
  }]);
})();

