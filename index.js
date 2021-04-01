var express = require('express');
var expressHbs = require('express-handlebars')
var app = express();
app.engine('handlebars',expressHbs({
    layoutsDir: __dirname + '/views/layouts',
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.get('/',function (repuest,response){
    //home là tên giao diện trong thư mục
    //view
    // truy vấn dư liệu
    // var duleu = 'Đây là dữ liệu';
    // response.render('home',{title: duleu}) ;
    response.render('home') ;
});

app.get('/login',function (repuest,response){

});
app.listen(process.env.PORT);