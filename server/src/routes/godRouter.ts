const express = require("express");
const godController = require("../controllers/godController");

const router = express.Router();

router.route("/").get(godController.getAll);

module.exports = router;
