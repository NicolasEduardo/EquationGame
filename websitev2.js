








let numeroAleatorio1 = 0;
let numeroAleatorio2 = 0;
let result = 0;
let contadorWin = contadorDefeat = 0;
let clickHabilitado = true;

function playAgain() {
  controlador = 0;
  let operators = ["+", "-"];
  let elementP = document.querySelector("#equation");
  numeroAleatorio1 = Math.floor(Math.random() * 100) + 1;
  numeroAleatorio2 = Math.floor(Math.random() * 100) + 1;
  let numeroAleatorio03 = Math.floor(Math.random() * 2);
  let numeroAleatorio4 = Math.floor(Math.random() * 4) + 1;

  elementP.innerHTML =numeroAleatorio1 + operators[numeroAleatorio03] + numeroAleatorio2;
  if (numeroAleatorio03 == 0) {
    result = numeroAleatorio1 + numeroAleatorio2;
  } else if (numeroAleatorio03 == 1) {
    result = numeroAleatorio1 - numeroAleatorio2;
  }
  let verdadeiro = document.querySelector("#c" + numeroAleatorio4);
  verdadeiro.innerHTML = result;
  verdadeiro.classList = "verdadeiro";
  let allElements = [...document.querySelectorAll("div")];
  allElements.map((e) => {
    if (e.innerHTML == result) {
      e.classList = "verdadeiro";
    } else {
      let numeroAleatorio200 = Math.floor(Math.random() * 200) + 1;
      e.innerHTML = numeroAleatorio200;
    }
    e.addEventListener("click", () => verificarResposta(e));
    e.classList = "options c1";
  });
}

function verificarResposta(e) {
  if (clickHabilitado) {
    clickHabilitado = false;
    setTimeout(() => {
      clickHabilitado = true;
    }, 1000);
    if (e.innerHTML == result) {
      e.classList = "options green";
      e.innerHTML = "CORRETO!";
      let acertos=document.querySelector("#win")
      contadorWin+=1
      acertos.innerHTML="ACERTOS: "+ contadorWin
      setTimeout(playAgain, 500);
    } else {
      let erros=document.querySelector("#defeat")
      contadorDefeat+=1
      e.classList = "options red";
      erros.innerHTML="ERROS: " + contadorDefeat
    }
  }
}

playAgain();