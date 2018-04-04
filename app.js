const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');

require('./models/map');

const index = require('./routes/index');

mongoURI = 'mongodb://harshit8398:metro8398@ds127993.mlab.com:27993/metro8398';

mongoose.Promise = global.Promise;

mongoose.connect(mongoURI,{
    useMongoClient:true
})
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log(err));

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine('handlebars',exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.use('/',index);

const port = 3000;

app.listen(port,() => {
 console.log('server listening on port ',port);
});