//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2 ;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variaveis da raquete
let xRaquete = 3;
let yRaquete = 140;
let wRaquete = 8;
let hRaquete = 120;

//variaveis raquete oponente
let xRaqueteOponente = 589;
let yRaqueteOponente = 140;
let wRaqueteOponente = 8;
let hRaqueteOponente = 120;
let velocidadeYoponente = 0 ;

let coliciu = false;

//placar do jogo
let meusPontos = 0;
let pontosOponente = 0;

//sons do jogo - para adicionar sons 
//let raquete;
//let ponto;
//let trilha;
//function preload(){
//raquete = loadSound();
//ponto = loadSound();
//trilha = loadSound();


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete();
  movimentoMinhaRaquete();
  verificaColisaoRaquete();
  colisaoMinhaRaqueteBliblioteca();
  mostraRaqueteOponente();
  movimentaRaqueteOponente();
  colisaoRaqueteOponenteBliblioteca();
  incluiPlacar();
  marcaPonto();
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
  if (xBolinha + raio> width ||
     xBolinha - raio< 0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio> height ||
     yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(){
  rect(xRaquete, yRaquete, wRaquete, hRaquete);
}

function movimentoMinhaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10
  }
}

function verificaColisaoRaquete(){
    if (xBolinha - raio < xRaquete + wRaquete && yBolinha - raio < yRaquete + hRaquete && yBolinha + raio > yRaquete){
        velocidadeXBolinha *= -1;
      
    }
}

function colisaoMinhaRaqueteBliblioteca(){
  colidiu = collideRectCircle(xRaquete, yRaquete, wRaquete, hRaquete, xBolinha, yBolinha, raio);
  if(colidiu){
    velocidadeXBolinha *= -1;
    
  }
}

function mostraRaqueteOponente(){
  rect(xRaqueteOponente, yRaqueteOponente, wRaqueteOponente, hRaqueteOponente);
}

function movimentaRaqueteOponente(){
  velocidadeYoponente = yBolinha - yRaqueteOponente - hRaqueteOponente /2-30;
  yRaqueteOponente += velocidadeYoponente
}

function colisaoRaqueteOponenteBliblioteca(){
  colidiu = collideRectCircle(xRaqueteOponente, yRaqueteOponente, wRaqueteOponente, hRaqueteOponente, xBolinha, yBolinha, raio);
  if(colidiu){
    velocidadeXBolinha *= -1;
  }
}

function incluiPlacar(){
  stroke(255);
    textAlign(CENTER);
    textSize(16);
    fill(color(255, 140, 0));
    rect(200, 10, 40, 20);
    fill(255);
    text(meusPontos, 220, 26);
    fill(color(250, 140, 0));
    rect(360, 10, 40, 20);
    fill(255);
    text(pontosOponente, 380, 26);
  
}

function marcaPonto(){
  if(xBolinha > 590){
    meusPontos += 1;
  }
  if(xBolinha < 10){
    pontosOponente += 1;
  }
}





