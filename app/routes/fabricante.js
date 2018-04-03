module.exports = function(application){
	application.get('/fabricante', function(req, res){
		application.app.controllers.fabricante.listaFabricantes(application, req, res);
	});	

	application.post('/salvarFabricante', function(req, res){		
		application.app.controllers.fabricante.salvar(application, req, res);
	});
	
	application.get('/editarFabricante/:_id', function(req, res){            				
		application.app.controllers.fabricante.editar(application, req, res);
	});

	application.get('/excluirFabricante/:_id', function(req, res){            				
		application.app.controllers.fabricante.excluir(application, req, res);
	});
}