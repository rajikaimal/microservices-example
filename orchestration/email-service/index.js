const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3001 || process.env.EMAIL_SERVICE;

app.use(bodyParser.json());

app.post("/api/v1/email", (req, res) => {
    // send email
});

app.listen(PORT, () => {
    console.log(`email-service running at PORT ${PORT}`);
});
