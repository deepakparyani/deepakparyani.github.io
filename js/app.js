/*global $*/
define(
  ['marionette','vent','views/header','views/Footer','views/LeftPane','views/RightPane','views/Article'],
  function(marionette, vent, Header, Footer, LeftPane, RightPane, Article){
    "use strict";

    var app = new marionette.Application();
        
   /* app.bindTo(todoList, 'all', function() {
      if (todoList.length === 0) {
        app.main.$el.hide();
        app.footer.$el.hide();
      } else {
        app.main.$el.show();
        app.footer.$el.show();
      }
    });*/

    app.addRegions({
      header : '#header',
      article   : '#article',
      leftpane : '#left-pane',
      rightpane : '#right-pane',
      footer : '#footer'
    });

    app.addInitializer(function(){

    /*  var viewOptions = {
        collection : todoList
      }*/;

        app.header.show(new Header());
//      app.main.show(new TodoListCompositeView(viewOptions));
        app.leftpane.show(new LeftPane());
        app.article.show(new Article({'title':'hi'}));
        app.rightpane.show(new RightPane());
        app.footer.show(new Footer());
//      todoList.fetch();
    });

/*
    vent.on('todoList:filter',function(filter) {
      filter = filter || 'all';
      $('#todoapp').attr('class', 'filter-' + filter);
    });

    vent.on('todoList:clear:completed',function(){
      function destroy(todo)     { todo.destroy(); }

      todoList.getCompleted().forEach(destroy);
    });
*/
    return app;

  }
);
