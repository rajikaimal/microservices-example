const express = require("express");
const app = express();
const PORT = 3001;

app.post("/api/v1/email", (req, res) => {
    // send email
});

app.listen(PORT, () => {
    console.log(`email-service running at PORT ${PORT}`);
});
