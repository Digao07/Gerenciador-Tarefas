require('dotenv').config();
const express = require('express');
const sequelize = require('./config/database');


const app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
