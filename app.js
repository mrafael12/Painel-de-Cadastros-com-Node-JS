const SITE_URL   = 'http://localhost';
const SITE_PORTA = '800';
const SITE_PASTA = 'loja';
const SITE_NOME  = 'Mini Loja 2018 - Rafael Paula';
const SITE_EMAIL_ADM = 'mrafaelspp@gmail.com';

/* Dados do servidor de Email */
const EMAIL_HOST  = '';
const EMAIL_USER  = '';
const EMAIL_NOME  = '';
const EMAIL_SENHA = '';
const EMAIL_PORTA = '';
const EMAIL_SMTPAUTH   = '';
const EMAIL_SMTPSECURE = '';

/* importar as configurações do servidor */
var app = require('./config/server');

/* parametrizar a porta de escuta */
app.listen(800, function(){
	console.log('Servidor do Painel online');
})