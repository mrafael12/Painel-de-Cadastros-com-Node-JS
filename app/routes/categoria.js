module.exports = function(application){
	application.get('/categoria', function(req, res){
		application.app.controllers.categoria.listaCategorias(application, req, res);
	});	

	application.post('/salvarCategoria', function(req, res){		
		application.app.controllers.categoria.salvar(application, req, res);
	});
	
	application.get('/editarCategoria/:_id', function(req, res){            				
		application.app.controllers.categoria.editar(application, req, res);
	});

	application.get('/excluirCategoria/:_id', function(req, res){            				
		application.app.controllers.categoria.excluir(application, req, res);
	});
}