import axios from './axios';

// import { errorHandling } from '../common';

const UserService = {
        getCallToAction() {
        return axios.get('api/user/1').then(response => response.data)
            //.catch(errorHandling);
    },
    
        async getUser() {
            try {
              const response = await axios.get('/user?ID=12345');
              console.log(response);
            } catch (error) {
              console.error(error);
            }
          },

          async sendUser() {
            try {
              const response = await axios.post('/user', {
                firstName: 'Fred',
                lastName: 'Flintstone'
              });
              console.log(response);
            } catch (error) {
              console.error(error);
            }
          },
    
    sendData(){
        axios.post(
            'api/music_albums', 
            {
               'param1': 'value1',
               'param2': 'value2',
               //other data key value pairs
            },
            {
               headers: {
                   'api-token': 'xyz',
                    //other header fields
               }
            }
        );
    },
    getDataWithToken(){
        axios.get("api/Inventory/GetCategories", { 
        headers: {
        'Authorization': 'token-from-auth-api'
        }
        }).then((response) => {
            console.log(response.data);
        })
    }
}
export default UserService;