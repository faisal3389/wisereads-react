import  axios from "./axios";

export const LoginService = {

    async loginRequest(userCredentials) {

        let data = JSON.stringify({
            email: userCredentials.email,
            username: userCredentials.username,
            password: userCredentials.password
        })

        try {
          const response = await axios.post('/users/login', data, 
                        {
                            headers: {'Content-Type': 'application/json'}
                        });
          console.log(`${response.data}`)
          //return response.data;
          return response.data

        } catch (error) {
          console.log(`Error coming from Catch ${error}`);
          return error;
          
          // for testing
          //return 'success'
        }
      },

      async forgotPasswordRequest(email) {

        let data = JSON.stringify({
            email: email,
        })

        try {
          const response = await axios.post('/users/reset', data, 
                        {
                            headers: {'Content-Type': 'application/json'}
                        });
          console.log(`${response.status}`)
          return response.status;

        } catch (error) {
          console.log(`Error :  ${error}`);
          return error;
        }
      },

      async getUserById(id) {
        try {
          const response = await axios.get('/users/'+id);
          console.log(response);
          return response.data;
        } catch (error) {
          console.error(error);
          return error;
        }
      },
}


