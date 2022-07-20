function calcular(){
    var anodado = document.getElementById("anodado")
    var data = new Date()
    var anoatual = data.getFullYear() 

    if (anodado.value.length == 0 || (anodado.value) > anoatual){
        window.alert("[ERRO ] Verifique se os dados estao corretos")}
}