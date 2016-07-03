'use strict';

angular.module('clientApp')

  .service('VoiceCommandsSerivce', [function(){

    return{

      initVoiceCommands : function(){

          /* check if the web browser is capable of speech recognition. */
          if(SPEECH.isCapable()){

            /* if the browser is capable, add the following commands. */
            SPEECH.addVoiceCommands([
              /* take off command. */
              {
                command: "fly",
                callback: function() {
                  console.log("VOICE COMMAND: FLY.");
                },
                min_confidence: .005
              },
              /* land command. */
              {
                command: "land",
                callback: function() {
                  console.log("VOICE COMMAND: LAND.");
                },
                min_confidence: .005
              },
              /* stop command. */
              {
                command: "stop",
                callback: function() {
                  console.log("VOICE COMMAND: STOP.");
                },
                min_confidence: .005
              },
              /* rotate command. */
              {
                command: "rotate",
                callback: function() {
                  console.log("VOICE COMMAND: ROTATE.");
                },
                min_confidence: .005
              },
              /* move left command. */
              {
                command: "move left",
                callback: function() {
                  console.log("VOICE COMMAND: MOVE LEFT.");
                },
                min_confidence: .005
              },
              /* move right command. */
              {
                command: "move right",
                callback: function() {
                  console.log("VOICE COMMAND: MOVE RIGHT.");
                },
                min_confidence: .005
              },
              /* move forward command. */
              {
                command: "move forward",
                callback: function() {
                  console.log("VOICE COMMAND: MOVE FORWARD.");
                },
                min_confidence: .005
              },
              /* move backward command. */
              {
                command: "move backward",
                callback: function() {
                  console.log("VOICE COMMAND: MOVE BACKWARD.");
                },
                min_confidence: .005
              },
              /* flip command. */
              {
                command: "flip",
                callback: function() {
                  console.log("VOICE COMMAND: FLIP.");
                },
                min_confidence: .005
              },
              /* random lights command. */
              {
                command: "random lights",
                callback: function() {
                  console.log("VOICE COMMAND: RANDOM LIGHTS.");
                },
                min_confidence: .005
              }
            ]);

            /* start speech recognition. */
            SPEECH.start();

        } /*  is capable end if. */
      } /* end init function. */

    };

  }]);
