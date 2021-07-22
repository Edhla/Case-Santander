// Quantas pastas de dentes são vendidas por mês no Brasil?

// Dados iniciais
/* Pessoas que escovavam os dentes em 2019: 149,0 milhões
Número de pastas vendidas por mês considerando que todos os brasileiros que escovam os dentes compram uma pasta por mês: 149.000.000,00 */

/*Considerando que 149,0 milhões de pasta é o valor mínimo de pastas vendidas no Brasil em 2019. Colocamos o ponto inicial a partir do menor ponto no varejo de 2019 que foi em Abril*/
var lis; 
var listaAno;
var indiceMes;
let listaMes;
var resultado=[0];
var conclui;
const base = 149000000;

// Limitando a Lista de escolha
function meses (){
    const listaMeses = document.getElementById('meses');
     listaAno = document.getElementById('listaAno');

    if (listaAno.value == 2019){
       listaMeses.innerHTML ='<option value = "Abril"></option> <option value = "Maio"></option> <option value = "Junho"></option> <option value = "Julho"></option> </option> <option value = "Agosto"></option> <option value = "Setembro"></option><option value = "Outubro"></option><option value = "Novembro"></option><option value = "Dezembro"></option> '
       ano = 'dezenove';
    } else if(listaAno.value == 2020){
        listaMeses.innerHTML = '<option value = "Janeiro"></option> <option value = "Fevereiro"></option> <option value = "Março"></option> <option value = "Abril"></option> <option value = "Maio"></option> <option value = "Junho"></option> <option value = "Julho"></option> </option> <option value = "Agosto"></option> <option value = "Setembro"></option><option value = "Outubro"></option><option value = "Novembro"></option><option value = "Dezembro"></option> '
        ano = 'vinte'
    } else {listaMeses.innerHTML = '<option value = "Janeiro"></option> <option value = "Fevereiro"></option> <option value = "Março"></option> <option value = "Abril"></option> <option value = "Maio"></option>' 
        ano = 'vinteum'
    }
};
//Traduzindo o valor dos inputs para um variável usavél
function atribuir(){
    listaMes = document.getElementById('mes').value;
    if (ano == 'dezenove'){
        let meses = ['Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        indiceMes = meses.indexOf(listaMes);
        dezenoveF();
       
        
    }else if (ano == 'vinte'){
        let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        indiceMes = meses.indexOf(listaMes);
        vinteF();
    }else {
        let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'];
        indiceMes = meses.indexOf(listaMes);
        vinteumF();
    }
    
 
};

// Porcentagem no aumento das vendas no varejo de hipermercados segundo a Pesquisa Mensal de Comércio do IBGE.
//O índice da matriz equivale o mês da pesquisa
const dezenove = [ 0, 1.4, 0.0, 1.3, 0.2, 0.2, -0.1, 0.0, -1.2];
const vinte = [-1.2, 1.5, 14.6, -11.8, 7.1, 0.8, 0.0, -2.2, 5.7, 0.6, -0.4, -0.3];
const vinteum = [-1.6, 0.8, 3.3, -1.7, 1.0];

// Calculo do valor muda de acordo com o ano. Pois o ano 21 precisa ser somados com os demais.
function dezenoveF(){
    for(let i = 0; i <= indiceMes; i++){
        resultado.push(dezenove[i]);
    };
    conclui = resultado.reduce((estado,item) => estado + item);
        console.log(`soma ${conclui}`);
        conversor()
}
function vinteF(){
    for(let i = 0; i <= indiceMes; i++){
        resultado.push(vinte[i]);
    };
    const soma = resultado.reduce((estado,item) => estado + item);

    //Reduce do ano anterior
    let d = dezenove.reduce((estado,item) => estado + item);
    conclui= soma + d
   conversor()
}
function vinteumF(){
    for(let i = 0; i <= indiceMes; i++){
        resultado.push(vinteum[i]);
    };
    const soma = resultado.reduce((estado,item) => estado + item);

    //reduce dos dois anos anteriores
    let d = dezenove.reduce((estado,item) => estado + item);
    let v = vinte.reduce((estado,item) => estado + item);

    conclui= soma + d + v
    conversor()
}

// Calcula a porcentagem
function conversor(){
   const conversor = base + (base * (conclui/100))
    let a = ((conversor /1000000).toFixed(2)).replace('.',',');

    //Printa na tela
    const concluido = document.getElementById('concluido');
    concluido.innerText = `Foram ${a} milhões de pastas vendidas no mês de ${listaMes} no ano de ${listaAno.value}.`;
};


