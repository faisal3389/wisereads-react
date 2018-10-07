'use strict';

var loopback = require('loopback');
var boot = require('loopback-boot');
var cors = require('cors');
var bodyParser = require('body-parser');
var multer = require('multer');
var formidable = require('formidable');
const csv = require('csvtojson');
const path = require('path');



var app = module.exports = loopback();

// configure view handler
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// configure body parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(loopback.token());

app.use(cors());


app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});

app.route('/bulk').post(function(req,res){
  var form = new formidable.IncomingForm();
  form.parse(req, function (err,fields,files){
      if (err){
          console.error(err);
          return;
      }
      var path = files.filetoupload.path;
      async function asyncCSV() {
          const jsonArray = await csv({ignoreEmpty:true}).fromFile(path)
          var Book = app.models.Book
          jsonArray.forEach((element)=>{
            Book.create(element)
          })
        res.json({"status":"success"})
      }
      asyncCSV();
  })
})
