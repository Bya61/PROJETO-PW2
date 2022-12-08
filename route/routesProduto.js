	/*IMPORTA O PACOTE DO EXPRESS PARA O SCRIPT index.js*/
	const express = require('express');

	const modelProduto = require('../model/modelProduto');

	/*GERENCIADOR DE ROTAS DO EXPRESS*/
	const router = express.Router();

	
	
	router.post('/cadastrarProduto', (req, res)=>{
	    res.send('ROTA DE CADASTRO DE PRODUTO!');
	    
	});

	router.get('/listarProduto', (req, res)=>{
	    res.send('ROTA DE LISTAGEM DE PRODUTO!');
	});

	router.put('/alterarProduto', (req, res)=>{
	    res.send('ROTA DE ALTERAÇÃO DE PRODUTO!');
	});


	router.delete('/excluirProduto', (req, res)=>{
	    res.send('RORA DE EXCLUSÃO DE PRODUTO!');
	});

	module.exports = router;		
