function arrayMap<T, U>(f: (x: T) => U): (a: T[]) => U[] {
    return b => b.map(f);
}
const lengths: (a: string[]) => number[] = arrayMap(s => s.length);

const output_lengths = lengths(['hi', 'hello', 'sir']);

console.log(output_lengths); // [2, 5, 3]