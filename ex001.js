function verificar(){
    let a = 0, b = 0, c = 0, d = 0, aux
    let cont = 0
    let j = 0
    let ordem_lida = 0
    let ordem_crescente = 0
    let ordem_decrescente = 0 
    let saida 
    while(j < 5){
        a = Number(window.prompt('informe A:'))
        b = Number(window.prompt('informe B:'))
        c = Number(window.prompt('informe C:'))
        d = Number(window.prompt('informe D:'))
        ordem_lida = ordem_lida + `${a} - ${b} - ${c} - ${d}<br>`
        while(cont < 3){
            if(a > b){
                aux = a; a = b; b = aux;
            }
            if(b > c){
                aux = b; b = c; c = aux;
            }
            if(c > d){
                aux = c; c = d; d = aux;
            }
            cont += 1
        }
        ordem_crescente = ordem_crescente + `${a} - ${b} - ${c} -${d} <br>`
        ordem_decrescente = ordem_decrescente + `${d} - ${c} - ${b} - ${a}<br>`
        saida =
        `Ordem Lida:  <br>
        ${ordem_lida}<br>
        Ordem Crescente: <br>
        ${ordem_crescente}<br>
        Ordem Decrescente: <br>
        ${ordem_decrescente}<br><hr>`
        cont = 0
        j += 1
    }

    document.getElementById('res').innerHTML = saida


}