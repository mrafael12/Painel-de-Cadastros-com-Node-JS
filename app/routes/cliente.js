module.exports = function(application){
	application.get('/cliente', function(req, res){
		application.app.controllers.cliente.listaClientes(application, req, res);
	});	

	application.post('/salvarCliente', function(req, res){		
		application.app.controllers.cliente.salvar(application, req, res);
	});
	
	application.get('/editarCliente/:_id', function(req, res){            				
		application.app.controllers.cliente.editar(application, req, res);
	});

	application.get('/excluirCliente/:_id', function(req, res){            				
		application.app.controllers.cliente.excluir(application, req, res);
	});
}