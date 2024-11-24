const express = require('express');
const app = express();
const db = require('./config/mongoose-connection');

const cookieParser = require('cookie-parser');
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.use("/owners",ownersRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});