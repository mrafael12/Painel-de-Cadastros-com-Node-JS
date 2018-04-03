function FabricanteDAO(connection){
    this._connection = connection;
}

FabricanteDAO.prototype.listaFabricantes = function(callback){
    this._connection.query('SELECT * FROM fabricante ORDER BY nome ASC', callback);
}

FabricanteDAO.prototype.salvar = function(fabricante, callback){    
          
    if( fabricante.id ) {        
        this._connection.query('UPDATE fabricante SET ? WHERE id = ? ', [fabricante, fabricante.id], callback);
    } else {
        this._connection.query('INSERT INTO fabricante SET ? ', fabricante, callback);
    }
}

FabricanteDAO.prototype.editar = function(fabricante, callback){    
    this._connection.query('SELECT * FROM fabricante WHERE id = ' + fabricante, callback);
}

FabricanteDAO.prototype.excluir = function(fabricante, callback){    
    this._connection.query('DELETE FROM fabricante WHERE id = ' + fabricante, callback);
}

module.exports = function(){
    return FabricanteDAO;
}