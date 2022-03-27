function calcular(){
    let c = 0
    let cor_dos_olhos = ''
    let cor_dos_cabelos = ''
    let idade = 0
    let peso = 0
    let altura = 0
    let resposta = ""
    let idade_50_mais = 0
    let idade_pessoas_pequenas = 0
    let pessoas_pequenas = 0
    let m_pessoas_pequenas = 0
    let q_olhos_azuis = 0
    let perc_olhos_azuis = 0
    let ruivas_s_azul = 0

    while(c < 6){
        idade = Number(prompt("Digite a idade:"))
        peso =  Number(prompt('Digite o peso:'))
        if (idade > 50 && peso < 60){
            idade_50_mais = idade_50_mais + 1
        }
        altura =  Number(prompt('Digite a altura:'))
        if (altura < 1.5){
            pessoas_pequenas = pessoas_pequenas + 1
            idade_pessoas_pequenas = idade_pessoas_pequenas + idade
        }
        cor_dos_olhos = String(prompt(`
        Digite a cor dos Olhos:\n
        [A]Azul, [P]Preto, [V]Verde, [C]Castanho:`).toUpperCase())
        cor_dos_cabelos =  String(prompt(`
        Digite a cor dos Cabelos:\n
        [P]Pretp, [C]Castanho, [L]Louro, [R]Ruivo`).toUpperCase())
        switch (cor_dos_olhos){
            case "A":
                q_olhos_azuis = q_olhos_azuis + 1
                break
            case "P":
                break
            case "V":
                break
            case "C":
                break
            default:
                c --
                resposta = console.log(`Opção inválida!!!${cor_dos_olhos}`)

        }
        switch (cor_dos_cabelos){
            case "P":
                break
            case "C":
                break
            case "L":
                break
            case "R":
                if(cor_dos_olhos != "A"){
                    ruivas_s_azul = ruivas_s_azul + 1
                }
                break
            default:
                c --
                resposta = console.log(`Opção inválida!!!${cor_dos_cabelos}`)
            }
            c ++
        }
        perc_olhos_azuis = q_olhos_azuis * 100 / 6
        m_pessoas_pequenas = idade_pessoas_pequenas / pessoas_pequenas
        document.getElementById("res").innerText = `
        Quantidades de Pessoas com 50 anos mais e
        \ncom peso inferior a 60 kg: ${idade_50_mais}\n
        Media das idades com altura inferior a 1.5: ${m_pessoas_pequenas}\n
        Percentual pessoas com olhos azuis: ${perc_olhos_azuis}%\n
        Pessoas ruivas sem olhos azuis: ${ruivas_s_azul}`



}