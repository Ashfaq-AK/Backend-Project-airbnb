//External Modules---
const express = require('express');
const app = express();
const PORT = 1205;

app.set('view engine', 'ejs');

//Locat Modules---
const hostRouter = require('./router/hostRouter');
const userRouter = require('./router/userRouter');

app.use(express.urlencoded());

app.use('/', (req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.get('/', (req, res, next) => {
  res.render('Index', {title: "Airbnb by Zeki..."});
});

app.use(userRouter);

app.use(hostRouter);

app.use((req, res, next) => {
  res.render('Error')
  next()
})

// Start server
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
