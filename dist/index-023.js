//  you can use this to define a more strict enum that contains a string value
var PetString;
(function (PetString) {
    PetString["Hamster"] = "HAMSTER";
    PetString["Rat"] = "RAT";
    PetString["Chinchilla"] = "CHINCHILLA";
    PetString["Tarantula"] = "TARANTULA";
})(PetString || (PetString = {}));
let petOnSaleTS_2 = PetString.Chinchilla;
let ordersArrayTS_2 = [
    [PetString.Rat, 2],
    [PetString.Chinchilla, 1],
    [PetString.Hamster, 2],
    [PetString.Chinchilla, 50]
];
// Write your code below:
//   ordersArrayTS.push(['HAMSTER', 1]);
