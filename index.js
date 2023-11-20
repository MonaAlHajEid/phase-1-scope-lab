
// Declare a variable in global scope called `customerName`
// using the `var` keyword and assign it the value 'bob'.
var customerName = 'bob';

// Write a function that accesses the global `customerName` variable and uppercases it.
function upperCaseCustomerName() {
  return customerName.toUpperCase();
}
var customerName = 'bob';
function upperCaseCustomerName() {
return customerName.toUpperCase();
}


// Write a function that, when called, declares a variable called `bestCustomer`
// in global scope and assigns it to be 'not bob'.
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// Write a new function that changes the `bestCustomer` variable to 'maybe bob'.
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Declare a constant in global scope called `leastFavoriteCustomer`
// and assign it some initial value.
const leastFavoriteCustomer = 'someone';

// Write a function that attempts to change the constant `leastFavoriteCustomer`.
// Notice what JavaScript does when you try to change a constant.
function changeLeastFavoriteCustomer() {
  // This line will throw an error and prevent the change of a constant.
  leastFavoriteCustomer = 'someone else';
}

// Export the functions to be used in the tests.
module.exports = {
  customerName,
  upperCaseCustomerName,
  setBestCustomer,
  overwriteBestCustomer,
  leastFavoriteCustomer,
  changeLeastFavoriteCustomer,
};
