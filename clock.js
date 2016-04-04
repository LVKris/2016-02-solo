var app = angular.module('myApp', []);

app.controller('MyController', function($scope) {
  var updateClock = function() {
    $scope.clock = new Date().toLocaleTimeString();
  };
  var timer = setInterval(function() {
    $scope.$apply(updateClock);
  }, 1000);
  updateClock();
});
