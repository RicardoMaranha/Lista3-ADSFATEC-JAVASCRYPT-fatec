function calcular(){
    let c = 1, val = 0, tot_val = 0, val_p = 0, val_v = 0, val_1 = 0, q_avista = 0, q_prazo = 0 
    let resposta =  ""
    let opt = ""

    while(c <= 5){
        opt =  String(window.prompt("Digite: \n[V]- à vista\n[P]- à prazo").toUpperCase())
        val = Number(window.prompt("Digite o Valor:"))
        switch (opt){
            case "V":
                val_v = val_v + val
                q_avista ++
                break;
            case "P":
                val_p = val_p + val
                q_prazo ++
                break;
            default:
                c --
                resposta = window.alert(`Opção inválida!!!\nDigite [V] ou [P] ${opt}`);     
        }
        c ++
    }
    tot_val = val_v + val_p
    val_1 = val_p / 3
    document.getElementById('res').innerHTML = 
    `Valor a Vista: R$${val_v.toFixed(2)} - Quantidade ${q_avista}<br>
    Valor a prazo: R$${val_p.toFixed(2)} - Quantidade ${q_prazo}<br>
    Primeira parcela: ${val_1.toFixed(2)}<br>
    Valor total: R$${tot_val.toFixed(2)}`


}