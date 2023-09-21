const show = document.querySelector("#show");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const botao = document.querySelector("button");

const phrases = [
  "Espere pelo mais sábio dos conselhos: o tempo.",
  "Todas as coisas são difíceis antes de se tornarem fáceis.",
  "Espere pelo mais sábio dos conselhos: o tempo.",
  "Vencer é 90 por cento suor e 10 por cento de engenho.",
  "O amor está sempre mais próximo do que você imagina.",
  "Você é do tamanho do seu sonho.",
  "Não compense na ira o que lhe falta na razão.",
  "Realize o óbvio, pense no improvável e conquiste o impossível.",
  "O nosso primeiro e último amor é… o amor-próprio.",
  "Deixe de lado as preocupações e seja feliz.",
  "A vontade das pessoas é a melhor das leis.",
  "Nós somos o que pensamos.",
  "A maior barreira para o sucesso é o medo do fracasso.",
];

const toggleSreen = () => {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
};

const replacePhrases = () => {
  let selectedPhrases = Math.floor(Math.random() * 12 + 1);
  return selectedPhrases;
};

const reload = () => {
  document.location.reload(true);
};

document.getElementById("replace").innerHTML = phrases[replacePhrases()];

show.addEventListener("click", toggleSreen);
botao.addEventListener("click", reload);
