// in keyword => finds out if specific field/property exists on object
// acts as a type guard
type Cat = {
    name: string;
    run: () => string;
  }
  
  type Fish = {
    name: string;
    swim: () => string;
  }
  
  const siameseCat = { 
    name: 'Proxie', 
    run: () => 'pitter pat'
  }
  
  const bettaFish = { 
    name: 'Neptune', 
    swim: () => 'bubble blub'
  }
  
  function move(pet: Cat | Fish) {
    if ('run' in pet) {
      return pet.run();
    }
    if ('swim' in pet) {
      return pet.swim();
    }
  }
  
  console.log(move(siameseCat))