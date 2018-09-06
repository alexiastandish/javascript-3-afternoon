/*
  Once you complete a problem, refresh ./destructuring.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.
*/

////////// PROBLEM 1 //////////

// Do not edit the code below.
var carDetails = {
  color: 'red',
  make: 'toyota',
  model: 'tacoma',
  year: 1994,
}
// Do not edit the code above.

/*
  Use object destructuring to save the property values from the object carDetails into new variables. 
*/

const { color, make, model, year } = carDetails

////////// PROBLEM 2 //////////

/*
  In the function below named greeting, it is receiving an object as a parameter. 
  Use object destructuring to save the object properties to new variables. 
  The property names are firstName, lastName, and title.
*/

function greeting(obj) {
  const { title } = obj
  const { firstName } = obj
  const { lastName } = obj

  // Do not edit the code below.
  return 'Hello, ' + title + ' ' + firstName + ' ' + lastName + '!'
  // Do not edit the code above.
}

////////// PROBLEM 3 //////////

/*
  Write a function called totalPopulation that will take in an object.
  That object will have 4 properties named utah, california, texas and arizona.
  The property values will be numbers.
  Use object destructuring to save the property values to new variables.
  Sum up the values and return the total number.
*/

function totalPopulation(obj) {
  var states = ({ utah, california, texas, arizona } = obj)
  return states
}
totalPopulation({ utah: 1, california: 2, texas: 3, arizona: 4 })

////////// PROBLEM 4 //////////

/*
  Write a function called ingredients that will take in an object. 
  This object will have 3 properties named carb, fat, and protein. 
  The property values will be strings. 
  Use object destructuring to save the property values to new variables. 
  Push these new variables to an array and return the array. 
*/

function ingredients(obj) {
  let newArr = []
  const { carb, fat, protein } = obj
  console.log(obj)
  for (let key in obj) {
    newArr.push(obj[key])
  }
  return newArr
}
ingredients({ carb: 'none', fat: 'none', protein: 'all the protein' })

////////// PROBLEM 5 //////////

/*
  Now we will use object destructuring as the function's parameter instead of destructuring the object inside of the function declaration.
  Example:
    function example( {one, two, three} ) {
      return one + two + three
    }

  Write a function called largeNumbers that will take a destructured object as it's parameter.
  The object properties will be named first, second, and third and their values will be numbers.
  Find the smallest number of the three and return that number.
*/

function largeNumbers(obj) {
  const values = []
  for (let key in obj) {
    values.push(obj[key])
    const valuesInOrder = values.sort()
    return valuesInOrder[0]
  }
}
largeNumbers({ first: 123, second: 321, third: 333 })

////////// PROBLEM 6 //////////

/*
  Write a function called numberGroups that will take a destructured object as it's parameter.
  The object properties will be named a, b, and c and their values will be arrays of numbers.
  Find the longest array and return that array.
*/

function numberGroups({ a, b, c }) {
  if (a.length > b.length && a.length > c.length) {
    return a
  } else if (b.length > a.length && b.length > c.length) {
    return b
  } else if (c.length > a.length && c.length > b.length) {
    return c
  }
}
numberGroups({ a: [1, 2, 3], b: [4, 3, 2, 1], c: [1, 1, 1, 1, 1, 1] })
