var routedata = require('../router/route');
var amqp = require('amqplib/callback_api');
exports.senderFunction = (req, res) => {
    amqp.connect('amqp://localhost', function (error0, connection) {
        if (error0) {
            throw error0;
        }
        connection.createChannel(function (error1, channel) {
            if (error1) {
                throw error1;
            }

            var msg = req.body.msg;
            channel.assertQueue("queue", {
                durable: true   // queue not lost if the rabbitMQ server restarted
            });
            channel.sendToQueue("queue", Buffer.from(msg)); // to be persistent(msg)

            res.send("msg sent");

        })


    });
}

