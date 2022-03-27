function mostrar(){
    let cont = 0
    let faixa_1 = 0
    let faixa_2 = 0
    let faixa_3 = 0
    let faixa_4 = 0
    let faixa_5 = 0
    let perc_15_anos = 0
    let perc_60_mais = 0
    let resposta = document.getElementById('res')
    let n_idade = Number(window.prompt("Digite sua idade:"))
    //document.getElementById('res').innerHTML = n_idade
    while(cont < 8){
        if (n_idade <= 15){
            faixa_1 = faixa_1 + 1
        }
        else if(n_idade > 15 && n_idade <= 30){
            faixa_2 = faixa_2 + 1
        }
        else if(n_idade > 30 && n_idade <= 45){
            faixa_3 = faixa_3 + 1
        }
        else if(n_idade > 45 && n_idade <= 60){
            faixa_4 = faixa_4 + 1
        }
        else if(n_idade > 60){
            faixa_5 = faixa_5 + 1
        }
        cont += 1
        n_idade = Number(window.prompt("Digite sua idade"))
        
    
    }
    perc_15_anos = (faixa_1 * 100) / 8 //Calcular porcentagem 15 anos
    perc_60_mais = (faixa_5 * 100) / 8 //Calcular porcentagem mais de 60 anos
    resposta.innerHTML = `Até 15 anos - ${faixa_1} pessoas<br>
    16 a 30 anos - ${faixa_2} pessoas<br>
    31 a 45 anos - ${faixa_3} pessoas<br>
    46 a 60 anos - ${faixa_4} pessoas<br>
    60 anos mais - ${faixa_5} pessoas<br>`
    document.getElementById('perc_15_anos').innerHTML = 
    `Porcentual de pessoas com até 15 anos: ${perc_15_anos}%` //Mostrar percentual até 15 anos
    document.getElementById('perc_60_mais').innerHTML = 
    `Porcentual de pessoas com mais de 60 anos: ${perc_60_mais}%` //Mostrar percentual 60 anos mais

    
}