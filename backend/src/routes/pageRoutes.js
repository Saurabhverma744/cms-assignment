const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

const {
  createPage,
  getAllPages,
  getPageById,
  updatePage,
  deletePage,
} = require("../controllers/pageController");

router.post("/", protect, createPage);
router.get("/", getAllPages);
router.get("/:id", getPageById);
router.put("/:id", protect, updatePage);
router.delete("/:id", protect, deletePage);

module.exports = router;
