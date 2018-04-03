function CategoriaDAO(connection){
    this._connection = connection;
}

CategoriaDAO.prototype.listaCategorias = function(callback){
    this._connection.query('SELECT * FROM categoria ORDER BY nome ASC', callback);
}

CategoriaDAO.prototype.salvar = function(categoria, callback){    
          
    if( categoria.id ) {        
        this._connection.query('UPDATE categoria SET ? WHERE id = ? ', [categoria, categoria.id], callback);
    } else {
        this._connection.query('INSERT INTO categoria SET ? ', categoria, callback);
    }
}

CategoriaDAO.prototype.editar = function(categoria, callback){    
    this._connection.query('SELECT * FROM categoria WHERE id = ' + categoria, callback);
}

CategoriaDAO.prototype.excluir = function(categoria, callback){    
    this._connection.query('DELETE FROM categoria WHERE id = ' + categoria, callback);
}

module.exports = function(){
    return CategoriaDAO;
}