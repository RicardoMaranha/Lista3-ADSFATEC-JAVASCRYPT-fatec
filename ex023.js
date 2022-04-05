function calcular(){
    let opcao
    let sal = 0
    let novo_sal = 0
    let resposta = ""
    let ferias = 0
    let meses =  0
    let sal_13 = 0

    //"do" teste no final (executa ao menos uma vez)
    do{
        opcao = Number(prompt(
            `Didite uma opção:
            \n1. Novo salário
            \n2. Férias
            \n3. Décimo terceiro
            \n4. Sair`))
        switch(opcao){
            case 1: 
                sal = Number(prompt("Digite o valor do salário:"))
                if(sal <= 210 ){
                    novo_sal = sal + (sal * 0.15)

                }
                else if(sal > 210 && sal <= 600){
                    novo_sal = sal + (sal * 0.10) 
                }
                else{
                    novo_sal = sal + (sal * 0.05)
                }
                resposta = window.alert(
                `Salário Atual: R$${sal.toFixed(2)}
                \nNovo Salário: R$${novo_sal.toFixed(2)}
                `)
                break
            case 2: 
                sal = Number(prompt('Digite o valor do salário:'))
                ferias  =  sal + (sal / 3)
                resposta = window.alert(`
                Salário: R$${sal.toFixed(2)}
                \nFerias: R$${ferias.toFixed(2)}
                `)
                break
            case 3: 
                sal =  Number(prompt('Digite o valor do salário:'))
                do{
                    meses = Number(prompt('Digite numero de meses trabalhado:\n [de 0 a 12]'))
                }
                
                while(meses < 0 || meses > 12)
                sal_13 = (sal * meses) / 12
                resposta =  window.alert(`
                Decimo terceiro: R$${sal_13.toFixed(2)}`)
                break

            case 4: alert('Programa encerrado!')
                break
            default: alert('Opção inválida')
        }
    }
    while (opcao != 4)
}