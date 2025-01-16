const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");

// Public routes
router.get("/", commentController.getAllComments);
router.post("/", commentController.createComment);

// Admin routes
router.get("/admin", commentController.getAllCommentsAdmin);
router.put("/:id/status", commentController.updateCommentStatus);
router.delete("/:id", commentController.deleteComment);

module.exports = router;