const axios = require('axios');
const fs = require('fs');

axios.get("https://jsonplaceholder.typicode.com/todos").then(
        response => {
            const a = response.data;
            console.log(response);
            let json = JSON.stringify(a);
            console.log(typeof json); 
            console.log(json);
            fs.writeFile('otvet.json', json, function (err) {
                if (err) return console.log(err);
                console.log('json file has created');
            });
        }
    )
    .catch(function (error) {
        console.log(error);
    })