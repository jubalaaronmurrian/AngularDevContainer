const express = require('express');
const cors = require('cors');

const app = express();

const router = express.Router();

const ports = 3000;

router.use('/dronetag',require('./routes/droneTag'));

app.use(cors());
app.use(express.json({strict:false}));
app.use(express.urlencoded({extended: true}));
app.use('/api',router);

let server = app.listen(ports,function(){
    console.log(`Server is listening on http://localhost:${ports}`);
});