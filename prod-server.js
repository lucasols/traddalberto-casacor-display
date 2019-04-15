const path = require('path');
const express = require('express');

const port = 5050;

const app = express();

// server latency
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});

app.use(express.static(path.join(__dirname, './dist')));

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
