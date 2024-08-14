// script.js
const canvas = document.getElementById("protagonista");
const ctx = canvas.getContext("2d");
// Desenha um círculo azul
ctx.beginPath(); // Inicia um novo caminho
ctx.arc(400, 300, 100, 0, 2 * Math.PI); // x, y, raio, início, fim
ctx.fillStyle = "blue"; // Cor de preenchimento
ctx.fill(); // Preenche o círculo
