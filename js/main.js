require.config({
  paths : {
    underscore : 'lib/underscore',
    backbone   : 'lib/backbone',
    marionette : 'lib/backbone.marionette',
    jquery     : 'lib/jquery.min',
    tpl        : 'lib/tpl'
  },
  shim : {
    'lib/backbone-localStorage' : ['backbone'],
    underscore : {
      exports : '_'
    },
    backbone : {
      exports : 'Backbone',
      deps : ['jquery','underscore']
    },
    marionette : {
      exports : 'Backbone.Marionette',
      deps : ['backbone']
    }
  },
  deps : ['jquery','underscore']
});

require(['app','backbone'],function(app,Backbone){
  "use strict";

  app.start();
  Backbone.history.start();
});
