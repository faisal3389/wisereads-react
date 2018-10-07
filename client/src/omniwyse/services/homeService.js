import  axios  from "./axios";

const HomeService = {

    async getBooks() {
        try {
          const response = await axios.get('/books');
          console.log(response);
          return response.data;
        } catch (error) {
          console.error(error);
        }
      },

      async getBookById(id) {
        try {
          const response = await axios.get('/books/id');
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      },

      

      async onSearchBooks(value) {

        let data = encodeURIComponent('data')+'='+encodeURIComponent(value)

        try {
          const response = await axios.post('/books/search', data, 
                        {
                            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                        });
          console.log(`${response.data}`)
          return response.data

        } catch (error) {
          console.log(`Error coming from Catch ${error}`)
          alert(`${error}`)
          return error;
        }
      },
}

export default HomeService;