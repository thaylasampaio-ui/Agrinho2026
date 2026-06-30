var tamanho = 20;

function aumentar(){
    tamanho = tamanho + 2;
    document.body.style.fontSize = tamanho + "px";
}

function diminuir(){
    tamanho = tamanho - 2;
    document.body.style.fontSize = tamanho + "px";
}

function escuro(){
    document.body.style.backgroundColor="black";
    document.body.style.color="white";
}

function claro(){
    document.body.style.backgroundColor="white";
    document.body.style.color="black";
}

function mostrar(){

var nome = document.getElementById("nome").value;

var idade = document.getElementById("idade").value;

document.getElementById("resposta").innerHTML =
"Olá " + nome + "! Você tem " + idade + " anos.";

}