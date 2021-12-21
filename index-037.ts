type Pasta = {
    menuName: string;
    boil: () => string;
  }
  
  type Meat = {
    menuName: string;
    panFry: () => string;
  }
  
  const fettuccine = {
    menuName: 'Fettuccine',
    boil: () => 'Heat water to 212 degrees',
  }
  
  const steak = {
    menuName: 'New York Strip Steak',
    panFry: () => 'Heat oil to 350 degrees',
  }
  
  // typescript can automatically determine the type of a union type
  // as long as you have a guard, so you dont have to explicity define it
  function prepareEntree(entree: Pasta | Meat) {
    if ('boil' in entree) {
      return entree.boil();
    } else {
      return entree.panFry();
    }
  }
  
  console.log(prepareEntree(fettuccine));