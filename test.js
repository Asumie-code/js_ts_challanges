// const A = [1,1,1,1,0];



// function solution (A) {
//     let count = 0;
//     for (let index in A) {
//         if(index == A.length - 1) {
            
//         } else {
//             if(A[index] == A[parseInt(index) + 1] && parseInt(index) % 2 === 0) {
//                 count += 1; 
                
//             } 
//         }


//     }

//     return count;
    
// }


// console.log(solution(A))

// console.log('object')


const input = [34, 23, 1, 24, 75, 33,54, 8]; 
const k = 60; 

function maxS(input, k) {
    let currentMaxSum = 0; 
    for (let i = 0; i < input.length; i++) {
        for(let j = i + 1; j < input.length; j++) {
            let sum = input[i] + input[j]; 
            if(currentMaxSum < sum && sum < k ) {
                currentMaxSum = sum; 
            }
        }
        
    }
    return currentMaxSum; 
}


// console.log(maxS(input, k));



//#region 

function findMissing(arr) {
    let result = []; 
    for (let index in arr) {
        if(parseInt(index ) + 1 != arr[index]) {
            result.push(arr[index]); 
            result.push(parseInt(index ) + 1 ); 
        }
    }

    return result 
}


console.log(findMissing([1,2,3,4,3]))
console.log(findMissing([1,2,2]))


//#endregion



