var splash;
splash  = "99Freelas Plus";
splash += "\r\n";
splash += "--------------------------------";
splash += "\r\n";
splash += "Essa extensão foi desenvolvida por Tihh Gonçalves (www.tiago.art.br)";
splash += "\r\n";
console.info(splash);

function copyTextToClipboard(text) {
	var textArea = document.createElement("textarea");

	textArea.style.position = 'fixed';
	textArea.style.top = 0;
	textArea.style.left = 0;
	textArea.style.width = '2em';
	textArea.style.height = '2em';
	textArea.style.padding = 0;
	textArea.style.border = 'none';
	textArea.style.outline = 'none';
	textArea.style.boxShadow = 'none';
	textArea.style.background = 'transparent';
	textArea.value = text;

	document.body.appendChild(textArea);
	textArea.select();

	try {
		var successful = document.execCommand('copy');
		var msg = successful ? 'successful' : 'unsuccessful';
		console.log('Copying text command was ' + msg);
	} catch (err) {
		console.log('Oops, unable to copy');
		window.prompt("Copie para área de transferência: Ctrl+C e tecle Enter", text);
	}

	document.body.removeChild(textArea);
}

function SetaMensagem(msg){
	msg = String.replaceAll('|', "\r\n", msg);

	var nome = PegaNomeCliente();
	msg = String.replaceAll('{{NOME}}', nome, msg);


	$('#mensagem-pergunta').val(msg);
}

function SetaProposta(msg){

	msg = String.replaceAll('|', "\r\n", msg);

	var nome = PegaNomeCliente();
	msg = String.replaceAll('{{NOME}}', nome, msg);


	$('#proposta').val(msg);
}


function PegaNomeCliente(){

	var cliente_nome = $('.info-usuario-nome .name').text();
	var nomes = cliente_nome.split(' ');
	return nomes[0];

}


// esconde notificações de projetos já lidos no menu
$('.list-container li.novo-projeto-item:not(.unread)').hide();
$('.list-container li.novo-projeto-item.unread').click(function(){
	$(this).hide();
});