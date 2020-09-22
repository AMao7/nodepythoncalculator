var express = require('express');
var app = express();
var bodyParser = require('body-parser')
let {PythonShell} = require('python-shell');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine','pug');
app.set('views','./views');

app.get('/', function(req,res){
    res.render('calc')
});

app.get('/results', function(req, res) {
    res.render('results')
  });

app.post('/calc', function (req, res) {
    console.log(req.body);
    oper = req.body.operator
    numone = req.body.firstnum
    numtwo =req.body.secondnum
    let options = {
        pythonPath: '/usr/bin/python3',
        pythonOptions: ['-u'], // get print results in real-time
        scriptPath: '.',
        args: [oper, numone, numtwo]
    };
    PythonShell.run('calc.py', options, function (err, results) {
        if (err) throw err;
        // results is an array consisting of messages collected during execution
        console.log('results: %j', results);
        res.render('results',{results:results})
    });
  });

app.listen(3000, function() {
    console.log('App listening at http://localholst:3000')
});