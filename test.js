// // Import the function sum from the app.js file
// const { sum } = require('./app.js');

// // Start your first test
// test('adds 14 + 9 to equal 23', () => {
//     // Inside the test we call our sum function with 2 numbers
//     let total = sum(14, 9);

//     // We expect the sum of those 2 numbers to be 23
//     expect(total).toBe(23);
// });



test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(dollars).toBe(expected); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One yen should be 512.05 yen", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    // Use the function like its supposed to be used
    const yen = fromDollarToYen(3.5);

    // If 1 dollars is 146.3 yen, then 3.5 dollars should be (3.5 * 146.3)
    const expected = 3.5 / 1.07 * 156.5; 
    
    // This is the comparison for the unit test
     expect(yen).toBe(expected); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One yen should be 0.0196 pounds", function() {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js');

    // Use the function like its supposed to be used
    const pounds = fromYenToPound(3.5);

    // If 1 pound is 179.9 yen, then 3.5 yen should be (3.5 * 0.0056)
    const expected = 3.5 / 156.5 * 0.87; 
    
    // This is the comparison for the unit test
     expect(pounds).toBe(expected); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})