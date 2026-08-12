function bubbleSort(vetor){
    
    let trocou

    do{
        trocou = false;

        for(let i = 0;i < vetor.length-1; i++){
            if(vetor[i] > vetor[i+1]){
                // fazendo a troca
                [vetor[i], vetor[i+1]] = [vetor[i+1], vetor[i]]
                trocou = true
            }
        }



    } while(trocou)
}

let nums = [77,44,22,33,99,55,8,0,66,11]

bubbleSort(nums)
console.log("Ordenação feita com sucesso!\n",nums)