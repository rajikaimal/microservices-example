const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const emailService = require("./email");
const PORT = 3001 || process.env.EMAIL_SERVICE;

app.use(bodyParser.json());

app.post("/api/v1/email", async(req, res) => {
    const emailResult = await emailService({to: "test@gmail.com", from: "microservice@gmail.com"});
    res
        .json({status: true})
        .status(200);
});

app.listen(PORT, () => {
    console.log(`email-service running at PORT ${PORT}`);
});
