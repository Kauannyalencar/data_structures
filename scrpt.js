const arr = [1,2,3,4,5,6,7,8,9,10];
const arr2 = [3, 2, 1, 13, 8, 5, 0, 1, 105, 79, 100, 11]
console.log("This was printed recursively");
function sorting(arr) {
    return arr.sort((a,b) => a - b);
    // A to Z
    
    // arr.sort((a,b) => a+b);
    //Z to A
    
    //random
//    return arr.sort((a,b) => Math.random() - 0.5);
    
}
console.log(sorting(arr2));


function fibonacci(n) {
    if (n < 2) {
         return n
    }else{
        return fibonacci(n-1) + fibonacci(n-2);
    }
}
for (let i = 0; i < 8; i++) {
console.log(fibonacci(i));

}