 import  dotenv  from "dotenv";
import {app} from "./src/app.js"

dotenv.config({
    path: "./.env" // Ensure the correct path to the .env file
})
app.listen(3000 , ()=>{
 console.log("hello bhai ready for server");
 
})