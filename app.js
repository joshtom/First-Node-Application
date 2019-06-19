// Problem: We need a simple way to look at user's badge count and Javascript Points

//Solution: Use Node.js to connect to treehouse's API to get profile information to print out

//Require https module
const https = require('https');

//Print error Messages
function printError(error) {
    console.log(error.message);
}
//Function to print message to the console
function printMessage(username, badgeCount, points) {
    const message = `${username} has ${badgeCount} total badge(s) and ${points} points in Javascript`;
    console.log(message);
}
function getProfile(username) {
    try{
    // Connect to the API URL (https://teamtreehouse.com/username.json)
    const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
            if(response.statusCode === 200) {
                let body = "";
                // Read the Data
                response.on('data', data => {
                    body += data.toString();
                });
                response.on('end', () => {
                    try{
                    // Parse the data
                    const profile = JSON.parse(body);
                    // console.dir(profile);
                    printMessage(username, profile.badges.length, profile.points.JavaScript);
                    // Print the data
                } catch(error) {
                    printError(error);
                }
                });
            
        } else {
            const message = `There was an error getting the profile for ${username} (${response.statusCode})`;
            const statusCodeError = new Error(message);
            printError(statusCodeError);
        }
            
    });

    // Handling Errors
    request.on('error', printError);
 } catch(error){
    printError(error);
 }
}
// Restructuring and putting them into the array
// Also using the process method

const users = process.argv.slice(2);
users.forEach(getProfile);