"use strict";
// Filter property names
function printProps(p1, p2) {
    console.log("Printing:");
    p2.forEach(propName => {
        console.log(`Name: ${String(propName)} and value: ${p1[propName]}`);
    });
}
const user = { id: 1, name: "Alice", email: "alice@example.com", role: "admin" };
printProps(user, ["name", "id"]);
/** Logging and Debugging Specific Fields */
const serverResponse = {
    status: 200,
    message: "Success",
    data: { userId: 123, orderId: 456 },
    timestamp: new Date(),
};
printProps(serverResponse, ["status", "data"]);
const formData = {
    username: { label: "Username", value: "JohnDoe" },
    email: { label: "Email", value: "john@example.com" },
};
printProps(formData, ["username"]);
/** API or Schema Validation */
function validateApiResponse(data, requiredFields) {
    return requiredFields.every(field => field in data);
}
let response = { id: 1, name: "John", age: 30 };
let isValid = validateApiResponse(response, ['age', 'name']);
console.log(`Response valid: ${isValid}`);
let newResponse = { id: 1, personName: "John", age: 30 };
// isValid = validateApiResponse(newResponse, ['age', 'name']); // newRespose could be a fetch response
console.log(`Response valid: ${isValid}`);
