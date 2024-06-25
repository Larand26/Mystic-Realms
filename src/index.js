document.addEventListener("DOMContentLoaded", () => {
  const element = document.getElementById("protagonista");
  let position = 50; // Posição inicial
  let move = false;
  let velocidade = 5;

  const moveRight = () => {
    if (move) {
      position += velocidade; // Incremento menor para movimento mais fluido
      element.style.left = position + "px";
      requestAnimationFrame(moveRight);
    }
  };
  const moveLeft = () => {
    if (move) {
      position -= velocidade; // Incremento menor para movimento mais fluido
      element.style.left = position + "px";
      requestAnimationFrame(moveLeft);
    }
  };

  document.addEventListener("keydown", (event) => {
    if (event.key === "d" || event.key === "D") {
      if (!move) {
        move = true;
        requestAnimationFrame(moveRight);
      }
    }
    if (event.key === "a" || event.key === "A") {
      if (!move) {
        move = true;
        requestAnimationFrame(moveLeft);
      }
    }
  });

  document.addEventListener("keyup", (event) => {
    if (event.key === "d" || event.key === "D") {
      move = false;
    }
    if (event.key === "a" || event.key === "A") {
      move = false;
    }
  });
});
