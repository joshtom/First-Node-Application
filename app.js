// Problem: We need a simple way to look at user's badge count and Javascript Points

//Solution: Use Node.js to connect to treehouse's API to get profile information to print out

//Function to print message to the console
function printMessage(username, badgeCount, points) {
    const message = `${username} has ${badgeCount} total badge(s) and ${points} points in Javascript`;
    console.log(message);
}
printMessage("Joshua", 100, 2000000);
// Connect to the API URL (https://teamtreehouse.com/username.json)
// Read the Data
// Parse the data
// Print the data