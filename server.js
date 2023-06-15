const express = require('express'),
app = express(),
port = 3009,
server = app.listen(port,()=>console.log("this way ", port))
app.use(express.static('public'))