function calcular(){
    //variaveis
    let cand_1 = 0
    let cand_2 = 0
    let cand_3 = 0
    let cand_4 = 0
    let vot_nul = 0
    let vot_branco = 0
    let perc_votos_nulos = 0
    let perc_votos_branco = 0
    let total_votos = 0
    let opt

    //entrada de dados
    do{
        opt =  Number(window.prompt(`
        Digite uma opção:
        \n1 - Candidato 1
        \n2 - Candidato 2
        \n3 - Candidato 4
        \n4 - Candidato 4
        \n5 - Voto Nulo
        \n6 - Voto em Branco
        \n0 - Sair`))
        //tratamento dos dados
        switch(opt){
            case 1:
                cand_1 = cand_1 + 1
                total_votos = total_votos + 1
                break
            case 2:
                cand_2 = cand_2 + 1
                total_votos = total_votos + 1
                break
            case 3:
                cand_3 = cand_3 + 1
                total_votos = total_votos + 1
                break
            case 4:
                cand_4 = cand_4 + 1
                total_votos = total_votos + 1
                break
            case 5:
                vot_nul = vot_nul + 1
                total_votos = total_votos + 1
                break
            case 6:
                vot_branco = vot_branco + 1
                total_votos = total_votos + 1
                break
            case 0:
                alert(`Programa Encerrado!!!
                \nConfira o resultado!`)
                break
            default:
                window.alert(`Opção inválida!!!`)
        }
    }
    while(opt != 0)
    //calculo percentual
    perc_votos_nulos = (vot_nul * 100) / total_votos 
    perc_votos_branco = (vot_branco * 100) / total_votos
    //saída de dados
    document.getElementById('res').innerHTML = `
    <hr>Candidato 1 - ${cand_1} votos
    <br>Candidato 2 - ${cand_2} votos
    <br>Candidato 3 - ${cand_3} votos
    <br>Candidato 4 - ${cand_4} votos
    <br>Votos Nulos -  ${vot_nul}
    <br>Votos em Branco - ${vot_branco}
    <hr>Percentual de votos Nulo -  ${perc_votos_nulos.toFixed(2)}%
    <br>Percentual de votos Branco - ${perc_votos_branco.toFixed(2)}%`

}