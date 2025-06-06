let x;
let frase = "Concurso Agrinho - Programação - 2025";
let fraseTamanho;
let textoPassou = false;
let efeitoIniciado = false;
let tempoTextoPassou;
let rosa;
let azulTexto;
let fundoPreenchido = false;
let pontosMouse = [];

function setup() {
  createCanvas(800, 400);
  fraseTamanho = height / 3;
  x = width;
  azulTexto = color(0, 191, 255); // Azul para o texto principal
  rosa = color(255, 20, 147); // Rosa para NRE Pitanga
  textSize(fraseTamanho);
  textFont('Arial', 'bold');
  textAlign(LEFT, CENTER);
  background(135, 206, 250); // Fundo azul claro
}

function draw() {
  background(135, 206, 250); // Fundo azul claro

  if (!textoPassou) {
    fill(azulTexto);
    textSize(fraseTamanho);
    text(frase, x, height / 2);
    x -= 3;

    if (x + textWidth(frase) < 0) {
      textoPassou = true;
      tempoTextoPassou = millis();
    }

  } else if (!efeitoIniciado) {
    if (millis() - tempoTextoPassou > 1000) {
      efeitoIniciado = true;
    }

  } else if (!fundoPreenchido) {
    // Redesenha os textos deixados pelo mouse
    for (let i = 0; i < pontosMouse.length; i++) {
      drawNRE(pontosMouse[i].x, pontosMouse[i].y);
    }

    // Se houver muitos pontos, exibe o texto final
    if (pontosMouse.length > 250) {
      fundoPreenchido = true;
    }

  } else {
    // Mensagem final
    background(135, 206, 250);
    fill(azulTexto);
    textAlign(CENTER, CENTER);
    textSize(36);
    textFont('Georgia');
    text("Programação Paraná e Professores", width / 2, height / 2 - 25);
    textSize(28);
    text("Fortalecendo Conexões", width / 2, height / 2 + 25);
    noLoop(); // Para o draw
  }
}

function mouseMoved() {
  if (efeitoIniciado && !fundoPreenchido) {
    pontosMouse.push({ x: mouseX, y: mouseY });
  }
}

function drawNRE(x, y) {
  push();
  textFont('Arial', 'bold');
  textSize(30);
  stroke(0); // contorno preto
  strokeWeight(2);
  fill(rosa);
  text("NRE Pitanga", x, y);
  pop();
}