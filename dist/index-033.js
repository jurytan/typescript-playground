// you can only call functions that are shared across all types of the union
function getFriendNameFromEvent(event) {
    return event.displayName || event.username;
}
const newEvent = {
    username: 'vkrauss',
    displayName: 'Veronica Krauss',
};
const friendName = getFriendNameFromEvent(newEvent);
console.log(`You have an update from ${friendName}.`);
