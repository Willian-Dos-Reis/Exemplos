function carregar (){
    var msg = document.getElementById("msg")
    var img = document.getElementById("img") 

    //criando a var data, pegando a hr atual
    var data = new Date()
    var hora = data.getHours()

    var hora = 20;

    // mundando oq estiver dente de msg para isso 
    msg.innerHTML = 'agora sao '  

    // colocando se nas hrs
    if (hora >= 0 && hora < 12 ){
        //mudando a img para outra foto
        img.src = 'fotomanha.png'
    } else if  (hora >=12 && hora <= 18 ){
        img.src = 'fototarde.png'
    
    } else {
        img.src = 'fotonoite.png'
    }


}
