var tamanho = 20;

function aumentarFonte(){

    tamanho = tamanho + 2;

    document.body.style.fontSize = tamanho + "px";

}

function diminuirFonte(){

    tamanho = tamanho - 2;

    document.body.style.fontSize = tamanho + "px";

}

function modoEscuro(){

    document.body.style.backgroundColor = "black";

    document.body.style.color = "white";

}

function modoClaro(){

    document.body.style.backgroundColor = "white";

    document.body.style.color = "black";

}

function mostrar(){

    var nome = document.getElementById("nome").value;

    var idade = document.getElementById("idade").value;

    document.getElementById("resposta").innerHTML =
    "Olá " + nome + "! Você tem " + idade + " anos.";

}