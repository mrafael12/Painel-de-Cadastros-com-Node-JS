/* Importar o MongoDB */
/*var mongo = require('mongodb');

var connMongoDB = function(){    
    var db = new mongo.Db(
        'ecommerce',
        new mongo.Server(
            'localhost', //String contendo o endereco do banco
            27017, //Porta de conexao
            {} //Objeto com opçoes de configuração do servidor
        ),
        {} //COnfigurações opcionais
    );

    return db;
}

module.exports = function(){
    return connMongoDB;
}*/

var mysql = require('mysql');


var connMysql = function() {
	return mysql.createConnection({
		host:'localhost',
		user:'root',
		password:'',
		database:'loja'
	});
}

module.exports = function(){
	return connMysql;
}