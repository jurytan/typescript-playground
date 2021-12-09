//  you can use this to define a more strict enum that contains a string value
enum PetString {
    Hamster = 'HAMSTER',
    Rat = 'RAT',
    Chinchilla = 'CHINCHILLA',
    Tarantula = 'TARANTULA'
  }
  
  let petOnSaleTS_2 : PetString = PetString.Chinchilla;
  let ordersArrayTS_2 : [PetString, number][]  = [
    [PetString.Rat, 2], 
    [PetString.Chinchilla, 1], 
    [PetString.Hamster, 2], 
    [PetString.Chinchilla, 50]
  ];
  
  // Write your code below:
//   ordersArrayTS.push(['HAMSTER', 1]);