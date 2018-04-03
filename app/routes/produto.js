/* importar o módulo Multer para trabalhar com imagens */
var multer = require('multer');
var fs = require('fs');
var caminho = "app/public/uploads";

module.exports = function(application){
	application.get('/produto', function(req, res){
		application.app.controllers.produto.listaProdutos(application, req, res);
	});		
	
	var storage = multer.diskStorage({		
		destination: function(req, file, callback){		 
			callback(null, caminho)		 
		},		 
		filename: function(req, file, callback){		 
			callback(null, Date.now() + '-' + file.originalname)		 
		}		 
	})

	var upload = multer({storage: storage}).single('arquivo');

	application.post('/salvarProduto', function(req, res){		
		upload(req,res,function(err){					
			if( req.file ) {				
				fs.readFile(req.file.path, function (err, data) {				
					application.app.controllers.produto.salvar(application, req, res);
				});	
			} else {				
				application.app.controllers.produto.salvar(application, req, res);
			}
		});									
	});
	
	application.get('/editarProduto/:_id', function(req, res){            				
		application.app.controllers.produto.editar(application, req, res);
	});

	application.get('/excluirProduto/:_id', function(req, res){            				
		application.app.controllers.produto.excluir(application, req, res);
	});
}