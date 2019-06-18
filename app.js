// Problem: We need a simple way to look at user's badge count and Javascript Points

//Solution: Use Node.js to connect to treehouse's API to get profile information to print out

//Require https module
const https = require('https');
const username = "chalkers";
//Function to print message to the console
function printMessage(username, badgeCount, points) {
    const message = `${username} has ${badgeCount} total badge(s) and ${points} points in Javascript`;
    console.log(message);
}
// Connect to the API URL (https://teamtreehouse.com/username.json)
    const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
            let body = "";
            // Read the Data
            response.on('data', data => {
                body += data.toString();
            });
            response.on('end', () => {
                 // Parse the data
                const profile = JSON.parse(body);
                console.dir(profile);
                // Print the data
            })
           
            
    });
