const express = require('express');

const app = express();

const router = express.Router();

const ports = 3000;

router.use('/angularApplication',require('./routes/angularApplication'));

app.use('/api',router);

let server = app.listen(ports,function(){
    console.log(`Server is listening on http://localhost:${ports}`);
});