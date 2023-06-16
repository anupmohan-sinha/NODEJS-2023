
//download two lib for typescript
//compatible libraries to develop node js with typescript

//yarn add express @types/express --save

//import express module
import * as express from "express";

let app: any = express();
//app object used to develop the rest services
//eg. GET, POST, PUT, DELETE, OPTIONS, TRACE ,...


app.get('/anupm', (req: any, res: any): any => {
    res.status(200).json({'message': 'Welcome to TypeScript with nodejs'});
});

app.listen(8080, () => {
    console.log('server started successfully!')
})

//tsc 03_express.ts
//This process is known as transplilation