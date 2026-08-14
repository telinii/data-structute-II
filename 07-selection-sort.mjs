let pass, comps, trocas

function selectionSort(vetor){
    for(let posSel=0; posSel<vetor.length-1;posSel++){

        let posMenor = posSel+1
        
        for(let i=posMenor+1;i<vetor.length;i++){
            if(vetor[posMenor]>vetor[i]) posMenor=i
            comps++
        }

        comps++
        if(vetor[posSel]>vetor[posMenor]) {
            [vetor[posSel],vetor[posMenor]]=[vetor[posMenor],vetor[posSel]]
            trocas++
        }
    }
}

// let nums = [77,44,22,33,99,55,88,0,66,1]

// selectionSort(nums)
// console.log(nums)

import { nomes } from "./data/E.D.UniFacef.2026.2.CC.SI/data/nomes-desord.mjs"

selectionSort(nomes)
console.log(nomes)

console.log(pass, comps, trocas)