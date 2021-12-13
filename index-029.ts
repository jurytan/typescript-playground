// Union types allow you to define specific types that can be used with the same function
function printNumsAndStrings(statement : string | number) {
    console.log(`ℹ️ LOG:: ${statement}`);
  }
  
  printNumsAndStrings('hello!');printNumsAndStrings(2);