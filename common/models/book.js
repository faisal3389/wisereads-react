'use strict';

var GoogleBooks = require('google-books-search');
var formidable = require('formidable');

module.exports = function(Book) {
    Book.getImageUrl = function(title){
        return new Promise(function(resolve,reject){
            GoogleBooks.search(title, function(error, results) {
                if ( ! error ) {
                    console.log("getting results from google search api");
                    resolve({"imageurl":results[0].thumbnail,"description":results[0].description})
                } else {
                    console.error(error);
                   reject(error)
                }
            });
        })
    }


        /**
     * Search for books given search term
     * @param {string} data Enter Search term you want to search
     * @param {Function(Error)} callback
     */

    Book.search = function(data, callback) {
        Book.find({"where":{ "$text" : { "search" : data }}}, function(err, books){
            if (!err){
                console.log("getting books that matches search term")
                callback(null, books);
            } 
            else{
                callback(err,null)
            }
        });
    };
 
    Book.remoteMethod(
        'search', {
          http: {
            path: '/search',
            verb: 'post'
          },
          description:"Search for Books given a Search Term",
          accepts: [{arg: 'data', type: 'string',description:"Enter your Search Term"},
        ],
          returns: {
            arg: 'books', type: 'string'
          }
        }
    );
    
    Book.beforeRemote('create',function(ctx,book,next){
        var body = ctx.req.body
         var t = Book.getImageUrl(body.title)
         t.then((data) => {
            body.image_url = data.imageurl
            body.description = data.description
            next();
        })
    });
};
