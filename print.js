//Function to print message to the console
function printMessage(username, badgeCount, points) {
    const message = `${username} has ${badgeCount} total badge(s) and ${points} points in Javascript`;
    console.log(message);
}

//Print error Messages
function printError(error) {
    console.log(error.message);
}

module.exports.printMessage = printMessage;
module.exports.printError = printError;