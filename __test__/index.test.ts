import {
    longWord,
    reverString,
    letterChange,
    SimpleAdding,
    letterCapitalize,
    simpleSymbols,
    TimeConvert,
    SortLetters
} from '../index'





test('longWord cases', () => {
    let cases: string[] = [ "Hello world123 567" ]
    let expected: string[] = ['world123']

    for(let index in cases) {
        expect(longWord(cases[index])).toEqual(expected[index])  
    }
    
    
})


test('reverseString cases', () => {
    let cases: string[] = [ "dog", "cat", "hello" ]
    let expected: string[] = ["god", "tac", "olleh"]

    for(let index in cases) {
        expect(reverString(cases[index])).toEqual(expected[index])  
    }
}) 



test('letterChange cases', () => {
    let cases: string[] = ["dog"] 
    let expected: string[] = ["dOg"]

    for(let index in cases) {
        expect(letterChange(cases[index])).toEqual(expected[index])  
    } 
})


test('SimpleAdding cases', () => {
    let cases: number[] = [2, 3, 4, 5] 
    let expected: number[] = [3, 6, 10, 15] 

    for(let index in cases) {
        expect(SimpleAdding(cases[index])).toEqual(expected[index])  
    } 
})

test('letterCapitalize cases', () => {
    let cases: string[] = ["car", "hello"] 
    let expected: string[] = ["Car", "Hello"]   
 
    for(let index in cases) {
        expect(letterCapitalize(cases[index])).toEqual(expected[index])  
    } 
})

test('simpleSymbols cases', () => {
    let cases: string[] = ["++car++", "hello"] 
    let expected: boolean[] = [true, false]   
 
    for(let index in cases) {
        expect(simpleSymbols(cases[index])).toEqual(expected[index])  
    } 
})


test('TimeConvert cases', () => {
    let cases: number[] = [120, 60] 
    let expected: string[] = ["2:0", "1:0"]   
 
    for(let index in cases) {
        expect(TimeConvert(cases[index])).toEqual(expected[index])  
    } 
})


test('SortLetters cases', () => {
    let cases: string[] = ["hello", "world"] 
    let expected: string[] = ["ehllo", "dlorw"]   
  
    for(let index in cases) {
        expect(SortLetters(cases[index])).toEqual(expected[index])  
    } 
})






