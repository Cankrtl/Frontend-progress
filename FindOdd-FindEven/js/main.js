function myFilterFunction(Array,request){
    const outArr = [];
    request=request.toLowerCase();
    for(let i = 0;i<Array.length;i++){
        if(request==="filterodd"){
            if(Array[i]%2===1){
                outArr.push(Array[i])
            }
        }
        else if(request==="filtereven"){
            if(Array[i]%2===0){
                outArr.push(Array[i])
            }
        }
        else{
            console.log("you made a typo !!!!");
        }
    }
    return outArr;
}

const testArray = [1,2,3,4,5,6,7,8,9,10];
const result = myFilterFunction(testArray,"filterOdd");
console.log(result);


