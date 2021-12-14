// you use = <value> in order to assign a default value to an argument
// notice there's no parameter type annotation (i.e. status : string)
// this is because the type will be naturally inferred from the default value
function proclaim_2(status = 'not ready...', repeat = 1) {
    for (let i = 0; i < repeat; i += 1) {
        console.log(`I'm ${status}`);
    }
}
proclaim_2();
proclaim_2('ready?');
proclaim_2('ready!', 3);
