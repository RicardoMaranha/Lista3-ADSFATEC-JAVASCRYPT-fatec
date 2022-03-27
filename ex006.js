function calcular(){
    let c = 0, val = 0, tot_val = 0, val_p = 0, val_v = 0, val_1 = 0
    let resposta =  ""
    let opt = ""
    while(c < 15){
        let opt =  String(window.prompt("Digite: \n[V]-Á vista\n[P]- Á prazo").toUpperCase())
        switch (opt){
            case "V":
                val = Number(window.prompt("Digite o Valor:"))
                val_v = val_v + val
                break;
            case "P":
                val = Number(window.prompt("Digite o Valor:"))
                val_p = val_p + val
                break;
            default:
                c --
                resposta = console.log(`Opção inválida!!!\nDigite [V] ou [P] ${opt}`);     
        }
        c ++
    }
    tot_val = val_v + val_p
    val_1 = val_p / 3
    document.getElementById('res').innerHTML = 
    `Valor a Vista: R$${val_v.toFixed(2)}<br>
    Valor a prazoR$${val_p.toFixed(2)}<br>
    Primeira parcela: ${val_1.toFixed(2)}<br>
    Valor total: R$${tot_val.toFixed(2)}`


}