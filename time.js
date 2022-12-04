function fmsa(nums1, nums2) {

    function sortNumber(a, b) {
            return a - b; 
    }
    let arr = nums1.concat(nums2).sort(sortNumber);
    console.log(arr); 
    let median = 0;  
    if(arr.length % 2 === 0) {
           median = (arr[(arr.length / 2) - 1] + arr[arr.length / 2]) / 2 ;
    } else {
            median = arr[(arr.length - 1) / 2 ]
    }

    return median 
}

console.log(fmsa([1,3], [2]))
console.log(fmsa([1,2], [3,4]))
console.log(fmsa([-2, -1], [3]))