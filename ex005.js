function calcular(){
    let n1 = 1
    let resposta = ""
    let saida = document.getElementById('saida')
    for(let j=1; j <= 10; j++){
        for (let i=1; i<=10; i++){
            resposta = resposta + `${n1} x ${i} = ${n1 * i} <br/>`
        }
        n1 ++      
        resposta = `${resposta}<hr/>`
        
    }

    saida.innerHTML = resposta
    
    
    
}