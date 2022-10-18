const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config/config");

mongoose.connect(config.mongoose.url, config.mongoose.options).then(()=>
{
    console.log("Connected to mongoDB")
    app.listen(config.port , ()=>
    {
        console.log("App listening on port  : " + config.port);
    })
}).catch(error=>
    {
      console.log("Cannot connect to mongoDB")  ;
    })