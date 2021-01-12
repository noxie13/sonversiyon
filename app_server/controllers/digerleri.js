const hakkinda=function(req, res, next) {
  res.render('hakkinda', 
  	{ 'title': 'Hakkında',
  	  'footer': 'İsmail Koç 2020',
  	   }
  	);
}

module.exports={

	hakkinda
	
}