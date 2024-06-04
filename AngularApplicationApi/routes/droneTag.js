const db = require('../db/db');
const router = require("express").Router();

router.get('/positionreport/:id', async (req, res, next) => {
    const database = await db.get();
    let positionreport = await database.positionreport.find({
        selector: {
            id: {
                $eq: req.params['id']
            }
        }
    }).exec();
    res.send(positionreport);
});

router.get('/positionreport', async (req, res, next) => {
    const database = await db.get();
    let positionreport = await database.positionreport.find().exec();
    res.send(positionreport);
});

router.post('/positionreport', async (req, res, next) => {
    const database = await db.get();
    const json = req.body;
    await database.positionreport.insert(json);
    res.status(201).json(json);
});

module.exports = router;