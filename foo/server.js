const express  = require('express');
const app = express();
function add(a, b){
    return a + b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function subtract(a, b){
    return a - b;
}
app.set('view engine', 'ejs');


app.get('/',(req, res) => {
    res.render('index', { nice:'World', obj:{ok:'true'} })
})

app.listen(3000)