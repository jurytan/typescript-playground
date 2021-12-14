// the ? after status means it's optional
// when status is not passed in, the null creates a truthy value of false
// which is why the OR operator works here
function proclaim_1(status) {
    console.log(`I'm ${status || 'not ready...'}`);
}
proclaim_1();
proclaim_1('ready?');
proclaim_1('ready!');
