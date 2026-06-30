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

/* volta para o estilo original do CSS */
function claro(){
    document.body.style.backgroundColor = "#f4f4f4";
    document.body.style.color = "#222";
}