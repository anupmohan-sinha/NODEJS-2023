//http:localhost:8080/login?uname=admin&upwd=admin

//import express module
import * as express from 'express';


//use of app object is to create rest services GET, POST, PUT, DELETE, ...
let app: any = express();

//authorization
let auth = (req: any, res: any, next: any) => {
    let allHeaders = req.headers;
    if (allHeaders.token === "anupMohan") {
        next();
    } else {
        res.status(500).json({auth: 'fail'});
    }
}


//get request - authentication
app.get('/login', [auth],(req:any, res:any): any => {
    if (req.query.uname === 'admin' && req.query.upwd === 'admin') {
        res.status(200).json({login: 'login successful!'});
    } else {
        res.status(400).json({login: 'fail again'});
    }
});

//default request
app.get("/", (req:any, res:any):any => {
    res.sendFile('E:/Home/Github/NODEJS-2023/getparameters/index.html');
})

app.listen(8080, () => {
    console.log('server started here!');
});
