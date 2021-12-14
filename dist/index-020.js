// ... stands for a rest parameter, which basically means 0 or more of the following parameters
// also known as an spread syntax iirc
// it must always resolve to an array type
function addPower(p, ...numsToAdd) {
    let answer = 0;
    for (let i = 0; i < numsToAdd.length; i++) {
        // ** is some number to the power of another (x^y)
        answer += numsToAdd[i] ** p;
    }
    return answer;
}
//   addPower('a string', 4, 5, 6);
