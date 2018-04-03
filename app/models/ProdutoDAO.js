function ProdutoDAO(connection){
    this._connection = connection;
}

ProdutoDAO.prototype.listaProdutos = function(callback){
    this._connection.query('SELECT p.*, f.nome as fabricante, c.nome as categoria ' +
        'FROM produto p ' +
        'INNER JOIN fabricante f ON f.id = p.id_fabricante ' +
        'INNER JOIN categoria c ON c.id = p.id_categoria ' +
        'ORDER BY p.nome ASC ', callback);
}

ProdutoDAO.prototype.salvar = function(produto, callback){             
    if( produto.id ) {                    
        this._connection.query('UPDATE produto SET ? WHERE id = ? ', [produto, produto.id], callback);
    } else {                
        this._connection.query('INSERT INTO produto SET ? ', produto, callback);
    }
}

ProdutoDAO.prototype.editar = function(produto, callback){    
    this._connection.query('SELECT id, nome, descricao, valor, DATE_FORMAT(data_cadastro, "%Y-%m-%d") as data_cadastro, foto, destaque, id_categoria, id_fabricante FROM produto WHERE id = ' + produto, callback);
}

ProdutoDAO.prototype.excluir = function(produto, callback){    
    this._connection.query('DELETE FROM produto WHERE id = ' + produto, callback);
}

module.exports = function(){
    return ProdutoDAO;
}