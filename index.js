
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