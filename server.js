var express=require('express');

//Create app
var app=express();

const PORT = process.env.PORT || 3000;
app.use(function (request,response,next){
  if (request.headers['x-forwarded-proto']==='https'){
    response.redirect('http://'+request.hostname+request.url);
     
  }
  else{
    next();
  }
})
//Folder to serve
app.use(express.static('public'));

//start server
app.listen(PORT,function(){
   console.log('express server up on port '+PORT);
});