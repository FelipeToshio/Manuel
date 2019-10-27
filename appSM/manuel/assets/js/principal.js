/*angular.module('todo', ['ionic'])

.controller('MqttCtrl', function($scope, $stateParams) {

    $scope.data = {
      'mqttTopic' : '',
      'mqttMessage':''
    };
  
  
    var mqtt = require('mqtt');

    var client = mqtt.connect({
        host: 'farmer.cloudmqtt.com',
        port: 14318,
        username: 'edfyxqxr',
        password: 'ARqqzciO0SqJ'
    });
  
    client.on('connect', function(){
  
      client.subscribe('ionic/logan');
  
      client.on('message', function(topic, message) {
        var parsed=JSON.parse(message);
  
       $scope.data.mqttTopic=topic;
       //$scope.data.mqttMessage=parsed;
  
       $scope.$apply(function(){
  
          $scope.data.mqttMessage=parsed;     // 
  
      });
  
       console.log($scope.data.mqttTopic);
       console.log($scope.data.mqttMessage);
      });
  
    });
  
  
  })

  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
  
    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })
  
    .state('app.search', {
      url: "/search",
      views: {
        'tab-search': {
          templateUrl: "templates/search.html"
        }
      }
    })
  
    .state('app.browse', {
      url: "/browse",
      views: {
        'tab-browse': {
          templateUrl: "templates/browse.html",
          controller: 'MqttCtrl'
        }
      }
    })
})
*/