

module.exports.listaProdutos = function(application, req, res){
    var connection = application.config.dbConnection();    
    var produtoModel = new application.app.models.ProdutoDAO(connection); 
    var fabricanteModel = new application.app.models.FabricanteDAO(connection);       
    var categoriaModel = new application.app.models.CategoriaDAO(connection);       

    produtoModel.listaProdutos(function(error, produtos){ 
        console.log(error);
        fabricanteModel.listaFabricantes(function(error, fabricantes){
            categoriaModel.listaCategorias(function(error, categorias){
                res.render('produto', { validacao: {}, produtos : produtos, fabricantes : fabricantes ,categorias : categorias });                   
            });
        });                       
    });    
}

module.exports.salvar = function(application, req, res) {                     
    var dadosForm = req.body;                      
    var connection = application.config.dbConnection();
    var produtoModel = new application.app.models.ProdutoDAO(connection);             

    if( req.file ) {
        dadosForm['foto']     = req.file.filename;    
    }
    
    dadosForm['destaque'] = dadosForm.destaque == 'on' ? 1 : 0;        
    
    produtoModel.salvar(dadosForm, function(error, result){         
        produtoModel.listaProdutos(function(error, produtos){    
            connection.end();                                           
            res.redirect('produto');
        });         
    });                    
}

module.exports.editar = function(application, req, res){
    var dadosForm = req.params._id;        
    var connection = application.config.dbConnection();
    var produtoModel = new application.app.models.ProdutoDAO(connection);
    var fabricanteModel = new application.app.models.FabricanteDAO(connection);
    var categoriaModel = new application.app.models.CategoriaDAO(connection);
    
    produtoModel.editar(dadosForm, function(error, produtos){    
        fabricanteModel.listaFabricantes(function(error, fabricantes){
            categoriaModel.listaCategorias(function(error, categorias){
                connection.end();    
                res.render('produtoEditar', { validacao: {}, produtos : produtos, fabricantes : fabricantes ,categorias : categorias });                   
            });                        
        });
    });             
}

module.exports.excluir = function(application, req, res){
    var dadosForm = req.params._id;        
    var connection = application.config.dbConnection();
    var produtoModel = new application.app.models.ProdutoDAO(connection);
    
    produtoModel.excluir(dadosForm, function(error, produtos){    
        connection.end();            
        res.redirect('/produto');                   
    });             
}