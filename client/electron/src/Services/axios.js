import * as axios from 'axios';

var instance = axios.create();
instance.defaults.baseURL =   `http://localhost:3000/api` // 'http://35.211.12.205'; //serverURL; //
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