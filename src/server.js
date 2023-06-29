const express = require('express');
const app = express();
const Routes = require("./routes")

app.use(Routes)

app.listen(3344 , () => console.log("O server esta Online na porta 3344"))