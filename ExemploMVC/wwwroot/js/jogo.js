
var pontosJogadores = {
    placar1: [],
    placar2: [],
    winner: 0
}

parar2();

function valorAleatorio(jogador) {
    var jogadorAtual = jogador;

    min = Math.ceil(1);
    max = Math.floor(13);

    var aleatorio = Math.floor(Math.random() * (max - min)) + min;

    switch (jogadorAtual) {
        case 1:
            pontosJogador1(aleatorio);
            break;

        case 2:
            pontosJogador2(aleatorio);
            break;
    }

    return aleatorio;
}

function pontosJogador1(valor) {
    pontosJogadores.placar1.push(valor > 9 ? 10 : valor);

    let totalJogador1 = 0;
    pontosJogadores.placar1.forEach(el => totalJogador1 += el);

    if ((totalJogador1 < 21 && (pontosJogadores.placar1[pontosJogadores.placar1.length - 1] === 10 && valor === 1)) || totalJogador1 === 21) {
        placarJogadores(1, totalJogador1 + " GANHOU!!!");
        youWon();
        parar1();
        showsWinner(1);
        return;
    }

    if (totalJogador1 > 21) {
        placarJogadores(1, totalJogador1 + " PERDEU!!!");
        parar1();
        parar2();
        youLoose();
        showsLoser(1);
        return;
    }

    placarJogadores(1, totalJogador1);
}

function pontosJogador2(valor) {
    pontosJogadores.placar2.push(valor > 9 ? 10 : valor);

    let totalJogador2 = 0;
    pontosJogadores.placar2.forEach(el => totalJogador2 += el);

    if ((totalJogador2 < 21 && (pontosJogadores.placar2[pontosJogadores.placar2.length - 1] === 10 && valor === 1)) || totalJogador2 === 21) {
        placarJogadores(2, totalJogador2 + " GANHOU!!!");
        youWon();
        parar2();
        showsWinner(2);
        return;
    }

    if (totalJogador2 > 21) {
        placarJogadores(2, totalJogador2 + " PERDEU!!!");
        parar1();
        parar2();
        youLoose();
        showsLoser(2);
        return;
    }

    placarJogadores(2, totalJogador2);
}

function youWon() {
    setTimeout(function () {
        alert("BLACK JACK!!!");
    }, 1000);
}

function youLoose() {
    setTimeout(function () {
        alert("PONTUAÇAO MÁXIMA PERMITIDA: 21 PONTOS!");
    }, 1000);
}

function placarJogadores(jogador, total) {
    let placarJogadorAtual = document.getElementById(jogador === 1 ? 'jogador1pontos' : 'jogador2pontos');
    placarJogadorAtual.innerHTML = total;
}

function showsWinner(winner) {
    setTimeout(function () {
        alert("O Jogador " + winner + " ganhou!!!");
    }, 1000);
}

function showsLoser(loser) {
    setTimeout(function () {
        alert("O Jogador " + loser + " perdeu!!!");
    }, 1000);
}


function jogador1() {
    var cartas1 = document.getElementById("cartas1");
    $(cartas1).attr("src", '/images/' + valorAleatorio(1) + '.png'); 
}

function jogador2() {
    var cartas2 = document.getElementById("cartas2");
    $(cartas2).attr("src", '/images/' + valorAleatorio(2) + '.png');
}

function parar1() {
    var btn_jogador1 = document.getElementById("btn_jogador_1");
    var btn_jogador2 = document.getElementById("btn_jogador_2");
    var btn_parar1 = document.getElementById("btn_parar_1");
    var btn_parar2 = document.getElementById("btn_parar_2");

    $(btn_jogador1).attr('disabled', 'disabled');
    $(btn_parar1).attr('disabled', 'disabled');

    $(btn_jogador2).removeAttr('disabled');
    $(btn_parar2).removeAttr('disabled');
}

function parar2() {
    var btn_jogador2 = document.getElementById("btn_jogador_2");
    var btn_parar2 = document.getElementById("btn_parar_2");

    $(btn_jogador2).attr('disabled', 'disabled');
    $(btn_parar2).attr('disabled', 'disabled');

    compareResults();
}

function compareResults() {
    var placarJogador1 = document.getElementById('jogador1pontos');
    var placarJogador2 = document.getElementById('jogador2pontos');

    var totalJogador1 = parseInt(placarJogador1.innerHTML);
    var totalJogador2 = parseInt(placarJogador2.innerHTML);

    if (totalJogador1 === 0 && totalJogador2 === 0) {
        return;
    }

    if ((totalJogador1 > totalJogador2) && totalJogador1 <= 21) {
        placarJogador1.innerHTML += " GANHOU!!!"
        showsWinner(1);
        return;
    }

    if ((totalJogador2 > totalJogador1) && totalJogador2 <= 21) {
        placarJogador2.innerHTML += " GANHOU!!!"
        showsWinner(2);
        return;
    }

    if (totalJogador1 === totalJogador2) {
        placarJogador1.innerHTML = "EMPATE!!!";
        placarJogador2.innerHTML = "EMPATE!!!";
        return;
    }
}

function reiniciar() {
    window.location.reload();
}
