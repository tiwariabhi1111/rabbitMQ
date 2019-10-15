var amqp = require('amqplib/callback_api');
exports.topicExchange = (req, res) => {
    amqp.connect('amqp://localhost', function (error0, connection) {
        if (error0) {
            throw error0;
        }
        connection.createChannel(function (error1, channel) {
            if (error1) {
                throw error1;
            }
            var exchange = 'topic_logs';
            // var args = process.argv.slice(2);
            // var key = (args.length > 0) ? args[0] : 'anonymous.info';
            // var msg = args.slice(1).join(' ') || 'Hello World!';
            var msg = "hello Abhishek!";
            var key = "quick.orange.rabbit.hello"
            channel.assertExchange(exchange, 'topic', {
                durable: false
            });
            channel.publish(exchange, key, Buffer.from(msg));
            console.log(" [x] Sent %s:'%s'", key, msg);
        });
        setTimeout(function () {
            connection.close();
            process.exit(0)
        }, 500);

    });
}