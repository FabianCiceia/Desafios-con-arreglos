// Siempre hambriento

function alwaysHungry(arr) {
    let temp = 0;
    for(var i of arr){
        if(i == "comida" ){
            console.log("delicioso");
            temp = 1;
        }
    }
    if(temp == 0){
        console.log("Tengo hambre");
    }
}

alwaysHungry([3.14, "comida", "pastel", true, "comida"]);
// esto debería mostrar "delicioso, "delicioso"
alwaysHungry([4, 1, 5, 7, 2]);
// esto debería mostrar "Tengo hambre"



// Filtro paso alto
function highPass(arr, cutoff) {
    var filteredArr = [];
    for(let i of arr){
        if(i > cutoff){
            filteredArr.push(i);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // esperamos de vuelta [6, 8, 10, 9]

// Mejor que el promedio

function betterThanAverage(arr) {
    var sum = 0;
    for(let i of arr){
        sum+=i;
    }
    var count = 0
    
    for(let i of arr){
        if(i>(sum/arr.length)){
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // esperamos 4 de vuelta

// Arreglo invertido
function reverse(arr) {
    
    for(var i = 0; i < arr.length/2;i++){
        let temp;
        temp = arr[arr.length -1 -i];
        arr[arr.length -1 -i] = arr[i];
        arr[i]= temp;
    }
    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]

// Arreglo de Fibonacci
function fibonacciArray(n) {
    // [0, 1] son los valores inciales del arreglos para calcular el resto
    var fibArr = [0, 1];
    for(var i = 0; i<n-2;i++){
        fibArr.push(fibArr[i]+fibArr[i+1]);
    }
    return fibArr;
}
var result = fibonacciArray(10);
console.log(result); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
