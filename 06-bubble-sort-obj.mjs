let pass, comps, trocas
pass = 0, comps = 0, trocas = 0
let fnComp

import {objMotoristas} from "./data/E.D.UniFacef.2026.2.CC.SI/data/motoristas-obj-desord.mjs"
function bubbleSort(vetor){
    
    
    let trocas
    do{
        pass++
        trocou = false;

        for(let i = 0;i < vetor.length - 1;i++){
            comps++
            if(fnComp(vetor[i], vetor[i+1])){
                [vetor[i], vetor[i+1]] = [vetor[i+1], vetor[i]];
                trocou = true;
                trocas++
            }
        }
    } while(trocou)
}

import { nomes } from "./data/E.D.UniFacef.2026.2.CC.SI/data/nomes-desord.mjs"
// bubbleSort(objMotoristas, (elem1, elem2) => elem1.nome_motorista > elem2.nome_motorista)
bubbleSort(nomes)
console.log(nomes)

console.log(pass, comps, trocas)
// console.log(objMotoristas)
