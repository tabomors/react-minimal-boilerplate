/*
  NOTE: you can delete this file if you are not planning to deploy your app to Heroku
*/

const express = require('express');
const app = express();

app.get('/hello', (_, res) => {
  res.send({ message: 'Node' });
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`Server is up on the port ${PORT}`);
});
