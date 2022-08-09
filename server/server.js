const express = require('express')
const app = express()
const port = 5000

const cors = require("cors");
app.use(cors());

app.get("/api", (req, res) => {
    res.json({ "users": ["userOne", "userTwo", "userThree"] })
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})