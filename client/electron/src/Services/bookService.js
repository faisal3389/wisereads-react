import  axios  from './axios';

const BookService = {

    async addToBook(book) {
        console.log("inside service",book)

        let data = JSON.stringify({
            "author": book.author,
            "cover_page": "string",
            "price": book.price,
            "rent": {
                "rent_per_day":book.rentPerDay,
                "rent_per_week":book.rentPerWeek,
                "rent_per_month":book.rentPerMonth,

            },
            "description": book.description,
            "edition": "string",
            "genres": "string",
            "image_url": "string",
            "isbn_code": "string",
            "no_of_pages": "string",
            "publish_date": "2018-09-03T10:46:38.164Z",
            "publisher": "string",
            "samplePage_url": "string",
            "title": book.title,
            "created_on": "2018-09-03T10:46:38.164Z",
            "modified_on": "2018-09-03T10:46:38.164Z",
            "created_by": "string",
            "modified_by": "string",
            // "email": "string",
            "inventoryId": "string"
        })
        console.log(data)

        try {
          const response = await axios.post('/books', data, 
            {
                headers: {'Content-Type': 'application/json'}
            });
         console.log(response)
          return response.data;

        } catch (error) {
          console.log(error);
          return error
        }
      },
    async removeBook(book) {

        try {
            const response = await axios.post(`/books/${book.id}`, 
            {
                headers: {'Content-Type': 'application/json'}
            });
            console.log(response)
            return response.data;

        } catch (error) {
            console.log(error);
            return error
        }
    },
    async getBooks() {
        try {
          const response = await axios.get('/books');
          console.log(response);
          return response.data;
        } catch (error) {
          console.error(error);
        }
      },

}

export default BookService;