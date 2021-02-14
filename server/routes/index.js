const express = require('express');
const path = require('path');
const db = require('../models')

const router = express.Router();

router.get('/boardList', (req, res) => {
    db.BOARD1.findAll({
        include: [
            {
                model: db.USER,
                attributes: ['user_id']
            }
        ]
    })
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            console.error(err)
            res.send(err)
        })
})

router.post('/post', (req, res) => {
    console.log(req.body);
    res.send('hi');
});

/* GET home page. */
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/dist', 'index.html'));
});

module.exports = router;
