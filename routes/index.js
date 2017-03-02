module.exports = function(app) {

  var controle = app.controllers.controle;

  app.get('/',
    controle.index
  );
  app.post('/upload', 
  	controle.upload
  );

};