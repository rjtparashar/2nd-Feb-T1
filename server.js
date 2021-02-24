const express = require('express')
const router = require('./routes/index')
const connection = require('./connection/connect');
connection.connect();
const app = express()
app.use(express.json());
const port = 3005
app.use(router.useradmin);
app.use(router.taskadmin);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))