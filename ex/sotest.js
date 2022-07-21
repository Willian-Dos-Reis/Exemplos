
if (fano.value.length == 0 || (fano.value) > ano){
    window.alert("[ERRO ] Verifique se os dados estao corretos")
} else {
    var fsex = document.getElementsByName("radsex")
    var idade = ano - (fano.value)
    
    var genero = ''                      //var genero vai ser
    if(fsex[0].checked){                 //se marcar o inpt 0 homene
        genero = 'homem'
        
        if(idade>=0 && idade <10){       //Criando o se da idade 
            img.setAttribute('src','menino-criança.png')  //criança 
        }else if(idade<21){                              //jovem  
            img.setAttribute('src','menino-joven.png')
        }else if (idade <50){                            //adutlo
            img.setAttribute('src','hoemn-adulto.jpg')
        }else{                                              //idoso 
        }
        
    }else if(fsex[1].checked)
    {              //se marcar o inpt 1 mulher
        genero = 'mulher'                  //Criando o se da idade
        if(idade >=0 && idade <10){        //crianca
            img.setAttribute('src','menina-criança.png')
        }else if (idade <20){              //joven 
            img.setAttribute('src','menina-criança.png')
        }else if(idade <50){               //adulto
            img.setAttribute('src','menina-criança.png')
        }else{                          //idoso
            img.setAttribute('src','menina-idoso.png')    
        }
        