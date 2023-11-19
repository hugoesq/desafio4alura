function adicionarFilme() {
  var filmeFavorito = document.getElementById('filme').value
  var trailerFilme = document.getElementById ('trailer').value
  document.getElementById('filme').value = ''
  document.getElementById('trailer').value = ''
  
 
              var elementoListaFilmes = document.getElementById('listaFilmes')
            elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML +  '<img src=' + filmeFavorito + ' onclick="window.open(\'' + trailerFilme + '\')">';
}

 
function isValidImageUrl(url) {
  var extensoesValidas = ['.jpg', '.png', '.gif'];
  var extensao = url.substring(url.lastIndexOf('.'));
  return extensoesValidas.includes(extensao);

  
  
 function isValidYoutubeUrl(url) {
   var videoId= ''
 }

  if(url.includes('youtube.com')) {
    var urlParams = new URLSearchParams(new URL(url).search);
    videoId = urlParams.get('v');
  } else if (url.includes('youtu.be')) {
    videoId = url.split('/').pop();
  }
return videoId;
}
  


     
