import  axios from "./axios";

export const SignupService = {

    async signupRequest(userObj) {

        let data = JSON.stringify({
          username: userObj.username,
          mobile: userObj.password,
          email: userObj.email,
          password: userObj.password
        })
        console.log(data)

        try {
          const response = await axios.post('/users', data, 
                        {
                            headers: {'Content-Type': 'application/json'}
                        });
                       // alert(`${response}`)
         console.log(response)
          return response.data;

        } catch (error) {
          console.log(error);
          alert(`${error}`)
        }
      },
}
