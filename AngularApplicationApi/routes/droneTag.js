
const db = require('../db/db');
const router = require("express").Router();

router.get('/positionreport/:id',async (req,res,next)=>{
    const database = await db.get();
    let positionreport = await database.positionreport.findByIds([req.params['id']]).exec();
    res.send(positionreport);
});

router.post('/positionreport',async (req,res,next)=>{
    const database = await db.get();
    await database.patch(req.body);
});

module.exports = router;