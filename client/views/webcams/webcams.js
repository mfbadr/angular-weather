/* jshint camelcase:false */
(function(){
  'use strict';

  angular.module('weather')
  .controller('WebcamsController', ['$scope', 'wu', function($scope, wu){
    $scope.title = 'Webcams';
    $scope.zip = '37212';

    $scope.getWebcams = function(zip){
      wu.getWebcams.then(function(response){
        $scope.webcams = response.data.webcams;
      });
    };
  }]);
})();

