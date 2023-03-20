// Função que deixa as telas visíveis
function MostrarTela(carregarModal) {

    let modal = document.getElementById(carregarModal);
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Função que deixa as telas invisíveis
function FecharTela(fecharModal) {

    let modal = document.getElementById(fecharModal);
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Função que deixa os botões com leve coloração
function OnMouse(selectedButoon){
    var botao1 = document.getElementById(selectedButoon);
    botao1.style.boxShadow = '0px 0px 50px 0px lightblue';
}

// Função que tira dos botões a leve coloração
function OffMouse(selectedButoon){
    var botao1 = document.getElementById(selectedButoon);
    botao1.style.boxShadow = '0px 0px 0px 0px';
}