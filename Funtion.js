function minimal(a, b){
    if(a < b){
        return a;
    }else if(b < a){
        return b;
    }else{
        return a;
    }
}
console.log(minimal(2, 5));

function findIndex(array, number){
    let temp = -1;
    for(let i = 0 ; i < array.length; i++){
        if(array[i]==number){
            temp = i;
        }
    }
    return temp;
}
console.log(findIndex([2, 1, 3, 6, 5], 2))

function calculate(value) {
    return value < 2 ? value : (calculate(value - 1) + calculate(value - 2));
}

console.log(calculate(4));