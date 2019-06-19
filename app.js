// Problem: We need a simple way to look at user's badge count and Javascript Points

//Solution: Use Node.js to connect to treehouse's API to get profile information to print out
const profile = require ('./profile');
// Restructuring and putting them into the array
// Also using the process method

const users = process.argv.slice(2);
users.forEach(profile.get);