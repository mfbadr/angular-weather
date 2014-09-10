/* jshint camelcase:false */
(function(){
  'use strict';

  angular.module('weather')
  .controller('WebcamsController', ['$scope', '$http', function($scope, $http){
    $scope.title = 'Webcams';
    $scope.zip = '37212';

    $scope.getWebcams = function(zip){
      var url = 'http://api.wunderground.com/api/2738df9035fbffa9/webcams/q/' + $scope.zip + '.json?callback=JSON_CALLBACK';
      $http.jsonp(url).then(function(response){
        //response.data.webcams: [CURRENTIMAGEURL]
        var webcams = response.data.webcams.map(function(webcam){
          var obj = {smallPic:webcam.WIDGETCURRENTIMAGEURL, bigPic:webcam.CURRENTIMAGEURL};
          return obj;
        });
        $scope.webcams = webcams;
      });
    };
  }]);
})();

