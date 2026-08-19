function mergeSort(vetor){
    if(vetor.length<2)return vetor

    //meio do vetor
    let meio=Math.floor(vetor.length / 2)

    // pega da pos 0 até o meio
    let vetEsquerdo = vetor.slice(0,meio)
    // pega do meio até o final
    let vetDireito= vetor.slice(meio)

    //chamadas recursivas ao mergeSort
    vetEsquerdo = mergeSort(vetEsquerdo)
    vetDireito = mergeSort(vetDireito)

    //mesclagem ordenada de vetEsquero com vetDireito
    let posEsquerda = 0, posDireita = 0, vetResultado = []

    while(posEsquerda<vetEsquerdo.length && posDireita<vetDireito.length){
        if(vetEsquerdo[posEsquerda]<vetDireito[posDireita]){
            vetResultado.push(vetEsquerdo[posEsquerda])
            posEsquerda++
        } else{
            vetResultado.push(vetDireito[posDireita])
            posDireita++
        }
    } 
}

let nums = [77,44,22,333,99,55,0,66,11]