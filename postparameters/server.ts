//import express module
import * as express from 'express';

//import body-parser module
//body-parser module used to read the post parameters
import * as bodyparser from 'body-parser';

//create the rest object
let app: any = express();
//this rest object used to develop the rest services GET, POST, PUT, DELETE etc.

//MIME Type - the communication language between client and server

//set the MIME Type
app.use(bodyparser.json());

//receive form data form client and parse the data (extended eg. uname, upwd...)
app.use(bodyparser.urlencoded({extended: false}));

//authorization code
let auth = (req:any, res:any, next: any) => {
    let allHeaders:any = req.headers;
    let token:any = allHeaders.token;
    if (token === 'nodejs') {
        next();
    } else {
        res.status(401).json({auth: 'fail'});
    }
}

app.post('/login', [auth], (req:any, res:any):any => {
    if(req.body.uname === 'admin' && req.body.upwd === 'admin'){
        res.status(200).json({login: 'success'});
    } else {
        res.status(401).json({login: 'fail'});
    }
});

/* app.listen(process.env.PORT, () => {
    console.log('server started!');
}); */

app.listen(8080, () => {
    console.log('server started!');
});

