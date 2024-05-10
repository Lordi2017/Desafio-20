/*Variáveis com nomes do candidatos inicializadas em 0 para armazenar a contagem de votos*/
var fulano = 0;
var sicrano = 0;
var beltrano = 0;
var zezinho = 0;
var nuloBranco = 0;
var continuarVoto = true;

/*Enquanto a variável "continuarVoto" for verdadeira. O loop estará ativo.*/
while (continuarVoto) {  
  let voto = prompt("Escolha seu voto:\n\n1 - Fulano\n2 - Sicrano\n3 - Beltrano\n4 - Zezinho\n5 - Nulo/Branco\n0 - Sair da votação");

  switch (parseInt(voto)) { /*"parseInt", converte o valor da variável voto que é texto para um número inteiro.*/
    case 1:
      fulano++;
      break;
    case 2:
      sicrano++;
      break;
    case 3:
      beltrano++;
      break;
    case 4:
      zezinho++;
      break;
    case 5:
      nuloBranco++;
      break;
    case 0: /*Quando o usuário digitar "0", a variavel "continuarVoto" deixará de ser "true" e encerrará o loop*/ 
      continuarVoto = false;
      break;
    default:
      alert("Opção inválida. Tente novamente.");
  }
}

alert(`Resultados da eleição:
Candidato 1: ${fulano} votos
Candidato 2: ${sicrano} votos
Candidato 3: ${beltrano} votos
Candidato 4: ${zezinho} votos
Nulos/Brancos: ${nuloBranco} votos`);

