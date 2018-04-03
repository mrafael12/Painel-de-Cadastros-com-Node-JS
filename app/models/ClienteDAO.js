function ClienteDAO(connection){
    this._connection = connection;
}

ClienteDAO.prototype.listaClientes = function(callback){
    this._connection.query('SELECT * FROM cliente ORDER BY nome ASC', callback);
}

ClienteDAO.prototype.salvar = function(cliente, callback){    
          
    if( cliente.id ) {        
        this._connection.query('UPDATE cliente SET ? WHERE id = ? ', [cliente, cliente.id], callback);
    } else {
        this._connection.query('INSERT INTO cliente SET ? ', cliente, callback);
    }
}

ClienteDAO.prototype.editar = function(cliente, callback){    
    this._connection.query('SELECT * FROM cliente WHERE id = ' + cliente, callback);
}

ClienteDAO.prototype.excluir = function(cliente, callback){    
    this._connection.query('DELETE FROM cliente WHERE id = ' + cliente, callback);
}

module.exports = function(){ 
    return ClienteDAO;
}