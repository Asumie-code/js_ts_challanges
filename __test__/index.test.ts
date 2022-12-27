import {
    longWord,
    reverString,
    letterChange,
    SimpleAdding,
    letterCapitalize,
    simpleSymbols,
    TimeConvert,
    SortLetters,
    KaprekarsConstant,
    ChessTraveling,
    randomPermu,
    alternative,
    PentagonalNumber,
    QuestionsMarks,
    intersection,
    bracketCombinations,
    MinWindowSubstring,
    TreeConstructor,
    bracketMatcher,
    CodelandUsernameValidation,
    addTwoNumbers,
    maxSlidingwindow,
    twoSum,
    reverseInt,
    zigzag,
    myAtoi,
    maxArea,
    isValid,
    fmsa,
} from "../index";
import { LinkedList } from "../linkedList";

test("longWord cases", () => {
    let cases: string[] = ["Hello world123 567"];
    let expected: string[] = ["world123"];

    for (let index in cases) {
        expect(longWord(cases[index])).toEqual(expected[index]);
    }
});

test("reverseString cases", () => {
    let cases: string[] = ["dog", "cat", "hello"];
    let expected: string[] = ["god", "tac", "olleh"];

    for (let index in cases) {
        expect(reverString(cases[index])).toEqual(expected[index]);
    }
});

test("letterChange cases", () => {
    let cases: string[] = ["dog"];
    let expected: string[] = ["dOg"];

    for (let index in cases) {
        expect(letterChange(cases[index])).toEqual(expected[index]);
    }
});

test("SimpleAdding cases", () => {
    let cases: number[] = [2, 3, 4, 5];
    let expected: number[] = [3, 6, 10, 15];

    for (let index in cases) {
        expect(SimpleAdding(cases[index])).toEqual(expected[index]);
    }
});

test("letterCapitalize cases", () => {
    let cases: string[] = ["car", "hello"];
    let expected: string[] = ["Car", "Hello"];

    for (let index in cases) {
        expect(letterCapitalize(cases[index])).toEqual(expected[index]);
    }
});

test("simpleSymbols cases", () => {
    let cases: string[] = ["++car++", "hello"];
    let expected: boolean[] = [true, false];

    for (let index in cases) {
        expect(simpleSymbols(cases[index])).toEqual(expected[index]);
    }
});

test("TimeConvert cases", () => {
    let cases: number[] = [120, 60];
    let expected: string[] = ["2:0", "1:0"];

    for (let index in cases) {
        expect(TimeConvert(cases[index])).toEqual(expected[index]);
    }
});

test("SortLetters cases", () => {
    let cases: string[] = ["hello", "world"];
    let expected: string[] = ["ehllo", "dlorw"];

    for (let index in cases) {
        expect(SortLetters(cases[index])).toEqual(expected[index]);
    }
});

test("KaprekarsConstant cases", () => {
    let cases: number[] = [3524];
    let expected: number[] = [3];

    for (let index in cases) {
        expect(KaprekarsConstant(cases[index])).toEqual(expected[index]);
    }
});

test("ChessTraveling cases", () => {
    let cases: string[] = ["(1 1)(2 2)"];
    let expected: number[] = [2];

    for (let index in cases) {
        expect(ChessTraveling(cases[index])).toEqual(expected[index]);
    }
});

test("randomPermu cases", () => {
    let cases: number[][] = [[1, 2, 3]];

    // better test case can be written
    for (let index in cases) {
        expect(randomPermu(cases[index], 3)).toHaveLength(cases[index].length);
        expect(randomPermu(cases[index], 3)).toContain(2);
        expect(randomPermu(cases[index], 3)).toContain(1);
        expect(randomPermu(cases[index], 3)).toContain(3);
    }
});

test("alternative cases", () => {
    let cases: number[] = [333, 424, 129, 26];
    let expected: number[] = [0, 0, 0, 0];

    for (let index in cases) {
        expect(alternative(cases[index])).toEqual(expected[index]);
    }
});

test("PentagonalNumber cases", () => {
    let cases: number[] = [1, 2, 3, 4];
    let expected: number[] = [1, 6, 16, 31];

    for (let index in cases) {
        expect(PentagonalNumber(cases[index])).toEqual(expected[index]);
    }
});

test("QuestionMarks cases", () => {
    let cases: string[] = ["acc?7??sss?3rr1??????5"];
    let expected: boolean[] = [true];

    for (let index in cases) {
        expect(QuestionsMarks(cases[index])).toEqual(expected[index]);
    }
});

test("intersection cases", () => {
    let cases: string[][] = [["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]];
    let expected: number[][] | boolean[] = [[1, 4, 13]];

    for (let index in cases) {
        expect(intersection(cases[index])).toEqual(expected[index]);
    }
});

test("bracketCombinations cases", () => {
    let cases: number[] = [6, 2, 4];
    let expected: number[] = [132, 2, 14];

    for (let index in cases) {
        expect(bracketCombinations(cases[index])).toEqual(expected[index]);
    }
});

test("minWindowSubstring cases", () => {
    let cases: string[][] = [
        ["ahffaksfajeeubsne", "jefaa"],
        ["aaffhkksemckelloe", "fhea"],
    ];
    let expected: (boolean | string)[] = ["aksfaje", "affhkkse"];

    for (let index in cases) {
        expect(MinWindowSubstring(cases[index])).toEqual(expected[index]);
    }
});

test("TreeConstructor cases", () => {
    let cases: string[][] = [
        ["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"],
        ["(1,2)", "(3,2)", "(2,12)", "(5,2)"],
        ["(2,5)", "(2,6)"],
    ];
    let expected: boolean[] = [true, false, true];

    for (let index in cases) {
        expect(TreeConstructor(cases[index])).toEqual(expected[index]);
    }
});

test("bracketMatcher cases", () => {
    let cases: string[] = [
        "(coder)(byte))",
        "(c(oder)) b(yte)",
        "(coder( b(yte)",
    ];
    let expected: number[] = [0, 1, 0];

    for (let index in cases) {
        expect(bracketMatcher(cases[index])).toEqual(expected[index]);
    }
});

test("CodelandUsernameValidation cases", () => {
    let cases: string[] = ["aa_", "u__hello_world123"];
    let expected: boolean[] = [false, true];

    for (let index in cases) {
        expect(CodelandUsernameValidation(cases[index])).toEqual(expected[index]);
    }
});

test("addTwoNumbers cases", () => {
    let cases: LinkedList<number>[][] = [
        [
            new LinkedList<number>(...[2, 4, 3]),
            new LinkedList<number>(...[5, 6, 4]),
        ],
        [
            new LinkedList<number>(...[2, 4, 9]),
            new LinkedList<number>(...[5, 6, 4, 9]),
        ],
        [
            new LinkedList<number>(...[9, 9, 9, 9, 9, 9, 9]),
            new LinkedList<number>(...[9, 9, 9, 9]),
        ],
    ];

    let expected: number[][] = [
        [4, 8, 6],
        [4, 8, 8, 1],
        [8, 9, 9, 9, 9, 9, 9, 1],
    ];

    for (let index in cases) {
        expect(addTwoNumbers(cases[index][0], cases[index][0])).toBeDefined();
        expect(addTwoNumbers(cases[index][0], cases[index][0]).toArray()).toEqual(
            expected[index]
        );
    }
});

test("maxSlidingwindow cases", () => {
    let cases: number[][] = [[1, 3, -1, -3, 5, 3, 6, 7]];
    let expected: number[][] = [[3, 3, 5, 5, 6, 7]];

    for (let index in cases) {
        expect(maxSlidingwindow(cases[index], 3)).toEqual(expected[index]);
    }
});

test("twoSum cases", () => {
    let cases: (number[] | number)[][] = [
        [[2, 7, 11, 15], 9],
        [[2, 5, 5, 11], 10],
    ];
    let expected: number[][] = [
        [0, 1],
        [1, 2],
    ];

    for (let index in cases) {
        expect(
            twoSum(cases[index][0] as number[], cases[index][1] as number)
        ).toEqual(expected[index]);
    }
});

test("reverseInt cases", () => {
    let cases: number[] = [32, 312, -123];
    let expected: number[] = [23, 213, -321];

    for (let index in cases) {
        expect(reverseInt(cases[index])).toEqual(expected[index]);
    }
});

test("zigzag cases", () => {
    let cases: (string | number)[][] = [["PAYPALISHIRING", 3]];
    let expected: string[] = ["PAHNAPLSIIGYIR"];

    for (let index in cases) {
        expect(
            zigzag(cases[index][0] as string, cases[index][1] as number)
        ).toEqual(expected[index]);
    }
});

test("myAtoi cases", () => {
    let cases: string[] = [
        " 32432fdsaf432",
        "4193 with words",
        "   -42",
        "words and 987",
    ];
    let expected: number[] = [32432, 4193, -42, 0];

    for (let index in cases) {
        expect(myAtoi(cases[index])).toEqual(expected[index]);
    }
});

test("maxArea cases", () => {
    let cases: number[][] = [[1, 8, 6, 2, 5, 4, 8, 3, 7]];
    let expected: number[] = [49];

    for (let index in cases) {
        expect(maxArea(cases[index])).toEqual(expected[index]);
    }
});

test("isValid (valid brackets) cases", () => {
    let cases: string[] = ["){", "{}", "(){}}{"];
    let expected: boolean[] = [false, true, false];

    for (let index in cases) {
        expect(isValid(cases[index])).toEqual(expected[index]);
    }
});

test("fmsa (median of two arrays) cases", () => {
    let cases: [number[], number[]][] = [
        [[1, 3], [2]],
        [
            [1, 2],
            [3, 4],
        ],
        [[-2, -1], [3]],
    ];
    let expected: number[] = [2, 2.5, -1];

    for (let index in cases) {
        expect(fmsa(cases[index][0], cases[index][1])).toEqual(expected[index]);
    }
});
