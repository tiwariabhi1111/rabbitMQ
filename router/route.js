const express = require('express');
const router = express.Router();
const sender = require('../controller/sender');
const reciever = require('../controller/reciever');
const exchangeSend = require('../controller/exchangeSender');
const exchangeRecieve = require('../controller/exchangeReciever');
const pub = require('../controller/publish');
const sub = require('../controller/subscribe');
const topicexchange = require('../controller/topicExchange');
const topicrecieve1 = require('../controller/topicRecieve1');
const topicrecieve2 = require('../controller/topicRecieve2');
const rpc_client = require('../controller/rpcClient');
const rpc_server = require('../controller/rpcServer');
router.post('/sender', (req, res) => {
    sender.senderFunction(req, res);
})
router.post('/reciever', (req, res) => {
    reciever.recieverFunction(req, res);
})
router.post('/exchangeSender', (req, res) => {
    sender.exchangeSender(req, res);
})
router.post('/exchangeReciever', (req, res) => {
    reciever.exchangeReciever(req, res);
})
router.post('/publish', (req, res) => {
    pub.publish(req, res);
})
router.post('/subscribe', (req, res) => {
    sub.subscribe(req, res);
})
router.post('/topicExchange', (req, res) => {
    topicexchange.topicExchange(req, res);
})
router.post('/topicRecieve1', (req, res) => {
    topicrecieve1.topicRecieve1(req, res);
})
router.post('/topicRecieve2', (req, res) => {
    topicrecieve2.topicRecieve2(req, res);
})
router.post('/client', (req, res) => {
    rpc_client.client(req, res);
})
router.post('/server', (req, res) => {
    rpc_server.server(req, res);
})
module.exports = router;