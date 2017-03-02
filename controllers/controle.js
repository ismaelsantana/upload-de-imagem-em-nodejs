module.exports = function(app) {
	let modelo = app.models.schema; 
	
	const cloudinary = require('cloudinary');
	// cloudinary config
	cloudinary.config({ 
	  cloud_name: 'usuario', 
	  api_key: 'api_key', 
	  api_secret: 'api_secret' 
	});

	// rotas 
	let rotas = {
	  	index: (req, res) => {
	  		res.render("index");
	  	},
	  	upload: (req, res) => {
			cloudinary.uploader.upload(req.file.path, function(result) { 
		  	console.log(result)
			  	let dados = {
			  		nome: req.body.nome,
			  		data: req.body.data,
			  		img: result.secure_url
			  	}
			  	 new modelo(dados).save(function(err, data){
			  	 	if (err) {result.send(err)}
			  	 		res.render('index', {data: data});
			  	 }); 
			});	
		}
	} 

  return rotas;
};