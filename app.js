const express = require("express");

const app = express();
const bodyparser = require("body-parser");

const port = process.env.PORT || 4004;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

const routes = require("./routes/userRoutes")
routes(app); 




app.listen(port, ()=>{
    console.log(`server started on port ${port}`)
})


