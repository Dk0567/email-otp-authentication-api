require("dotenv").config();
const app = require("./src/app.js");


app.listen(process.env.PORT,()=>{
    console.log(`server is runnig on port ${3000}`)
})