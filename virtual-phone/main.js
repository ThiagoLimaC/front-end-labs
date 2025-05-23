const teclas = document.querySelectorAll("input[type=button]");
const display = document.querySelector("input[type=tel]");
const botaoLimpar = document.querySelector(".icon");

function valorTeclaToDisplay(i) {
  display.value += teclas[i].value;
}

for (let i = 0; i < teclas.length; i++) {
  teclas[i].onclick = () => {
    valorTeclaToDisplay(i);
  };
}

botaoLimpar.onclick = () => {
  const opcao = confirm("Deseja mesmo limpar?");
  if (opcao) {
    display.value = "";
  }
};
