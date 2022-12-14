// function to generate random number

export function random(min: number, max: number) {

    let num = Math.floor(Math.random() * (max - min)) + min;
    return num;
}



export function factorial(x: number): number {
    return (x === 0) ? 1 : x * factorial(x - 1);
}
