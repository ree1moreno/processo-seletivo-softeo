const express = require("express");
const clientController = require("../controller/clients.controller");

const router = express.Router();

router.get("/", clientController.listAll);

module.exports = router;
