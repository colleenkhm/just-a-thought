// heroku floating-oasis-63194
// https://floating-oasis-63194.herokuapp.com/
const express = require('express');
const htmlRoutes = require("./Develop/routes/htmlRoutes.js");
const apiRoutes = require("./Develop/routes/apiRoutes.js")

const PORT = process.env.port || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./public'))
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);
app.listen(PORT, () => {
    console.log(`Now listening on PORT: ${PORT}`);
});