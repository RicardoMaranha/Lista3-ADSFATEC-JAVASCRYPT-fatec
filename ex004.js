function calcular(){
    let n1 = Number(document.getElementById('n1').value)
    let i = 1
    let resposta = ""
    let saida = document.getElementById('saida')
    while (i<=10){
        resposta = resposta + `${n1} x ${i} = ${n1 * i} <br>`
        i++ 
    }

    saida.innerHTML = resposta
    
    
    
}