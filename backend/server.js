/**
 * Arquivo: server.js
 * Descrição: Ponto de entrada para a API. Arquivo responável pela configuração da applicação. 
 * Data: 06/29/2021
 * Autora: Danielle Ajala
 */
require('dotenv').config();
const express = require('express');
// eslint-disable-next-line import/extensions
const profissaoRoute = require('./scr/routes/profissaoRoute');
const profissionalRoute = require('./scr/routes/profissionalRoute');

const app = express();
app.use(express.json());


app.use('/api/profissao',profissaoRoute);
app.use('/api/profissional',profissionalRoute);

const PORT = process.env.PORT || 5000;

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
