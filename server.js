const express = require("express");
const sequelize = require("./config/connection");
const app = express();
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log("list onport# http://localhost:3001");
});