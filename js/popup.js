$(document).ready(function(){

    $('#btn_pergunta').click(function(){

        var texto;
        texto  = 'Olá {{NOME}}, tudo bem?';
        texto += '||';
        texto += 'Me interesso em fazer uma proposta pra você. Mas antes, gostaria de conhecer mais seu projeto.';
        texto += '||';
        texto += 'Desde já agradeço sua atenção e resposta.';
        texto += '||';
        texto += 'Abraços,';
        texto += '|';
        texto += 'TIHH GONÇALVES';
        texto += '|';
        texto += 'tiago@tiago.art.br';
        texto += '|';
        texto += '(47) 9 9650-6687 (WhatsApp e Telegram)';

        //copyTextToClipboard(texto);
        btn_status('Escrito!', '#btn_pergunta');

        chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
            chrome.tabs.executeScript(tabs[0].id, {code: "SetaMensagem('" + texto + "');" });
        });

    });

    $('#btn_proposta').click(function(){

        var texto;
        texto = 'Bacana o seu projeto {{NOME}}. Será um prazer trabalhar pra você.';
        texto += '||';
        texto += 'Aproveito pra convidar você a conhecer um pouco do meu trabalho: www.tiago.art.br.';
        texto += '||';
        texto += 'Fico no aguardo de uma resposta sua.';
        texto += '||';
        texto += 'Observação: Propostas acima de R$1.000, somente [por fora do 99freelas] com 50% de entrada (cobrado no boleto bonitinho) e 50% depois de tudo pronto e aprovado.';
        texto += '||';	
        texto += 'Abraços,';
        texto += '|';
        texto += 'TIHH GONÇALVES';
        texto += '|';
        texto += 'tiago@tiago.art.br';
        texto += '|';
        texto += '(47) 9 9650-6687 (WhatsApp e Telegram)';

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

