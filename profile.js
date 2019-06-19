
//Require https module
const https = require('https');
// Require http module for status code
const http = require('http');
// Require print module for printing out message and Errors
const printMsg = require('./print.js');


function get(username) {
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
                    printMsg.printMessage(username, profile.badges.length, profile.points.JavaScript);
                    // Print the data
                } catch(error) {
                    printMsg.printError(error);
                }
                });
            
        } else {
            const message = `There was an error getting the profile for ${username} (${http.STATUS_CODES[response.statusCode]})`;
            const statusCodeError = new Error(message);
            printMsg.printError(statusCodeError);
        }
            
    });

    // Handling Errors
    request.on('error', printError);
 } catch(error){
    printMsg.printError(error);
 }
}

// Making modules accessible in other files
module.exports.get = get;