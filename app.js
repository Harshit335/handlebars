const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

const route = require('./router')


app.use('/api', route);

app.use(express.static(__dirname + '/public'));

// app.engine('hbs', exphbs.engine({
//     defaultLayout: 'main',
//     extname: '.hbs'
// }));

// app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.send('Welcome');
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});