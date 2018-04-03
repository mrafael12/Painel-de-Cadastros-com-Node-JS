module.exports.listaCategorias = function(application, req, res){
    var connection = application.config.dbConnection();    
    var categoriaModel = new application.app.models.CategoriaDAO(connection);       

    categoriaModel.listaCategorias(function(error, categorias){                
        res.render('categoria', { validacao: {}, categorias : categorias });                   
    });    
}

module.exports.salvar = function(application, req, res){
        
    var dadosForm = req.body;
    var connection = application.config.dbConnection();
    var categoriaModel = new application.app.models.CategoriaDAO(connection);

    categoriaModel.salvar(dadosForm, function(error, result){               
        categoriaModel.listaCategorias(function(error, categorias){    
            connection.end();                                           
            res.redirect('categoria');
        });         
    });        
}

module.exports.editar = function(application, req, res){
    var dadosForm = req.params._id;        
    var connection = application.config.dbConnection();
    var categoriaModel = new application.app.models.CategoriaDAO(connection);
    
    categoriaModel.editar(dadosForm, function(error, categorias){    
        connection.end();            
        res.render('categoriaEditar', { categorias : categorias });                   
    });             
}

module.exports.excluir = function(application, req, res){
    var dadosForm = req.params._id;        
    var connection = application.config.dbConnection();
    var categoriaModel = new application.app.models.CategoriaDAO(connection);
    
    categoriaModel.excluir(dadosForm, function(error, categorias){    
        connection.end();            
        res.redirect('/categoria');                   
    });             
}