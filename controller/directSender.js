var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function (error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function (error1, channel) {
        if (error1) {
            throw error1;
        }
        var exchange = 'direct_logs';
        // var args = process.argv.slice(2);
        // var msg = args.slice(1).join(' ') || 'Hello World!';
        // var severity = (args.length > 0) ? args[0] : 'info';
        var msg = "hello world!";
        channel.assertExchange(exchange, 'direct', {
            durable: false
        });
        const arr = ["red", "blue", "green"];
        arr.forEach(Element => {
            channel.publish(exchange, Element, Buffer.from(msg));
            console.log(" [x] Sent %s: '%s'", "red", msg);
        })
    });

});