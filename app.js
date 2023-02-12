const app = require("express")()
const connectDB = require("./db/connect")
const ROUTES = require("./api/routes/router")
const INVALID_ROUTE = require("./api/middlewares/invalidRoute")
const bodyParser = require("body-parser")
const cors = require("cors")
app.use(cors({origin:"*"}))
app.use(bodyParser.json())
app.use("/api",ROUTES)
app.use("*",INVALID_ROUTE)



app.listen(300,()=>{
    connectDB().then(()=>{
        console.log("good")
    })
    .catch(err=>console.log(err))
    
})
