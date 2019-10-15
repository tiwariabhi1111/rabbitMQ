const express = require('express');
const route = require('./router/route')
const app = express();
app.use(express.json());
app.use(route);
app.listen(9000, () => {
    console.log('server started on post 9000');
})
