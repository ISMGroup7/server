const express = require('express');
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');
const logoutRoute = require('./routes/logout')
const postRoute = require('./posts');
const verifyToken = require('./verifyToken');
const propertyRoute = require('./routes/propertyRoute');

const PORT = process.env.PORT || 3000;
dotenv.config();

mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true },
    () => console.log("connected to db")
)

const app = express();

app.use(express.json())

app.use('/api/user/register', registerRoute)
app.use('/api/user/login', loginRoute)
app.use('/api/posts', postRoute)
app.use('/api/user/addProperty', propertyRoute)
app.use('/api/user/logout', verifyToken, logoutRoute)


app.listen(PORT, () => console.log(PORT+'server up and running'));