function HomeDAO(connection){
    this._connection = connection;
}

HomeDAO.prototype.listaProdutosPorCategoria = function(callback){
    this._connection.query('SELECT count(p.id) as qtd, c.nome as nome ' +
                           ' FROM produto p ' +
                           ' left outer join categoria c on c.id = p.id_categoria ' +
                           ' GROUP BY c.nome ' +
                           'ORDER BY c.nome ASC', callback);
}

module.exports = function(){
    return HomeDAO;
}