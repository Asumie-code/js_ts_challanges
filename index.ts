import { random, factorial } from "./utils";
import { ListNode, insert, arrayToList } from "./linkedList";





//#region Long word

 export function longWord(str: string) {

        let regex = /[^\w\s]/g;
        let words: string[] = str.split(regex).join('').split(' ');

        let wordSize: number[] = [];
        for (let value of words) {
                wordSize.push(value.length);
        }

        let WordIndex = wordSize.indexOf(Math.max(...wordSize));


        return words[WordIndex];

}

//#endregion


//#region  Revers String


 export function reverString(str: string) {
        let revStr: string[] = [];
        let i = str.length - 1;
        for (let value of str) {
                revStr[i] = value;
                i--;
        }
        return revStr.join('');
}

//#endregion


//#region  Change Letters

 export function letterChange(str: string): string {

        let regex: RegExp = /[a-zA-Z]+/g;
        let shiftStr: string[] = [];

        let i: number = 0;
        for (let value of str) {
                if (value.match(regex)) {


                        shiftStr[i] = String.fromCodePoint(value.codePointAt(0) ?? 0 + 1);

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

 export function SimpleAdding(num: number): number {


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

 export function letterCapitalize(str: string): string {
        let regex: RegExp = /\b[a-zA-Z]/g;
        let arrStr: string[] = str.split(' ');


        for (let value in arrStr) {
                arrStr[value] = arrStr[value].replace(regex, arrStr[value][0].toUpperCase());

        }

        return arrStr.join(' ');
}

//#endregion


//#region Simple Symbols 

 export function simpleSymbols(str: string): boolean {

        let regex: RegExp = /([\+]+[a-zA-Z]+[\+]+|[\=]+[a-zA-Z]+[\=]+)+/g;
        let regex2: RegExp = /[\+]+[a-zA-Z]+[\=]+/g;

        if (((str.endsWith('+') || str.endsWith('=')) || /\d/g.test(str[str.length - 1])) && ((str.startsWith('+') || str.startsWith('=')) || /\d/g.test(str[0]))) {
                if (regex2.test(str)) {
                        return false;
                } else {
                        let bool: boolean = ((regex.test(str)) ? true : false);
                        return bool;
                }

        } else {
                return false;
        }



}

//#endregion


//#region Time Convert

 export function TimeConvert(num: number): string {
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


 export function SortLetters(str: string): string {
        let arr = str.split('');
        arr.sort();
        return arr.join('');
}

//#endregion


//#region Kaprekars Constant

 export function KaprekarsConstant(num: number): number {

        let counter: number = 0;
        while (num !== 6174) {
                let numAscending = num.toString().split('').sort();
                let numDescending = num.toString().split('').sort().reverse();
                let arr: string[] = (parseInt(numDescending.join('')) - parseInt(numAscending.join(''))).toString().split('');
                if (arr.length === 3) {
                        arr.push('0');
                }
                num = parseInt(arr.join(''));
                counter++;
        }

        return counter;
}

//#endregion


//#region  Chess Travling 

 export function ChessTraveling(str: string): number {

        let values: string[] = str.split('').filter(number => (!(isNaN(Number(number))) && number !== ' '));
        let verticalDiff: number = parseInt(values[3]) - parseInt(values[1]);
        let horzintalDiff: number = parseInt(values[2]) - parseInt(values[0]);

        return factorial(verticalDiff + horzintalDiff) / (factorial(verticalDiff) * factorial(horzintalDiff));

}

//#endregion



// todo: util function
 export function swap<Type>(arr: Type[], index: number) {
        let a: Type, b: Type;
        if (index === arr.length - 1) {
                return 0;
        }
        a = arr[index];
        b = arr[index + 1];
        arr[index] = b;
        arr[index + 1] = a;

}



 export function randomPermu(arr: number[], times: number): number[] {
        let permu: number[] = [];
        for (let value of arr) {
                permu.push(value);
        }
        for (let i = 0; i < times; i++) {
                swap(permu, random(0, arr.length - 1));
        }
        return permu;
}







 export function alternative(num: number): number {
        if (num === 0) {
                return 0;
        }
        return 1 + (alternative(num - 1) - 1);
}



 export function PentagonalNumber(num: number): number {
        return num === 1 ? 1 : PentagonalNumber(num - 1) + (5 * (num - 1));
}



 export function QuestionsMarks(str: string): boolean {
        let numIndices: number[] = [];
        let strSlices: string[] = [];
        let count: number = 0;
        let threeQs: boolean = false;
        for (let i: number = 0; i < str.length; i++) {
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




 export function intersection(str: string[]): number[] | boolean {
        let strF: string[][] = [];
        for (let i in str) {
                strF[i] = str[i].split(', ');
        }
        let numArrs: number[][] = [];
        for (let i in strF) {
                numArrs[i] = new Array<number>();
                for (let value of strF[i]) {
                        numArrs[i].push(parseInt(value));
                }
        }

        let intersection: number[] = [];
        for (let value1 of numArrs[0]) {
                for (let value2 of numArrs[1]) {
                        if (value1 === value2) {
                                intersection.push(value1);
                        }
                }
        }

        return (intersection.length !== 0) ? intersection : false;

}





//#region   bracket combinations

 export function bracketCombinations(num: number): number {
        let result: number = 0;
        if (typeof num === 'number') {

                result = (factorial(num * 2) / (factorial(num) * factorial((num + 1))));


        }


        return result;
}


//#endregion




//#region  minwindowsubstring not my solution 



 export function MinWindowSubstring(strArr: string[]): string |  boolean {
        let str: string = strArr[0];
        let needle: string[] = strArr[1].split('');


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
          function isContained(str: string): boolean {
                let arr: string[] = str.split('');
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




//#endregion



//#region  treeConstructor 

 export function TreeConstructor(strArr: string[]): boolean {
        let formatedArr: number[] = [];
        let maxParentCount: number = 0;
        for (let value of strArr) {
                formatedArr.push(parseInt(value[3]));
        }

        const parentCount: {[key: number]: number } = {};
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






//#endregion



//#region  Bracket Matcher



 export function bracketMatcher(str: string): number {
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

 export function CodelandUsernameValidation(str: string): boolean {
        let letters_numbers_underscores: RegExp = /^[A-Za-z0-9_]+$/g;
        let letters: RegExp = /[A-Za-z]/g;
        // analays this type
        const [matched] = str.match(letters_numbers_underscores) ?? [null];

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



 export function addTwoNumbers(l1, l2) {
        // rework this type
        let arr1: any = [];
        let arr2: any = [];
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
        let sum: BigInt | number;
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

 export function maxSlidingwindow(nums: number[], k: number): number[] {
        let maxArr: number[] = [];
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

 export function twoSum(nums: number[], target: number): number[] | undefined {
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

 export function lengthOfLongestSubstring(s: string) {
        let ans: number = 0;
        let map = {};
        let i: number = 0;

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






//#region  reverse integer 

 export function reverseInt(x: number): number {
        let number: number = (x < 0) ? -1 * x : x;
        let lastDigit: number = 0;
        let reverse: number = 0;
        const minIntegerNumber: number = Math.pow(-2, 31);
        const maxIntegerNumber: number = Math.pow(2, 31) - 1;

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

 export function zigzag(s: string, numRows: number): string {
        if (numRows == 1) return s;
        const length = Math.min(numRows, s.length)
        let rows: string[] = [];
        let curRow: number = 0;
        let goingDown: boolean = false;
        for (let i = 0; i < length; i++) {
                rows.push('')
        }
        for (let index in s.split('')) {
                rows[curRow] += s[index]
                if (curRow === 0 || curRow === numRows - 1) goingDown = !goingDown
                curRow += goingDown ? 1 : -1;
        }
        let ret = '';
        for (let value of rows) {
                ret += value

        }


        return ret



}

console.log(zigzag("PAYPALISHIRING", 3))

//#endregion



//#region  myatoi 

 export function myAtoi(s: string): number {
        let int32signed: number = Math.pow(2, 31) * -1;
        let int32unsigned: number = Math.pow(2, 31) - 1
        let num: number = parseInt(s)
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

 export function maxArea(height: number[]): number {
        let maxarea: number = 0
        let left: number = 0
        let right: number = height.length - 1

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

let isValid =   function (s: string): boolean {
        if (s.length % 2 !== 0 || '})]'.includes(s[0]) || '({['.includes(s[s.length - 1])) return false
        let map = {
                ")": "(",
                "]": "[",
                "}": "{"
        };
        let arr: string[] = [];

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

 export function fmsa(nums1: number[], nums2: number[]): number {

          function sortNumber(a: number, b: number): number {
                return a - b;
        }
        let arr: number[] = nums1.concat(nums2).sort(sortNumber);
        let median: number = 0;
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



