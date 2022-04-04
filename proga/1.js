const axios = require('axios');

axios({
    url: 'https://jsonplaceholder.typicode.com/todos', 
    method: 'GET',
    responseType: 'blob', 
}).then((response) => {
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;