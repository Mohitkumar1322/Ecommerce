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
const ownersRouter = require('./routes/ownersRouter');
const productsRouter = require('./routes/productsRouter');
const usersRouter = require('./routes/usersRouter');
const indexRouter = require("./routes/index"); 


app.use("/owners",ownersRouter);
app.use("/users",ownersRouter);
app.use("/products",ownersRouter);
app.use("/", indexRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});