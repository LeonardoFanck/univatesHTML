// Fun��o que deixa as telas vis�veis
function MostrarTela(carregarModal) {

    let modal = document.getElementById(carregarModal);
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Fun��o que deixa as telas invis�veis
function FecharTela(fecharModal) {

    let modal = document.getElementById(fecharModal);
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Fun��o que deixa os bot�es com leve colora��o
function OnMouse(selectedButoon){
    var botao1 = document.getElementById(selectedButoon);
    botao1.style.boxShadow = '0px 0px 50px 0px lightblue';
}

// Fun��o que tira dos bot�es a leve colora��o
function OffMouse(selectedButoon){
    var botao1 = document.getElementById(selectedButoon);
    botao1.style.boxShadow = '0px 0px 0px 0px';
}