function calcular(){
    var anodado = document.getElementById("anodado")
    var data = new Date()
    var anoatual = data.getFullYear() 
    var res = document.getElementById("res")

    if (anodado.value.length == 0 || (anodado.value) > anoatual){
        window.alert("[ERRO ] Verifique se os dados estao corretos")}
         else {
            var fsex = document.getElementsByName("sexo")
            var idade = anoatual - (anodado.value)  
        }
