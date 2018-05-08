const express = require('express');
const app = express(); //建立一個Express伺服器


//设置模板引擎为ejs
app.set('view engine', 'ejs');// 要先安裝 ejs: npm install ejs --save
 


app.get('/about_me', function(req, res){
    var name = req.query.name; // 取網址上面帶的 name 參數
    if(req.query.name === undefined) // 如果沒有帶參數的話，就把名稱改成訪客
      name = '訪客'; 
    res.render('index', {name: name}); // 將 name 變數丟到 index template 中
    
});

app.listen(3000); //告訴server聽取3000這個Port