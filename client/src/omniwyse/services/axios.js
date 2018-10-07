import * as axios from 'axios';

var instance = axios.create();
instance.defaults.baseURL =   'http://35.241.52.74:80/api'; //'http://localhost:3000/api';
instance.defaults.timeout = 20000;

//interceptors
// instance.interceptors.request.use(function (request) {
//     console.log(`Request: ${request}`);
// });
// instance.interceptors.response.use(function (response) {
//     console.log(`Response: ${response}`);
// });
//...
//and other options

export { instance as default };