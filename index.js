"use strict";


// function to generate random number

function random(min, max) {

        let num = Math.floor(Math.random() * (max - min)) + min;
        return num;
}

//#region  Factorial

function factorial(x) {
        return (x === 0) ? 1 : x * factorial(x - 1);
}

//#endregion


//#region Long word

function longWord(str) {

        let regex = /[^\w\s]/g;
        let words = str.split(regex).join('').split(' ');

        let wordSize = [];
        for (let value of words) {
                wordSize.push(value.length);
        }

        let WordIndex = wordSize.indexOf(Math.max(...wordSize));


        return words[WordIndex];

}

//#endregion


//#region  Revers String


function reverString(str) {
        let revStr = [];
        let i = str.length - 1;
        for (let value of str) {
                revStr[i] = value;
                i--;
        }
        return revStr.join('');
}

//#endregion


//#region  Change Letters

function letterChange(str) {

        let regex = /[a-zA-Z]+/g;
        let shiftStr = [];

        let i = 0;
        for (let value of str) {
                if (value.match(regex)) {

                        shiftStr[i] = String.fromCodePoint(value.codePointAt(0) + 1);
                } else {
                        shiftStr[i] = value;
                }

                for (let vowel of ['e', 'o', 'i', 'a', 'u']) {
                        if (shiftStr[i] === vowel) {
                                shiftStr[i] = shiftStr[i].toUpperCase();
                        }
                }

                i++;
        }

        return shiftStr.join('');
}

//#endregion


//#region  Simple Adding

function SimpleAdding(num) {


        if (num === 1) {

                return 1;
        } else if (num === 0) {

                return 0;
        } else if (Math.sign(num) === -1) {

                return num + SimpleAdding(num + 1);
        } else {

                return num + SimpleAdding(num - 1);
        }

}

//#endregion


//#region Letter Capitalize

function letterCapitalize(str) {
        let regex = /\b[a-zA-Z]/g;
        let arrStr = str.split(' ');


        for (let value in arrStr) {
                arrStr[value] = arrStr[value].replace(regex, arrStr[value][0].toUpperCase());

        }

        return arrStr.join(' ');
}

//#endregion


//#region Simple Symbols 

function simpleSymbols(str) {

        let regex = /([\+]+[a-zA-Z]+[\+]+|[\=]+[a-zA-Z]+[\=]+)+/g;
        let regex2 = /[\+]+[a-zA-Z]+[\=]+/g;

        if (((str.endsWith('+') || str.endsWith('=')) || /\d/g.test(str[str.length - 1])) && ((str.startsWith('+') || str.startsWith('=')) || /\d/g.test(str[0]))) {
                if (regex2.test(str)) {
                        return false;
                } else {
                        let bool = ((regex.test(str)) ? true : false);
                        return bool;
                }

        } else {
                return false;
        }



}

//#endregion


//#region Time Convert

function TimeConvert(num) {
        if (num / 60 > 1) {
                return `${Math.trunc(num / 60)}:${num % 60}`;
        } else if (num / 60 === 1) {
                return `1:0`;
        } else {
                return `0:${num}`;
        }
}

//#endregion


//#region Sort Letters


function SortLetters(str) {
        let arr = str.split('');
        arr.sort();
        return arr.join('');
}

//#endregion


//#region Kaprekars Constant

function KaprekarsConstant(num) {

        let counter = 0;
        while (num !== 6174) {
                let numAscending = num.toString().split('').sort();
                let numDescending = num.toString().split('').sort().reverse();
                num = (parseInt(numDescending.join('')) - parseInt(numAscending.join(''))).toString().split('');
                if (num.length === 3) {
                        num.push('0');
                }
                num = parseInt(num.join(''));
                counter++;
        }

        return counter;
}

//#endregion


//#region  Chess Travling 

function ChessTraveling(str) {

        let values = str.split('').filter(number => (!(isNaN(number)) && number !== ' '));
        let verticalDiff = parseInt(values[3]) - parseInt(values[1]);
        let horzintalDiff = parseInt(values[2]) - parseInt(values[0]);

        return factorial(verticalDiff + horzintalDiff) / (factorial(verticalDiff) * factorial(horzintalDiff));

}

//#endregion


//#region  maximal square not my solution

function formatArr(arr) {
        let formatedArr = [];
        for (let value of arr) {
                let tempArr = [];
                for (let num of value) {
                        tempArr.push(parseInt(num));
                }
                formatedArr.push(tempArr);
        }

        return formatedArr;
}



function MaximalSquare(mtx) {
        let x = mtx.length;
        if (x === 0) return 0;
        let y = mtx[0].length;
        if (y === 0) return 0;
        let max = 0;
        let sizes = [];
        for (let i in mtx) {
                sizes[i] = [];
        }


        for (let i in mtx) {
                for (let j in mtx[i]) {
                        if (i == 0 || j == 0) {
                                sizes[i][j] = mtx[i][j];
                        } else if (mtx[i][j] === 1) {
                                sizes[i][j] = Math.min(Math.min(sizes[i][parseInt(j) - 1], sizes[parseInt(i) - 1][j]), sizes[parseInt(i) - 1][parseInt(j) - 1]) + 1;
                        } else if (mtx[i][j] === 0) {
                                sizes[i][j] = mtx[i][j];
                        }
                        if (sizes[i][j] > max) max = sizes[i][j];
                }
        }

        return max * max;
}

//#endregion



// let arr3 =  ["101101", "111111", "011111", "111111", "001111", "011111"]; // 16
// let arr2  =  ["101101", "111111", "010111", "111111"] // 9
// let arr = ["01001", "11111", "01011", "11011"]; // 4






// // console.log(formatArr(arr3));
// console.log(MaximalSquare(formatArr(arr3)));
// console.log(MaximalSquare(formatArr(arr2)));
// console.log(MaximalSquare(formatArr(arr)));



function swap(arr, index) {
        let a, b;
        if (index === arr.length - 1) {
                return 0;
        }
        a = arr[index];
        b = arr[index + 1];
        arr[index] = b;
        arr[index + 1] = a;

}



function randomPermu(arr, times) {
        let permu = [];
        for (let value of arr) {
                permu.push(value);
        }
        for (let i = 0; i < times; i++) {
                swap(permu, random(0, arr.length - 1));
        }
        return permu;
}




// let arr = [2,3,4,5]



// console.log(randomPermu(arr, 15));

function PentagonalNumber(num) {
        let number = 1;
        for (let i = 0; i < num; i++) {
                number += 5 * i;
        }

        return number;
}


function alternative(num) {
        if (num === 0) {
                return 0;
        }

        return 1 + (alternative(num - 1) - 1);
}

function PentagonalNumber(num) {
        return num === 1 ? 1 : PentagonalNumber(num - 1) + (5 * (num - 1));
}




// need to count for str length and numbers of extra ds and rs

function correctPath(str) {
        const dir = [];
        let Dcount = 0;
        let Rcount = 0;
        let Qcount = 0;
        let totalMovementD = 4;
        let totalMovementR = 4;
        let remainingD = 0;
        let remainingR = 0;
        for (const direction of str.toLowerCase()) {
                dir.push(direction);

        }

        for (const value of dir) {
                if (value === 'd') {
                        Dcount++;
                } else if (value === 'r') {
                        Rcount++;
                } else if (value === '?') {
                        Qcount++;
                } else if (value === 'u') {
                        totalMovementD++;
                } else if (value === 'l') {
                        totalMovementR++;
                }
        }


        remainingD = totalMovementD - Dcount;
        remainingR = totalMovementR - Rcount;
        console.log(Dcount);
        console.log(Rcount);
        console.log(remainingD);
        console.log(remainingR);

        // try to adjust this by cheking for remaining < 0
        for (let index in dir) {
                if (dir[index] === '?') {
                        if (remainingD > 0) {
                                dir[index] = 'd';
                                remainingD--;
                                Qcount--;
                        } else if (remainingD < 0) {
                                dir[index] = 'u'
                                remainingD++;
                                Qcount--;
                        } else if (remainingR > 0) {
                                dir[index] = 'r';
                                remainingR--;
                                Qcount--;
                        } else if (remainingR < 0) {
                                dir[index] = 'l';
                                remainingR++;
                                Qcount--;
                        } else {

                        }
                }
        }

        console.log(remainingD);
        console.log(remainingR);

        return dir.join('');


}




function CorrectPath(str) {
        //create an array to hold the positions of the question marks
        let blankArray = [];
        //put the position of the question marks into the array
        str.split('').forEach((val, ind) => {
                if (val === '?') {
                        blankArray.push(ind);
                }
        });

        let num = blankArray.length;

        //we are going to try each possibility until we find one that works,  This will be 4^num permutations
        let total = Math.pow(4, num);

        for (let i = 0; i < total; i++) {
                //go through each permutation, first creating a representative number, then making the path, then testing it
                let numString = (i + total).toString(4).slice(1);
                let currentPath = createPath(str, blankArray, numString);
                if (isPathGood(currentPath)) {
                        return currentPath;
                }
        }
}




//     isPathGood = (str) => {
//             //create our empty array
//             let testArray = []
//             for (let i = 0; i < 5; i++) {
//                     testArray.push([0, 0, 0, 0, 0])
//             }

//             let len = str.length;
//             let currentLoc = [0, 0];

//             for (let i = 0; i < len; i++) {
//                 //mark our current square as visited
//                     testArray[currentLoc[0]][currentLoc[1]] = 1;
//                     //alter the position based on the next letter
//                     let newLoc = currentLoc.slice(0);
//                     switch (str[i]) {
//                             case 'u':
//                                     newLoc[0]--;
//                                     break;
//                             case 'd':
//                                     newLoc[0]++;
//                                     break;
//                             case 'r':
//                                     newLoc[1]++;
//                                     break;
//                             case 'l':
//                                     newLoc[1]--;
//                                     break;
//                     }
//                     //quit if we have gone off the board
//                     if (newLoc.includes (-1) || newLoc.includes (5)) {
//                                     return false;
//                     }
//                     //quit if we are on a previously visited space
//                     if (testArray[newLoc[0]][newLoc[1]] === 1) {
//                             return false;
//                     }
//                     //return true if we are at the target square on our last go
//                     if (newLoc[0] === 4 && newLoc[1] === 4 && i === len - 1) {
//                             return true;
//                     }
//                     //update our location for the next loop;
//                     currentLoc = newLoc;
//             }
//             return false;
//     };

//     createPath = (str, blanks, num) => {
//             let moveArray = ['r', 'l', 'u', 'd'];
//             strArr = str.split('');
//             blanks.forEach((val, ind) => {
//                     strArr.splice(val, 1, moveArray[num[ind]]);
//             });
//             return strArr.join('');
//     };


// console.log(correctPath("drdr??rrddd?"));


// console.count(5);
// console.warn('warning');

// console.time() and console.timeEnd() method  
// console.time('abc'); 
let fun = function () {
        console.log('fun is running');
}
let fun2 = function () {
        console.log('fun2 is running..');
}
//  fun(); // calling fun(); 
//  fun2(); // calling fun2(); 
// console.timeEnd('abc'); 

// console.table() method 
// console.table({'a':1, 'b':2}); 

// console.count() method 
// for(let i=0;i<5;i++){ 
// 	console.count(i); 
// } 


// console.group() and console.groupEnd() method 
// console.group('simple'); 
// console.warn('warning!'); 
// console.error('error here'); 
// console.log('vivi vini vici'); 
// console.groupEnd('simple'); 
// console.log('new section'); 


let str = 'acc?7??sss?3rr1??????5';

function QuestionsMarks(str) {
        let numIndices = [];
        let strSlices = [];
        let count = 0;
        let threeQs = false;
        for (let i = 0; i < str.length; i++) {
                if (str[i].match(/[0-9]/g)) numIndices.push(i);
        }


        for (let i = 0; i < (numIndices.length / 2) + 1; i++) {
                if (parseInt(str[numIndices[i]]) + parseInt(str[numIndices[i + 1]]) === 10) {
                        strSlices.push(str.slice(numIndices[i], numIndices[i + 1]));
                }
        }




        for (let value of strSlices) {
                for (let char of value) {
                        if (char === '?') {
                                count++;
                        }
                }
                if (count === 3) {
                        threeQs = true;
                        break;
                }
        }



        return threeQs;
}



// console.log(QuestionsMarks(str));



let findinter = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"];

function intersection(str) {
        let strF = [];
        for (let i in str) {
                strF[i] = str[i].split(', ');
        }
        let numArrs = [];
        for (let i in strF) {
                numArrs[i] = new Array();
                for (let value of strF[i]) {
                        numArrs[i].push(parseInt(value));
                }
        }

        let intersection = [];
        for (let value1 of numArrs[0]) {
                for (let value2 of numArrs[1]) {
                        if (value1 === value2) {
                                intersection.push(value1);
                        }
                }
        }

        return (intersection.length !== 0) ? intersection : false;

}


// console.log(intersection(findinter));



//#region   bracket combinations

function bracketCombinations(num) {
        let result = 0;
        if (typeof num === 'number') {

                result = (factorial(num * 2) / (factorial(num) * factorial((num + 1))));


        }


        return result;
}


// console.log(bracketCombinations(9))
//#endregion




//#region  minwindowsubstring 


// function MinWindowSubstring(strArr) { 
//         const [firstString, secondString] = strArr; 
//         let smallMatch = ''; 
//         const test = new Set(secondString); 
//         const placeholder = []; 
//         for(let index = 0; index < firstString.length; index++) {
//                 for(let value of test) {
//                         if(value === firstString[index]) placeholder.push({[index]:  value}); 

//                 }
//         }




//         return placeholder; 

//       }







function MinWindowSubstring(strArr) {
        let str = strArr[0];
        let needle = strArr[1].split('');


        //start with the smallest possible substrings, then go up
        for (let i = needle.length, len = str.length; i <= len; i++) {
                for (let j = 0; j <= len - i; j++) {
                        let mySlice = str.substr(j, i);
                        if (isContained(mySlice)) {
                                return mySlice;
                        }
                }
        }
        return 'Not in string';

        // ---------------------- helpers -----------------------------
        //isContained checks to see if all the chars in the needle are in the given string
        function isContained(str) {
                let arr = str.split('');
                for (let i = 0, len = needle.length; i < len; i++) {
                        let place = arr.findIndex(val => {
                                return val === needle[i]
                        });
                        if (place === -1) {
                                return false;
                        } else {
                                arr.splice(place, 1);
                        }
                }
                return true;
        }
}



//       console.log(MinWindowSubstring(["ahffaksfajeeubsne", "jefaa"]))
//       console.log(MinWindowSubstring(["aaffhkksemckelloe", "fhea"]))
//#endregion



//#region  treeConstructor 

function TreeConstructor(strArr) {
        let formatedArr = [];
        let maxParentCount = 0;
        for (let value of strArr) {
                formatedArr.push(parseInt(value[3]));
        }
        // code goes here  
        const parentCount = {};
        formatedArr.forEach((x) => {
                parentCount[x] = (parentCount[x] || 0) + 1;
        })


        maxParentCount = Math.max(...Object.values(parentCount))

        if (maxParentCount > 2) {
                return false;
        } else {
                return true;
        }


}



// console.log(TreeConstructor(["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]))
// console.log(TreeConstructor(["(1,2)", "(3,2)", "(2,12)", "(5,2)"]))
// console.log(TreeConstructor(["(2,5)", "(2,6)"])) // false 
// console.log(TreeConstructor(["(2,3)", "(1,2)", "(4,9)", "(9,3)", "(12,9)", "(6,4)", "(1,9)"])) // false 
// console.log(TreeConstructor(["(10,20)", "(20,50)"])) // true 


//#endregion



//#region  Bracket Matcher





function BracketMatcher(str) {

        let bracketArr = [];
        let leftBracketCount = 0;
        let rightBracketCount = 0;
        for (let value of str.split('')) {
                if (value === ')' || value === '(') {
                        bracketArr.push(value);
                }
        }

        console.log(bracketArr)

        for (let value of bracketArr) {
                if (value === ')') {
                        rightBracketCount++;
                } else {
                        leftBracketCount++;
                }
        }

        if (rightBracketCount === leftBracketCount) {

                return 1
        } else {

                return 0
        }




}




// someone's else solution 

function bracketMatcher(str) {
        let open = 0;

        for (let i = 0; i < str.length; i++) {
                if (str[i] === '(') open++;
                if (str[i] === ')') open--;
                if (open < 0) return 0;
        }

        return open ? 0 : 1;
}



// console.log(BracketMatcher("(coder)(byte))"))
// console.log(BracketMatcher("(c(oder)) b(yte)"))
// console.log(BracketMatcher("(coder( b(yte)"))
// console.log(BracketMatcher("the color re(d))()(()"))

//#endregion



//#region codelandUsernamevalidation

function CodelandUsernameValidation(str) {
        let letters_numbers_underscores = /^[A-Za-z0-9_]+$/g;
        let letters = /[A-Za-z]/g;
        // code goes here  
        const [matched] = str.match(letters_numbers_underscores);

        if (matched && !matched.endsWith('_') && letters.test(matched[0]) && matched.length > 3 && matched.length < 26) {
                return true
        } else {
                return false;
        }


}



//       console.log(CodelandUsernameValidation("aa_"))
//       console.log(CodelandUsernameValidation("u__hello_world123"))
//#endregion



//#region addtwonumbers  linkedlists


function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
}


function insert(root, item) {
        let temp = new ListNode();
        let ptr;
        temp.val = item;
        temp.next = null;

        if (root === null) {
                root = temp;
        } else {
                ptr = root;
                while (ptr.next != null) {
                        ptr = ptr.next;

                }
                ptr.next = temp;
        }
        return root;
}


function arrayToList(arr) {
        let root = null;
        for (let i = 0; i < arr.length; i++)
                root = insert(root, parseInt(arr[i]));
        return root;
}


function addTwoNumbers(l1, l2) {
        let arr1 = [];
        let arr2 = [];
        let head1 = l1;
        let head2 = l2;
        while (head1 !== null) {
                arr1.push(head1.val);
                head1 = head1.next;
        }

        while (head2 !== null) {
                arr2.push(head2.val);
                head2 = head2.next;
        }

        arr1 = arr1.reverse();
        arr2 = arr2.reverse();


        const str1 = arr1.join('');
        const str2 = arr2.join('');
        let sum = 0;
        if (Number.isSafeInteger(parseInt(str1) && Number.isSafeInteger(parseInt(str2)))) {
                sum = parseInt(str1) + parseInt(str2);
        } else {
                sum = BigInt(str1) + BigInt(str2);
        }
        const result = (sum.toString()).split('').reverse();
        const listResult = arrayToList(result);

        return listResult;

}


// console.log(addTwoNumbers(arrayToList([2, 4, 3]), arrayToList([5, 6, 4])))
// console.log(addTwoNumbers(arrayToList([2, 4, 9]), arrayToList([5,6,4,9])))
// console.log(addTwoNumbers(arrayToList([9, 9, 9, 9, 9, 9, 9]), arrayToList([9, 9, 9, 9])))
// console.log(addTwoNumbers(arrayToList([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), arrayToList([5,6,4])))







//#endregion



//#region  maxSlidingwindow

function maxSlidingwindow(nums, k) {
        let maxArr = [];
        for (let index in nums) {

                if (parseInt(index) < (nums.length + 1) - k) {
                        maxArr.push(Math.max(...nums.slice(parseInt(index), parseInt(index) + k)))
                }
        }



        return maxArr;

}



// console.log(maxSlidingwindow([1,3,-1,-3,5,3,6,7], 3))

//#endregion



//#region  two sum 

function twoSum(nums, target) {
        for (let i = 0; i < nums.length; i++) {
                for (let j = i + 1; j < nums.length; j++) {
                        if (nums[i] + nums[j] === target) {
                                return [i, j]
                        }

                }

        }
}


// console.log(twoSum([2,7,11,15], 9))
// console.log(twoSum([2,5,5,11], 10))


//#endregion


//#region lengthOfLongestSubstring 

function lengthOfLongestSubstring(s) {
        let ans = 0;
        let map = {};
        let i = 0;

        for (let j = 0; j < s.length; j++) {

                if (s[j] in map) {
                        i = Math.max(map[s[j]], i);

                }
                ans = Math.max(ans, j - i + 1);
                map[s[j]] = j + 1;
        }

        return ans;


}


// console.log(lengthOfLongestSubstring("pwwkew"))
//#endregion   



//#region find median sorted array

function fmsa(nums1, nums2) {

        function sortNumber(a, b) {
                return a - b;
        }
        let arr = nums1.concat(nums2).sort(sortNumber);
        console.log(arr);
        let median = 0;
        if (arr.length % 2 === 0) {
                median = (arr[(arr.length / 2) - 1] + arr[arr.length / 2]) / 2;
        } else {
                median = arr[(arr.length - 1) / 2]
        }

        return median
}

console.log(fmsa([1, 3], [2]))
console.log(fmsa([1, 2], [3, 4]))
console.log(fmsa([-2, -1], [3]))

//#endregion


//#region  reverse integer 

function reverseInt(x) {
        let number = (x < 0) ? -1 * x : x;
        let lastDigit = 0;
        let reverse = 0;
        const minIntegerNumber = Math.pow(-2, 31);
        const maxIntegerNumber = Math.pow(2, 31) - 1;

        while (number > 0) {
                lastDigit = number % 10;
                reverse = (reverse * 10) + lastDigit
                number = Math.trunc(number / 10)

        }
        if (reverse > maxIntegerNumber || (x < 0 && -1 * reverse < minIntegerNumber)) {
                return 0;
        } else {

                return (x < 0) ? (-1 * reverse) : reverse;
        }


}


console.log(reverseInt(-123))

//#endregion


//#region zigzag

function zigzag(s, numRows) {
        if (numRows == 1) return s;
        const length = Math.min(numRows, s.length)
        let rows = [];
        let curRow = 0;
        let goingDown = false;
        for (let i = 0; i < length; i++) {
                rows.push('')
        }
        for (let index in s) {
                rows[curRow] += s[index]
                if (curRow === 0 || curRow === numRows - 1) goingDown = !goingDown
                curRow += goingDown ? 1 : -1;
        }
        console.log(rows)
        let ret = '';
        for (let value of rows) {
                ret += value

        }


        return ret



}

console.log(zigzag("PAYPALISHIRING", 3))

//#endregion



//#region  myatoi 

function myAtoi(s) {
        let int32signed = Math.pow(2, 31) * -1;
        let int32unsigned = Math.pow(2, 31) - 1
        let num = parseInt(s)
        if (isNaN(num)) {
                return 0
        } else {
                if (num < int32signed) {
                        return int32signed
                } else if (num > int32unsigned) {
                        return int32unsigned
                } else {
                        return num
                }
        }



}

// console.log(myAtoi(' 32432fdsaf432'))
// console.log(myAtoi("4193 with words"))
// console.log(myAtoi( "   -42"))
// console.log(myAtoi( "words and 987"))
// console.log(parseInt('-2342352'))
// console.log(Math.pow(2, 31) * -1)
// console.log( Math.pow(2, 31) - 1)

//#endregion



//#region  maxArea 

function maxArea(height) {
        let maxarea = 0
        let left = 0
        let right = height.length - 1

        while (left < right) {
                let width = right - left
                maxarea = Math.max(maxarea, Math.min(height[left], height[right]) * width)
                height[left] <= height[right] ? left += 1 : right -= 1

        }

        return maxarea
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))

//#endregion


//#region valid brackeets 

let isValid = function (s) {
        if (s.length % 2 !== 0 || '})]'.includes(s[0]) || '({['.includes(s[s.length - 1])) return false
        let map = {
                ")": "(",
                "]": "[",
                "}": "{"
        };
        let arr = [];

        for (let i = 0; i < s.length; i++) {

                if ('([{'.includes(s[i])) {
                        arr.push(s[i]);
                } else {
                        if (arr.at(-1) === map[s[i]]) {
                                arr.pop();
                        }
                        else return false;
                }
        }
        return arr.length === 0;

};


console.log(isValid("){"))
console.log(isValid("{}"))
console.log(isValid("(){}}{"))



//#endregion



//#region median of two sorted arrays

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


//#endregion



