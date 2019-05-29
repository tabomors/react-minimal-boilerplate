/*
  NOTE: you can delete this file if you are not planning to deploy your app to Heroku
*/

const path = require('path');
const express = require('express');
const app = express();

const staticFolder = path.join(__dirname, 'dist');

app.use(express.static(staticFolder));

// NOTE: most likely you don't need this route. I created it just to test how proxy in webpack dev server works
app.get('/hello', (_, res) => {
  res.send({ message: 'Node' });
});

app.get('*', (_, res) => {
  res.sendFile(path.join(staticFolder, 'index.html'));
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`Server is up on the port ${PORT}`);
});
