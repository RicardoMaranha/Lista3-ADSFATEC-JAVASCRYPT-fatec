function mostrar(){
    let v_ing = 5
    let q_ing = 120
    let c = 0
    let resposta = ''
    let lucro = 0
    let despesa = 200
    let maior_lucro = 0
    while(c < 9){
        lucro = (v_ing * q_ing) - 200
        if(lucro > maior_lucro){
            maior_lucro = lucro
        }
        resposta = resposta +
        `<tr><td>R$ ${v_ing.toFixed(2)}</td><td>${q_ing}</td><td>R$ ${despesa.toFixed(2)}</td><td>${lucro}</td></tr>`
        v_ing = v_ing - 0.5
        q_ing = q_ing + 26
        c += 1
    }
    document.getElementById('res').innerHTML = resposta
    document.getElementById('saida').innerHTML = `Maior Lucro - R$${maior_lucro.toFixed(2)} `
}