"use strict";
let completeData = {
    name: "joe",
    id: 1,
    loggedIn: true,
    email: "joe@brandon.com",
    currentBalance: 89
};
let partialData = {
    currentBalance: 100,
    name: 'john doe'
};
function updateData(originalData, someData) {
    for (const key in someData) {
        if (someData[key] !== undefined) {
            originalData[key] = someData[key];
        }
    }
    return originalData;
}
console.log(updateData(completeData, partialData));
