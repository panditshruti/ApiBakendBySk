
require('dotenv').config()
const express = require('express');
const app = express();
const port = 9000;

app.get('/', (req, res) => {
  res.send('Hello World dsfsdf!');
});
app.get('/twitter', (req, res) => {
    res.send('Hello Shruti pandit!');
  });

  app.get('/login',(req,res) =>{
res.send('<h1>Login To shruti Pandit chnnel</h1>')

  })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at ${port}`);
});
