/* Importar o módulo do crypto */
var crypto = require("crypto");

module.exports.listaClientes = function(application, req, res){
    var connection = application.config.dbConnection();    
    var clienteModel = new application.app.models.ClienteDAO(connection);       

    clienteModel.listaClientes(function(error, clientes){                
        res.render('cliente', { validacao: {}, clientes : clientes });                   
    });    
}

module.exports.salvar = function(application, req, res){        
    var dadosForm = req.body;
    var connection = application.config.dbConnection();
    var clienteModel = new application.app.models.ClienteDAO(connection);
    var senha_criptografada = crypto.createHash("md5").update(dadosForm['senha']).digest("hex");    

    var dados = {
        id   : dadosForm['id'],
        nome : dadosForm['nome'],
        email: dadosForm['email'],
        senha: senha_criptografada,
        data_cadastro : new Date()
    }        

    clienteModel.salvar(dados, function(error, result){                       
        connection.end();                                           
        res.redirect('cliente');        
    });         
}

module.exports.editar = function(application, req, res){
    var dadosForm = req.params._id;        
    var connection = application.config.dbConnection();
    var clienteModel = new application.app.models.ClienteDAO(connection);
    
    clienteModel.editar(dadosForm, function(error, clientes){    
        connection.end();            
        res.render('clienteEditar', { clientes : clientes });                   
    });             
}

module.exports.excluir = function(application, req, res){
    var dadosForm = req.params._id;        
    var connection = application.config.dbConnection();
    var clienteModel = new application.app.models.ClienteDAO(connection);
    
    clienteModel.excluir(dadosForm, function(error, clientes){    
        connection.end();            
        res.redirect('/cliente');                   
    });             
}