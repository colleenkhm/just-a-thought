// heroku floating-oasis-63194
// https://floating-oasis-63194.herokuapp.com/
const express = require('express');
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes")

const PORT = process.env.port || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", apiRoutes);
app.use("/", htmlRoutes)
app.listen(3001, () => {
    console.log(`API server now on https://localhost/` + PORT);
});