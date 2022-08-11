const express = require('express')
const router = express.Router()

const { sendData, sendNudesOk } = require("../controllers/main")

router.get("/api", sendData)
router.get("/sendNudes", sendNudesOk)




module.exports = router