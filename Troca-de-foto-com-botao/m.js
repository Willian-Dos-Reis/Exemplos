function carregar (){
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem") 

    //criando a var data, pegando a hora atual do pc 
    var data = new Date()
    var hora = data.getHours()

  

    // colocando se nas horas
    if (hora >= 0 && hora < 12 ){
        //mudando a img para outra foto de minha pasta
        img.src = 'fotomanha.png.jpg'
    } else if  (hora >=12 && hora <= 18 ){
        //se for de tarde
        img.src = 'fototarde.png.jpg'
    
    } else {
        //se for de noite 
        img.src = 'fotonoite.png.jpg'
    }


}
