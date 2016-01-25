'use strict';

// Declare app level module which depends on views, and components
angular.module('angular-weather', ['ngRoute'])

.controller('HomeController', function($scope, $http) {
  // We have access to the $scope object where we can place data and functions to interact with it
  $scope.getWeather = function(zip) {

     var location = $http({
        method: 'GET',
        url: 'http://api.wunderground.com/api/86254ac28825c912/conditions/q/' + zip + '.json'
      });

    location.success(function(response){
      $scope.georesponse = response;
      $scope.city = response.current_observation.display_location.city;
      $scope.state = response.current_observation.display_location.state_name;
      $scope.weather_img = response.current_observation.icon_url;

    });

   /* var conditions = $http({
      method: 'GET',
      url: 'http://api.wunderground.com/api/86254ac28825c912/conditions/q/' + $scope.state + '/' + $scope.city '.json'
    });

    http://api.wunderground.com/api/86254ac28825c912/conditions/q/
*/
  }
});