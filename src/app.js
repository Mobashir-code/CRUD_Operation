const express = require('express');
const app = express();
require('./database/mongoose');
const router = require('./routers/user');
const path = require('path');
const cors = require('cors');

const port = process.env.PORT || 3001;

app.use(cors())
app.use(express.json())
app.use(router)
app.use(express.static(path.join(__dirname, '/build')))


app.listen(port, () => {
    console.log('Server is up on port 3001.')
}) 