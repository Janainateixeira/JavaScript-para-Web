//reproduzir o som que está dentro da tag áudio:
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
//referencia constante(lista que não muda:const, lista que muda, variavel: let):
const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];   
    const idAudio = `#som_${instrumento}`; //template string

    //jana e linda
 
    tecla.onclick = function () {
        tocaSom(idAudio);
    };

    tecla.onkeydown = function (evento) {

        console.log(evento)

        if('Espaço'){
            tecla.classList.add('ativa');  
        }        
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');

    }
}
//aula Condições no código 6:17