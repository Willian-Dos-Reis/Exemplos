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

        //crinado a var da imaegm pelo jd
        var img = document.getElementById("img")
        img.setAttribute('id','foto') //criando a tag img pelo javscrpit

        //var genero vai ser
        var genero = ''
        if(fsex[0].checked){ //se marcar o inpt 0 homene
            genero = 'homem'

            //Criando o se da idade 
            if(idade>=0 && idade <10){
                //criança
                img.setAttribute('src','menino-criança.png')
            }else if(idade<21){
                //jovem
                img.setAttribute('src','menino-joven.png')
            }else if (idade <50){
                //adutlo
                img.setAttribute('src','hoemn-adulto.jpg')
            }else{
                //idoso
            }

            
        }else if(fsex[1].checked){ //se marcar o inpt 1 mulher
            genero = 'mulher'

            //Criando o se da idade
            if(idade >=0 && idade <10){
                //crianca
            }else if (idade <20){
                //jovem
            }else if(idade <50){
                //adulto
            }else{
                //idoso
            }
        }

        //centralizar o res
        res.style.textAlign='center'

        //mude o res para oq tivr emm genero e oq tiver em idade
        res.innerHTML = `detectamos ${genero} com ${idade} anos`

        res.appendChild(img)
    
    }
        
    }
