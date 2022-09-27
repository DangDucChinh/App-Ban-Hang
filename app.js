const http = require('http');

const express = require('express') ; 
const app = express();
const path = require('path') ; 
const indexRouter = require('./routes/index'); 
const adminRouter = require('./routes/admin/admin');

const mongoose = require('mongoose');
const uri = 'mongodb+srv://Chinh:zalo12345@cluster0.ktlpfjo.mongodb.net/test';

app.use(express.static(path.join(__dirname, 'public','styles')));
app.use('/images', express.static(path.join(__dirname, 'images')));


app.set('view engine', 'ejs');
app.set('views', 'views');


app.use('/admin', adminRouter);
app.use(indexRouter) ; 



app.use('/', (req, res, next)=>{
    res.render('404'); 
})

mongoose
  .connect(uri)
  .then(result => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });


