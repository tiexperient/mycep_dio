function consultaCep(){
    $(".barra-progresso").show(); //Exibe a barra de Progresso assim que o botâo é clicado
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";

    console.log(url);
    
    $.ajax({  /*Mostra que se trata de uma função ajax*/
        url: url, /*Busca instruções do site*/
        type: "GET", /*Abre no navegador*/
        success: function(response){/*Se tudo for bem...*/
            console.log(response); /*Recebe tudo*/
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#titulo_cep").html("CEP: " + response.cep);
            $(".cep").show();
            $(".barra-progresso").hide(); //Sumir com a barra de progresso ao mostrar resultados
        }
    })
}

$(function(){
    $(".cep").hide(); //Sumir com div de cep, ao atualizar a página
    $(".barra-progresso").hide(); //Sumir com a barra de progresso ao atualizar a página
});