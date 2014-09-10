(function(){
  'use strict';

  angular.module('weather', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
    //each when is a route
    //first param is the URL, object is the config
    .when('/conditions',{templateUrl:'/views/conditions/conditions.html', controller:'ConditionsController'})
    //otheriwse is how to deal with 404s
    .otherwise({redirectTo:'/conditions'});

  }])
  .controller('MainController', ['$scope', function($scope){
    $scope.title = 'Weather';
  }]);
})();

