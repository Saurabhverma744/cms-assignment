const express = require("express");
const router = express.Router();

const {
  createPage,
  getAllPages,
  getPageById,
  updatePage,
  deletePage,
} = require("../controllers/pageController");

router.post("/", createPage);
router.get("/", getAllPages);
router.get("/:id", getPageById);
router.put("/:id", updatePage);
router.delete("/:id", deletePage);

module.exports = router;
