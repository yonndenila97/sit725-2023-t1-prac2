var express = require('express');
var app = express();
var port = process.env.port || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

function addNumbers(number1, number2) {
    return parseInt(number1) + parseInt(number2);
}

app.get('/', (req, res) => {
    res.render('index.html');
})

app.use('/addTwoNumbers', (req, res) => {
    var number1 = req.query.number1;
    var number2 = req.query.number2;
    var result = addNumbers(number1, number2);
    res.json({statusCode: 200, data: result, message: 'Success' });
});

app.listen(port, () => {
    console.log("App listening to: " + port);

});