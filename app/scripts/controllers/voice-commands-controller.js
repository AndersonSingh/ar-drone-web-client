'use strict';

angular.module('clientApp')

  .controller('VoiceCommandsController', ['$scope', 'VoiceCommandsSerivce', function($scope, VoiceCommandsSerivce){

    $scope.initVoiceCommands = function(){
      console.log("working");
      VoiceCommandsSerivce.initVoiceCommands();
    };
  }]);
