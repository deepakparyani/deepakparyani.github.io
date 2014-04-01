/*global $*/
define(
  ['marionette','vent'],
  function(marionette, vent){
    "use strict";

    var app = new marionette.Application();

    app.addRegions({
      header : '#header',
      main   : '#main',
      footer : '#footer'
    });

    app.addInitializer(function(){
      app.header.show(new Header(viewOptions));
      app.main.show(new TodoListCompositeView(viewOptions));
      app.footer.show(new Footer(viewOptions));
    });
    return app;

  }
);
