let customersArray = ['Custy Stomer', 'C. Oostomar', 'C.U.S. Tomer', 3432434, 'Custo Mer', 'Custopher Ustomer', 3432435, 'Kasti Yastimeur'];

//Write Your Code here:
function checkCustomersArray(array) {
  for (let customer of array) {
    if (typeof(customer) == 'number') {
      console.log(`Type error: ${customer} should be a string!`);
    }
  }
}

function stringPush(val) {
  if (typeof(val) == 'string') {
    customersArray.push(val);
  }
}

checkCustomersArray(customersArray);