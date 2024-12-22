// Filter property names
function printProps<T, K extends keyof T>(p1: T, p2: K[]): void { // Extends all properties' name of T
    console.log("Printing:");
    p2.forEach(propName => {
        console.log(`Name: ${String(propName)} and value: ${p1[propName]}`);
    });
}


/** Selective Data Display */
interface User {
    id: number;
    name: string;
    email: string;
    role: string;
}

const user: User = { id: 1, name: "Alice", email: "alice@example.com", role: "admin" };
printProps(user, ["name", "id"]);


/** Logging and Debugging Specific Fields */
const serverResponse = {
    status: 200,
    message: "Success",
    data: { userId: 123, orderId: 456 },
    timestamp: new Date(),
};

printProps(serverResponse, ["status", "data"]);


/** Building Forms Dynamically */
interface FormField {
    label: string;
    value: string | number;
}

const formData: { [key: string]: FormField } = {
    username: { label: "Username", value: "JohnDoe" },
    email: { label: "Email", value: "john@example.com" },
};

printProps(formData, ["username"]);


/** API or Schema Validation */
function validateApiResponse<T extends object>(data: T, requiredFields: (keyof T)[]): boolean {
    return requiredFields.every(field => field in data);
}

let response = { id: 1, name: "John", age: 30 };
let isValid = validateApiResponse(response, ['age', 'name']);
console.log(`Response valid: ${isValid}`);

let newResponse = { id: 1, personName: "John", age: 30 };
// isValid = validateApiResponse(newResponse, ['age', 'name']); // newRespose could be a fetch response
console.log(`Response valid: ${isValid}`);
