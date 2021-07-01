/**
 * Arquivo: backend\scr\config\inputFormat.js
 * Descrição: arquivo responável por formatar os textos inseridos pelo usuario no frontend
 * Data: 06/30/2021
 * Autora: Danielle Ajala
 */

const inputFormat = (userInput)=>{
    const inputTrim = userInput.trim();

    // elimina maid de um espaços em branco em inputs compostos
    const inputdoublespaces = inputTrim.replace(/\s\s+/g, ' ');

    const inputUppercase = inputdoublespaces.toUpperCase();
    return inputUppercase;

}

module.exports = inputFormat;