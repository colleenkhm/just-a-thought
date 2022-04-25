// heroku floating-oasis-63194
// https://floating-oasis-63194.herokuapp.com/
const express = require('express');

const PORT = process.env.port || 3001;
const app = express();

app.listen(3001, () => {
    console.log(`API server now on PORT 3001`);
});