const express = require('express');
const router = express.Router();
const sender = require('../controller/sender');
// const reciever = require('../controller/reciever');
router.post('/sender', (req, res) => {
    sender.senderFunction(req, res);
})
// router.post('/reciever', (req, res) => {
//     reciever.recieverFunction(req, res);
// })
module.exports = router;