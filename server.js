const express = require("express");

const app = express();

const dbConfig = require('./db')

const roomRoutes = require('./routes/roomRoutes')
const usersRoute = require('./routes/usersRoute')
app.use(express.json())
app.use('/api/rooms', roomRoutes)
app.use('/api/users', usersRoute)
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Node Server started using nodemon`);
});