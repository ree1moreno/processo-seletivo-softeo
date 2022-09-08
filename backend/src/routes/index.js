const express = require("express");
const clientController = require("../controller/clients.controller");
const { itemValidate } = require("../middlewares");

const router = express.Router();

router.get("/", clientController.listAll);
router.get("/:id", clientController.listById);

router.post("/", itemValidate, clientController.createItem);

module.exports = router;
