function toArray(item: number[]): number[];
function toArray(item: number): number[];

function toArray(item: number[] | number): number[] {
	if (Array.isArray(item)) {
		return item;
	} else {
		return [item];
	}
}

console.log(toArray(1));
console.log(toArray([4, 5, 6]));


/** Overload with Generics */

// function toArray<T>(item: T[]): T[];
// function toArray<T>(item: T): T[];

// function toArray<T>(item: T[] | T): T[] {
// 	if (Array.isArray(item)) {
// 		return item;
// 	} else {
// 		return [item];
// 	}
// }

// console.log(toArray(1));
// console.log(toArray([4, 5, 6]));

// console.log(toArray('hi'));
// console.log(toArray(['asa', 'waale', 'baag']));