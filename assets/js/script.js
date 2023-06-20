function exibirResultado() {
  var resposta = document.querySelector('input[name="resposta"]:checked').value;
  var resultado = document.getElementById('resultado');

  if (resposta === 'historico') {
    resultado.innerHTML = 'Lugar recomendado: Memorial do Imigrante Italo Polonesa';
  } else if (resposta === 'gastronomico') {
    resultado.innerHTML = 'Lugar recomendado: Pasárgada Restaurante Rural';
  } else if (resposta === 'religioso') {
    resultado.innerHTML = 'Lugar recomendado: Paróquia Senhor Bom Jesus';
  }
}