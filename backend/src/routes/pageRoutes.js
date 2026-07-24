const express = require("express");
const router = express.Router();

const {
  createPage,
  getAllPages,
  getPageById,
  updatePage,
} = require("../controllers/pageController");

router.post("/", createPage);
router.get("/", getAllPages);
router.get("/:id", getPageById);
router.put("/:id", updatePage);

module.exports = router;
