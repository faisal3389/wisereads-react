import  axios  from "./axios";

const CartService = {

    async addToCart(product, email) {

        let data = JSON.stringify({
          isBuy: false,
          isRent: true,
          no_of_days: 1,
          price: product.price,
          totPrice: 20,
          title: product.title,
          image_url: product.image_url,
          quantity: 1,
          book_id: product.id,
          email: email,
          status:'string',

        })
        console.log(data)

        try {
          const response = await axios.post('/carts', data, 
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

      async onOrderRequest(order) {

        let data = JSON.stringify({
          total_amount: order.total_amount,
          delivery_type: order.delivery_type,
          email: order.email,
          status_id: order.status_id,
          due: order.due,
          paid: order.paid,
          order_date: order.order_date,
          delivery_time: order.delivery_time,

        })
        console.log(data)

        try {
          const response = await axios.post('/orders', data, 
            {
                headers: {'Content-Type': 'application/json'}
            });
         console.log(response)
        // this.onDeleteCartItems(data.email)
          return response.data;
        } catch (error) {
          console.log(error);
          return error
        }
      },

      async onDeleteCartItems(email) {

        /* let data = JSON.stringify({
          email: order.email,
        }) */

        let data = encodeURIComponent('data')+'='+encodeURIComponent(email)
        console.log(data)

        try {
          const response = await axios.post('/carts/delete', data, 
            {
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            });
         console.log(response)
          return response.data;
        } catch (error) {
          console.log(error);
          return error
        }
      },

    async removeItemFromCart(productId) {

      let data = JSON.stringify({
        id: productId

      })
//{params: {id: productId}}
        try {
            const response = await axios.delete(`/carts/${productId}`,  
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

    async getCartItems(email) {

      let data = JSON.stringify({
        email: email,
      })
        try {
          const response = await axios.get(`/carts?filter={"where": ${data}}`);
          console.log(response);
          
          return response.data;
        } catch (error) {
          console.error(error);
        }
      },

}

export default CartService;