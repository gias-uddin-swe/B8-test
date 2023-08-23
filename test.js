function sortMaker(arr){
    const [num1,num2] = arr;
    if(num1 <= 0 || num2 <= 0){
    return "Invalid"
    }
    else if(num1 === num2){
    return "Equal"
    }
    else{
    return [Math.max(num1, num2), Math.min(num1, num2)];
    }
}
    
const inputArray = [23, 34]
const shortResult = sortMaker(inputArray);
console.log(shortResult)