'use strict';

module.exports = function(Cart) {
    //Calculating total Price of one Cart before saving cart model
    Cart.beforeRemote('create',function(ctx,cart,next){
        var body = ctx.req.body
        body.totPrice = (10)*(body.quantity)*(body.no_of_days)
        next();
    });


    Cart.deleteByEmail = function(data, callback) {
        Cart.remove({"email":data}, function(err, carts){
            if (!err){
                console.log("getting books that matches search term")
                callback(null, carts);
            } 
            else{
                callback(err,null)
            }
        });
    };

    Cart.remoteMethod(
        'deleteByEmail', {
          http: {
            path: '/delete',
            verb: 'post'
          },
          description:"Delete all cart for given email",
          accepts: [{arg: 'data', type: 'string',description:"Enter your Email id"},
        ],
          returns: {
            arg: 'cart', type: 'string'
          }
        }
    );
};
