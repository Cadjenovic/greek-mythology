const express = require("express");
const beingController = require("../controllers/beingController");

const router = express.Router();

router.route("/").get(beingController.getAll);
router.route("/name").get(beingController.getByName);

module.exports = router;
