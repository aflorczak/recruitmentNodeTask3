const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.set('PORT', process.env.PORT || 80);
app.set('NODE_ENV', process.env.NODE_ENV || 'production');


app.get('/', (req, res) => {
    res.send('Hello World !');
});



app.listen(app.get('PORT'),null, () => {
    console.log(`
        SERVER: running
        PORT:   ${app.get('PORT')}
        ENV:    ${app.get("NODE_ENV")}
    `);
})