function calcular(){
    let n1 = 1
    let j = 0
    let i = 1
    let resposta = ""
    let saida = document.getElementById('saida')
    while(j < 10){
        while (i<=10){
            resposta = resposta + `${n1} x ${i} = ${n1 * i} <br>`
            i++ 
        }
        n1 ++
        i = 0
        resposta = resposta + "<br>"
        j ++
    }

    saida.innerHTML = resposta
    
    
    
}