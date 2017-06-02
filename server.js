var express=require('express');

//Create app
var app=express();

const PORT = process.env.PORT || 3000;
app.use(function (request,response,next){
  if (request.headers['x-forwarded-proto']==='http'){
     next();
  }
  else{
    response.redirect('http://'+request.hostname+request.url);
  }
})
//Folder to serve
app.use(express.static('public'));

//start server
app.listen(PORT,function(){
   console.log('express server up on port '+PORT);
});