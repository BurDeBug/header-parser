var express = require('express');

var app = express ();

app.get('*',function(req,res){
    console.log(req.headers)
  res.json({
          'ipAddress':((req.headers['x-forwarded-for'] || '').split(',')[0] || req.connection.remoteAddress),
          'language':req.headers['accept-language'].split(',')[0],
          'OS': req.headers['user-agent'].split(') ')[0].split('(')[1]
      }) 
})

app.listen(8080,function(err,success){
    if(err)
        throw err;
    else
        console.log('Server started')
})