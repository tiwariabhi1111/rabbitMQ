var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function (error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function (error1, channel) {
        if (error1) {
            throw error1;
        }
        channel.assertQueue("queue", {
            durable: true
        });
        channel.prefetch(1);//This tells RabbitMQ not to give more than one message to a worker at a time
        channel.consume("queue", function (msg) {
            console.log("message recieved as:", msg.content.toString());
        }, {
            noAck: true
        });
    });
});