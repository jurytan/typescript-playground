// Using this special block creates documentation
// Just keep to this structure in the future and you'll be fine
/**
 * Uses the fruits passed in to make some fruit salad.
 *
 * @param fruit1 - The first fruit for the salad
 * @param fruit2 - The second fruit for the salad
 * @returns A console log of the `fruit1` and `fruit2` salad
 */
function makeFruitSalad2(fruit1, fruit2) {
    let salad = fruit1 + fruit2 + fruit2 + fruit1 + fruit2 + fruit1 + fruit1;
    console.log(salad);
}
/**
 * Let's us know what the status is
 *
 * @param status - What is our current status
 * @param repeat - How many times to repeat the status message
 * @returns A console log of the current `status` repeated `repeat` times
 */
function proclaim(status = 'not ready...', repeat = 1) {
    for (let i = 0; i < repeat; i += 1) {
        console.log(`I'm ${status}`);
    }
}
