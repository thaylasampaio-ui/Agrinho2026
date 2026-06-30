var tamanho = 20;

function aumentar(){
    tamanho += 2;
    document.body.style.fontSize = tamanho + "px";
}

function diminuir(){
    tamanho -= 2;
    document.body.style.fontSize = tamanho + "px";
}

function escuro(){
    document.body.style.backgroundColor = "#111";
    document.body.style.color = "white";
}

function claro(){
    document.body.style.backgroundColor = "#f4f4f4";
    document.body.style.color = "#222";
}

function mostrar(){

var nome = document.getElementById("nome").value;
var idade = document.getElementById("idade").value;

document.getElementById("resposta").innerHTML =
"Olá " + nome + ", você tem " + idade + " anos.";

}