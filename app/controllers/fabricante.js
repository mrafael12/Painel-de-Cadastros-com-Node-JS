module.exports.listaFabricantes = function(application, req, res){
    var connection = application.config.dbConnection();    
    var fabricanteModel = new application.app.models.FabricanteDAO(connection);       

    fabricanteModel.listaFabricantes(function(error, fabricantes){                
        res.render('fabricante', { validacao: {}, fabricantes : fabricantes });                   
    });    
}

module.exports.salvar = function(application, req, res){
        
    var dadosForm = req.body;        
    var connection = application.config.dbConnection();
    var fabricanteModel = new application.app.models.FabricanteDAO(connection);

    fabricanteModel.salvar(dadosForm, function(error, result){               
        fabricanteModel.listaFabricantes(function(error, fabricantes){    
            connection.end();                                           
            res.redirect('fabricante');
        });         
    });    
}

module.exports.editar = function(application, req, res){
    var dadosForm = req.params._id;        
    var connection = application.config.dbConnection();
    var fabricanteModel = new application.app.models.FabricanteDAO(connection);
    
    fabricanteModel.editar(dadosForm, function(error, fabricantes){    
        connection.end();            
        res.render('fabricanteEditar', { fabricantes : fabricantes });                   
    });             
}

module.exports.excluir = function(application, req, res){
    var dadosForm = req.params._id;        
    var connection = application.config.dbConnection();
    var fabricanteModel = new application.app.models.FabricanteDAO(connection);
    
    fabricanteModel.excluir(dadosForm, function(error, fabricantes){    
        connection.end();            
        res.redirect('/fabricante');                   
    });             
}