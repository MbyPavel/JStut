var url = 'http://localhost:3000/log';

function log(message){
    // Send an HTTP request to the server
    console.log(message);
}

module.exports.log = log;

