const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())
const categories = require("./data/categories.json")
const news = require('./data/news.json');


app.get("/",(req,res) => {
    res.send('hello world')
})


app.get("/news",(req,res) => {
    res.send(news)
})


//find single news
app.get("/news/:id",(req,res) => {
    const id = req.params.id;
    const singleNews = news.find(n => n._id == id);
    res.send(singleNews)
})

//find news category
app.get("/categories/:id",(req,res) => {
    const id = parseInt(req.params.id);

    if(id === 0){
        res.send(news)
    }
    else{
        const categoryNews = news.filter(n => parseInt(n.category_id) === id);
        res.send(categoryNews)

    }

})

app.get("/categories",(req,res) => {
    res.send(categories)
})



//server run
app.listen(port,() => {
   
})