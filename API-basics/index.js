const express = require("express");

const app = express();

app.listen(2701, () => {
    console.log("listening on port 2700")
})

app.get("/home",function (req,res){
    res.send("hello")
})

app.get("/books",function(req,res){
    res.send([
     {   
        title:"A Chance for Mr Lever",
        author:"Graham Greene (1904-1991)",
        genre:"drama",
        isbn:"1-86092-045-4"
     },
     {   
        title:"Anna Karenina",
        author:"Leo Tolstoy",
        genre:"drama",
        isbn:"1-84062-045-4"
     },
     {   
        title:"Atomic Habits",
        author:"Atomic Habits",
        genre:"self help",
        isbn:"1-83492-045-4"
     },
     {   
        title:"The Lean startup",
        author:"eric eries",
        genre:"startup",
        isbn:"1-82392-035-4"
     },

])
})