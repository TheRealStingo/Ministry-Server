const app = require("express")()
const connectDB = require("./db/connect")
const ROUTES = require("./api/routes/router")
const bodyParser = require("body-parser")
const cors = require("cors")
app.use(cors({origin:"*"}))
app.use(bodyParser.json())
app.use("/api",ROUTES)







app.listen(300,()=>{
    connectDB().then(()=>{
        console.log("good")
    })
    .catch(err=>console.log(err))
    
})
