const express = require('express');
const app = express();
const path = require('path');


const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

const bookRouter = require('./routes/book-routes');
app.use('/', bookRouter);

/*app.get('/', (req,res) => {
  res.render('main');
});*/

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
