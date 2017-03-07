import express from 'express';
import { Routes } from './controllers/Routes'

/***************************************/
/*         Delacrations                */
/**************************************/
const app = express();
const port = 3000;
var mRoute = new Routes;

/***************************************/
/*            Routes                   */
/***************************************/

app.get("/",mRoute.home);
app.post("/api/login",mRoute.login);





app.listen(port,()=>{
    console.log("Magic happens at " + port);
});