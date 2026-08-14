let pass, comps, trocas
pass = 0, comps = 0, trocas = 0

function selectionSort(vetor, fnComp){
    for(let posSel=0; posSel<vetor.length-1;posSel++){
        pass++
        let posMenor = posSel+1
        
        for(let i=posMenor+1;i<vetor.length;i++){
            if(fnComp(vetor[posMenor], vetor[i])) posMenor=i
            comps++
        }

        comps++
        if(fnComp(vetor[posSel], vetor[posMenor])) {
            [vetor[posSel],vetor[posMenor]]=[vetor[posMenor],vetor[posSel]]
            trocas++
        }
    }
}

import { objMotoristas } from "./data/E.D.UniFacef.2026.2.CC.SI/data/motoristas-obj-desord.mjs"

selectionSort(objMotoristas, (elem1, elem2) => elem1.nome_motorista > elem2.nome_motorista)

console.log(objMotoristas)

console.log(pass, comps, trocas)
