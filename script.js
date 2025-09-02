let senhaCofre = "";

// Palavras e senhas
const palavras = {
  "linguagem": "4821",
  "variavel": "1597",
  "matematica": "7365",
  "hardware": "9043",
  "banco de dados": "6218"
};

// Dicas mais difíceis
const dicas = {
  "4821": [
    "A soma dos quatro números é 15.",
    "O segundo número é par e maior que 7.",
    "O último número é o primeiro primo depois de 0.",
    "O primeiro número está entre 4 e 5."
  ],
  "1597": [
    "A soma dos dígitos é 22.",
    "O primeiro número é o menor ímpar maior que 0.",
    "O segundo número é múltiplo de 5.",
    "O último é maior que 6, mas menor que 8."
  ],
  "7365": [
    "A soma dos dígitos é 21.",
    "O primeiro número é ímpar e maior que 6.",
    "O segundo número está entre 3 e 4.",
    "O último número é metade de 10."
  ],
  "9043": [
    "A soma dos quatro dígitos é 16.",
    "O primeiro número é o maior possível de um único dígito.",
    "O segundo número é zero.",
    "O último número é ímpar e menor que 5."
  ],
  "6218": [
    "A soma dos dígitos é 17.",
    "O segundo número é par e menor que 3.",
    "O último número é par e maior que 7.",
    "O primeiro número está entre 6 e 7."
  ]
};

// Verifica palavra secreta
function verificarPalavra() {
  const entrada = document.getElementById("entradaPalavra").value.trim().toLowerCase();
  if (palavras[entrada]) {
    senhaCofre = palavras[entrada];
    document.getElementById("tela-palavra").style.display = "none";
    document.getElementById("tela-manual").style.display = "flex";

    const textoInicial = "Parabéns por descobrir a palavra secreta! Agora você está diante de um cofre trancado que esconde a senha da próxima fase. Será que você é capaz de decifrar as pistas?\n\n";
    document.getElementById("dicas").innerHTML = textoInicial + dicas[senhaCofre].map(d => `<p>${d}</p>`).join("");
  } else {
    alert("Palavra incorreta!");
  }
}

// Fecha manual
function fecharManual() {
  document.getElementById("tela-manual").style.display = "none";
  document.getElementById("tela-palavra").style.display = "flex";
}

// Vai para o cofre
function irParaCofre() {
  document.getElementById("tela-manual").style.display = "none";
  document.getElementById("tela-cofre").style.display = "flex";
}

// Mostrar manual do cofre
function mostrarManualCofre() {
  document.getElementById("tela-manual").style.display = "flex";
  document.getElementById("tela-cofre").style.display = "none";
}

// Verifica senha digitada na caixa
function verificarSenha() {
  const entrada = document.getElementById("entradaSenha").value;
  const mensagem = document.getElementById("mensagem");
  const cofreImagem = document.getElementById("cofreImagem");
  const bilhete = document.getElementById("bilhete");

  if (entrada === senhaCofre) {
    mensagem.textContent = "✅ Cofre Aberto!";
    cofreImagem.src = "cofre aberto.png";
    bilhete.style.display = "block"; // mostra bilhete
  } else {
    mensagem.textContent = "❌ Senha incorreta!";
  }
}
