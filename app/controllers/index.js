module.exports.listaProdutosPorCategoria = function(application, req, res){
    var connection = application.config.dbConnection();    
    var produtoPorCategoriaModel = new application.app.models.HomeDAO(connection);       

    produtoPorCategoriaModel.listaProdutosPorCategoria(function(error, produtos){                
        res.render('home', { validacao: {}, produtos : produtos });                   
    });    
}