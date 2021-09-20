$(Iniciar);

function Iniciar(){
  $.ajax({
    url: 'mapa.html',
    cache: false,
    success: function(htm){
      $('#mapa').html(htm)
    }
  });
}
