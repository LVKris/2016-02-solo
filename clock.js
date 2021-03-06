var app = angular.module('myApp', []);

app.controller('MyController', function($scope) {
  
  
  $scope.updateCnt = function() {
    var letUsed = {};
    var signText = $scope.textBlock.toUpperCase();
    for (var i = 0, len = signText.length; i < len; i++) {
      letUsed[signText.charAt(i)] = ++letUsed[signText.charAt(i)] || 1;
    }
    var validChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!"#$%&\'()*+,-./:;=?@¢¼½¾“⅓';
    
    var ordered = [], obj;
    for (var i = 0, len = validChar.length; i < len; i++) {
      if (letUsed[validChar.charAt(i)]) {
        obj = {};
        obj[validChar.charAt(i)] = letUsed[validChar.charAt(i)];
        ordered.push(obj);
      }
    }
    
    // for (var i = 0; i < $scope.textBlock.length; i++) {
    //   str += $scope.textBlock.charCodeAt(i) + '|';
    // }
    $scope.textBack = ordered;
  
  }
  
  
  
  
  
  
  
  var updateClock = function() {
    $scope.clock = new Date().toLocaleTimeString();
  };
  var timer = setInterval(function() {
    $scope.$apply(updateClock);
  }, 1000);
  updateClock();
});
