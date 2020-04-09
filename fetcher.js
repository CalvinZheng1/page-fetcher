
const args = process.argv.slice(2)

const fs = require('fs');
const request = require('request');

request(args[0], (error, response, body) => {
  if (error) {
    return console.log(error);
  }
  if (response.statusCode === 200) {
    console.log('Connected To Site!')
      fs.writeFile(args[1], body, (err) => {
        if (err) {
          return console.log(err);
        }

        fs.stat(`./${args[1]}`, (error, stats) => {
          console.log(`Downloaded and saved ${stats.size} bytes to ./index.html`); //body.length can work as well
        })
      })
  }
})












// const request = require('request');
// request('http://www.google.com', (error, response, body) => {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });


// fs 