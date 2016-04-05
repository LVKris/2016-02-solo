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
    // var obj = {};
    for (var i = 0, len = validChar.length; i < len; i++) {
      if (letUsed[validChar.charAt(i)]) {
        // obj = {};
        // obj['letter'] = validChar.charAt(i);
        // obj['count'] = letUsed[validChar.charAt(i)];
        // ordered.push(obj);
        ordered.push({'letter':validChar.charAt(i), 'count':letUsed[validChar.charAt(i)]});
      }
    }
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
