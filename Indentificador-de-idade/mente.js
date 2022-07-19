function verificar(){
    var data = new Date()
    var ano = data.getFullYear() 
    var fano = document.getElementById("ano")
    var res = document.getElementById("res")

    //se o ano for igual a zero ou ano dito for maior q ano atual da Erro
    if (fano.value.length == 0 || (fano.value) > ano){
        window.alert("[ERRO ] Verifique se os dados estao corretos")
    } else {
        var fsex = document.getElementsByName("radsex")
        //a var idade é igual ano atual - ano dato
        var idade = ano - (fano.value)

        //var genero vai ser
        var genero = ''
        if(fsex[0].checked){ //se marcar o inpt 0 homene
            genero = 'homem'
        }else if(fsex[1].checked){ //se marcar o inpt 1 mulher
            genero = 'mulher'
        }
        //mude o res para oq tivr emm genero e oq tiver em idade
        res.innerHTML = `detectamos ${genero} com ${idade} anos`

    
    }
        
    }
