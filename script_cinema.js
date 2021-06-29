function comprar_ingresso(){

    var msg = document.getElementById("div_msg");
    var posicao = document.getElementById("fil_polt").value;
    var filme = document.getElementById("lista_filme").value;
    var horario = document.getElementById("lista_horario").value;
    var ingresso = document.getElementById("lista_ingresso").value;
 
    if(posicao.value == ""){
      
      alert("Preencha os campos corretamente");
    
    } else{
      
      msg.innerHTML = `CONFIRMAÇÃO DE INGRESSO - CINECEC<br><br>
      ----------------------------------------------------------------------------<br>
      Filme: ${filme} às ${horario} <br>
      Sua poltrona é: ${posicao} <br>
      Tipo de Ingresso: ${ingresso} <br><br>
      Se for utilizar a meia-entrada, apresente carteirinha da instituição.<br><br>
      Tenha um bom filme, agradeçemos sua preferência!<br>
      ----------------------------------------------------------------------------`
      
    }
    
}