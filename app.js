const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const users = require('./routes/users.js')
const cards = require('./routes/cards.js')


const { PORT = 3000, BASE_PATH } = process.env;

const app = express();

app.use(bodyParser());

app.use(express.static(path.join(__dirname, 'public')));


app.use('/users', users);
app.use('/cards', cards);

app.use((req, res) => {
  res.status('404');
  console.log(req.path);
  res.send({ message: 'Запрашиваемый ресурс не найден'});
});

app.listen(PORT, () => {
  console.log(`Сервер запущен, порт: ${PORT}.`);
});