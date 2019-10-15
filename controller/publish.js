var amqp = require('amqplib/callback_api');
exports.publish = (req, res) => {
    amqp.connect('amqp://localhost', function (error0, connection) {
        if (error0) {
            throw error0;
        }
        connection.createChannel(function (error1, channel) {
            if (error1) {
                throw error1;
            }
            var exchange = 'logs';
            var msg = "Hello World!"

            channel.assertExchange(exchange, 'fanout', {
                durable: false
            });
            channel.publish(exchange, '', Buffer.from(msg));
            console.log("Sent:", msg);
        });
    });
}