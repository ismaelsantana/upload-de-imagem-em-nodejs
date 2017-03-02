const express = require('express');
const multer  = require('multer');
const bodyParser = require('body-parser')
const load = require('express-load');
const hbs = require('hbs');
const app = express();

// Multer para fazer upload da imagem
app.use(multer({ dest: "imagens/"}).single('img'));

// template engine para integrar o backend com o frontend
app.set('view engine', 'hbs');

load('models')
  .then('controllers')
  .then('routes')
  .into(app);

// req.body json 
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.listen('3000', ()=>{
	console.log("Servidor no ar -->");
});