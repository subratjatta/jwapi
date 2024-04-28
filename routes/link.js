const express = require("express");
const ctrl = require("../controllers/link")

const router = express.Router();

router.get("/", ctrl.demo);

router.get("/:id",ctrl.getLink)

module.exports = router;