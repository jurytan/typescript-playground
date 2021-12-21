type Metal = {
    magnetize: () => string;
  }
  
  type Glass = {
    melt: () => string;
  }
  
  const iron = {
    magnetize: () => 'Electromagnet activated'
  }
  
  const bottle = {
    melt: () => 'Furnace set to 2,700 degrees'
  }
  
  
  // Similar to earlier, since we have our guard clauses here
  // we can assume that it is a different type if it doesn't go in that block
  function recycle(trash: Metal | Glass) {
    // Add your code below:
    if ('magnetize' in trash) {
      return trash.magnetize();
    }
    
    return trash.melt();
  }
  
  console.log(recycle(iron));