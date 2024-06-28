const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const authRoutes = require('./routes/auth');
const emailRoute = require('./routes/emailRoute');
const userRoutes = require('./routes/userRoutes');
const resetRoute = require('./routes/resetRoute');
const profileRoute = require('./routes/profileRoute');
const searchRoute = require('./routes/searchRoute');
const artworkRouter = require('./routes/artwork');
const userRoute = require('./routes/user');
const helpRoute = require('./routes/helpRoute');

const app = express();
const port = 3000;
const allowedOrigins = ['https://kajas.site'];

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,PATCH,DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

app.options('*', (req, res) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,PATCH,DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.sendStatus(200);
});

app.use(cors({ origin: 'https://kajas.site' }));

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use('/api', authRoutes);
app.use(emailRoute);
app.use('/api/users', userRoutes);
app.use(resetRoute);
app.use('/api', profileRoute);
app.use('/api', searchRoute);
app.use('/api', artworkRouter);
app.use('/api', userRoute);
app.use('/api', helpRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
