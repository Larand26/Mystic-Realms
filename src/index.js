document.addEventListener("DOMContentLoaded", () => {
  const element = document.getElementById("protagonista");
  let positionX = 50; // Posição inicial
  let positionY = 50;
  let velocidade = 30;
  const teclasPressionadas = new Set();

  const moveEl = () => {
    if (teclasPressionadas.size > 0) {
      teclasPressionadas.forEach((tecla) => {
        switch (tecla) {
          case "a":
            positionX -= velocidade;
            break;
          case "d":
            positionX += velocidade;
            break;
          case "w":
            positionY -= velocidade;
            break;
          case "s":
            positionY += velocidade;
            break;
        }
      });
      element.style.left = positionX + "px";
      element.style.top = positionY + "px";
      requestAnimationFrame(moveEl);
    }
  };

  document.addEventListener("keydown", (evt) => {
    const tecla = evt.key.toLowerCase();
    if (["a", "d", "w", "s"].includes(tecla)) {
      teclasPressionadas.add(tecla);
      if (teclasPressionadas.size === 1) {
        requestAnimationFrame(moveEl);
      }
    }
  });

  document.addEventListener("keyup", (evt) => {
    const tecla = evt.key.toLowerCase();
    teclasPressionadas.delete(tecla);
  });
});
