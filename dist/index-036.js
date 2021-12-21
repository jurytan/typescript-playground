const siameseCat = {
    name: 'Proxie',
    run: () => 'pitter pat'
};
const bettaFish = {
    name: 'Neptune',
    swim: () => 'bubble blub'
};
function move(pet) {
    if ('run' in pet) {
        return pet.run();
    }
    if ('swim' in pet) {
        return pet.swim();
    }
}
console.log(move(siameseCat));
