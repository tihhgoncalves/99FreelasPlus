$(document).ready(function(){

    $('#btn_pergunta').click(function(){

        var texto;
        texto  = 'Olá {{NOME}}, tudo bem?';
        texto += '||';
        texto += 'Me interesso em fazer uma proposta pra você. Mas antes, gostaria de tirar algumas dúvidas:';
        texto += '||';
        texto += '[PERGUNTAS]';
        texto += '||';
        texto += 'Desde já agradeço sua atenção e resposta.';
        texto += '||';
        texto += 'Abraços.';
        texto += '|';
        texto += 'TIHH GONÇALVES';
        texto += '|';
        texto += 'tiago@tiago.art.br';
        texto += '|';
        texto += '(47) 9 9650-6687 (Whats App e Telegram)';

        //copyTextToClipboard(texto);
        btn_status('Escrito!', '#btn_pergunta');

        chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
            chrome.tabs.executeScript(tabs[0].id, {code: "SetaMensagem('" + texto + "');" });
        });

    });

    $('#btn_proposta').click(function(){

        var texto;
        texto = 'Bacana seu projeto {{NOME}}. Será um prazer trabalhar pra você.';
        texto += '||';
        texto += 'Aproveito pra convidar você a conhecer um pouco do meu trabalho: www.tiago.art.br.';
        texto += '||';
        texto += 'Fico no aguardo de uma resposta sua.';
        texto += '||';
        texto += 'Abraços.';
        texto += '|';
        texto += 'TIHH GONÇALVES';
        texto += '|';
        texto += 'tiago@tiago.art.br';
        texto += '|';
        texto += '(47) 9 9650-6687 (Whats App e Telegram)';

        //copyTextToClipboard(texto);
        btn_status('Escrito!', '#btn_proposta');

        chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
            chrome.tabs.executeScript(tabs[0].id, {code: "SetaProposta('" + texto + "');" });

        });


    });

    isPaginaProposta();
    isPaginaMensagem();

});


function isPaginaProposta(){

    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {

        var url = tabs[0].url;

        var padrao = 'https://www.99freelas.com.br/project/bid/';

        if(url.substr(0,padrao.length) == padrao) {
            $('section#proposta').show();
        } else {
            $('section#proposta').hide();
        }
    });

}
function isPaginaMensagem(){

    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {

        var url = tabs[0].url;

        var padrao = 'https://www.99freelas.com.br/project/message/';

        if(url.substr(0,padrao.length) == padrao) {
            $('section#mensagem').show();
        } else {
            $('section#mensagem').hide();
        }
    });

}

function btn_status(text, id){
    var atual = $(id).text();
    $(id).text(text);

    setTimeout(function(){ $(id).text(atual); }, 500);
}

