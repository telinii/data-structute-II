import {objMotoristas} from "./data/E.D.UniFacef.2026.2.CC.SI/data/motoristas-obj-desord.mjs"
function bubbleSort(vetor, fnComp){
    pass = 0, comps = 0, trocas = 0
    let trocou
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

bubbleSort(objMotoristas, (elem1, elem2) => elem1.nome_motorista > elem2.nome_motorista)

console.log(objMotoristas)
console.log(pass, comp, trocas)