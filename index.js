
console.log(isPrime(2));
console.log(isPrime(5));
console.log(isPrime(4));
console.log(isPrime(6));


function isPrime(num){
    if(num <= 1)
        return false;
    if(num==2)
        return true;
    for(let i=2;i<= Math.sqrt(num);i++){
        if(num%i === 0){
            return false;
        }
    }
    return true;
}

console.log(evenOdd(6));
console.log(evenOdd(7));
console.log(evenOdd(13));
console.log(evenOdd(1));

function evenOdd(num){
    if(num % 2 == 0){
        return true;
    }
    else
    return false;
}