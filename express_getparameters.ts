//read get parameters in expressjs

/* import * as express from 'express';
let app:any = express();
app.get('/sample/user/:uname/password/:upwd',(req:any, res:any) => {
    if (req.params.uname === 'anup' && req.params.upwd === 'mohan') {
        res.status(200).json({login: 'success'});
    } else {
        res.status(400).json({login: 'fail'});
    }
});

app.listen(8080, () => {
    console.log('server started successfully');
}); */


//http://localhost:8080/sample?uname=anupm&upwd=sinha123

//http://localhost:8080/login?uname=admin&upwd=admin
//req.query.uname
//req.query.upwd


/* import * as express from 'express';
let app:any = express();
app.get('/login/', (req:any, res:any): any => {
    if (req.query.uname === 'admin' && req.query.upwd === 'admin') {
        res.status(200).json({'login': 'success'});
    } else {
        res.status(401).json({'login': 'fail'});
    }
});

app.listen(8080, () => {
    console.log('server started!');
    
}); */


//http://localhost:8080/login/admin/mypassword get admin and mypassword from url in express js

import * as express from 'express';
let app: any = express();
app.get('/login/:user/:password', (req:any, res:any) => {
    const {user, password} = req.params;
    res.status(200).json(`username : ${user}, password: ${password}`);
    //res.status(200).json({'message': 'login successful!'});
});
app.listen(8080, () => {
    console.log('server started!');
})
