function calcular(){
    let c = 0
    let peso = 0
    let idade = 0
    let q_20_10 = 0
    let m_altura_20_10
    let idade_50_mais = 0
    let altura  = 0
    let altura_20_10 = 0
    let p_40_menos = 0
    let perc_40_menos = 0
    
    while(c < 5){
        idade = Number(window.prompt("Digite a idade:"))
        peso = Number(window.prompt("Digite o peso:"))
        altura  = Number(window.prompt("Digite a altura:"))
        if(idade > 50){
            idade_50_mais = idade_50_mais + 1
        }
        else if(idade >= 10 && idade <= 20){
            q_20_10 = q_20_10 + 1
            altura_20_10 = altura_20_10 + altura
        }
        if(peso < 40){
            p_40_menos =  p_40_menos + 1
        }
        c ++
    }
    m_altura_20_10 = altura_20_10 / q_20_10
    perc_40_menos = (p_40_menos * 100) / 5
    document.getElementById('res').innerHTML = 
    `Pessoas com mais de 50 anos: ${idade_50_mais}<br>
    Média de Altura pessoas de 10 a 20 anos: ${m_altura_20_10.toFixed(2)}<br>
    Percentual de pessoas com menos de 40 kg: ${perc_40_menos}%<br>`
}   