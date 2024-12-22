type TestPartial<T> = {
	[P in keyof T]?: T[P];
}

type DataType = {
	name: string,
	id: number,
	loggedIn: boolean,
	email: string
	currentBalance: number
}

let completeData: DataType = {
	name: "joe",
	id: 1,
	loggedIn: true,
	email: "joe@brandon.com",
	currentBalance: 89
}

let partialData: Partial<DataType> = {
	currentBalance: 100,
	name:'john doe'
}

function updateData(originalData: DataType, someData: Partial<DataType>): DataType {
	originalData.name = someData.name;
	return originalData;
}

console.log(updateData(completeData, partialData));