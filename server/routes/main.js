const express = require('express')
const router = express.Router()

const { sendData, symbolSearch } = require("../controllers/main")

router.get("/api", sendData)
router.get("/symbolSearch", symbolSearch)




module.exports = router