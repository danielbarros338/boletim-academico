const express = require('express');
const path = require('path');
const nameApp = process.env.npm_package_name;
const app = express();

app.use(express.static(`${__dirname}/dist/frontend`));

app.get("/", (req,res) => {
    res.sendFile('index.html',{root: 'dist/frontend'})
})

app.listen(process.env.PORT || 8080);