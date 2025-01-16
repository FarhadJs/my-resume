const { ObjectId } = require("mongodb");
const { client } = require("../config/db");
const validator = require("validator");

const ADMIN_KEY = "IJU-Farhad-WebDesign";

const commentController = {
  // Create a new comment
  createComment: async (req, res) => {
    try {
      const { email, content, author } = req.body;

      // Validate email
      if (!email || !validator.isEmail(email)) {
        return res.status(400).json({ error: "Valid email is required" });
      }

      // Validate required fields
      if (!content || !author) {
        return res
          .status(400)
          .json({ error: "Content and author are required" });
      }

      const collection = client.db().collection("comments");
      const newComment = {
        email,
        content,
        author,
        createdAt: new Date(),
        status: "pending", // Default status is pending
      };

      const result = await collection.insertOne(newComment);

      // Return everything except email for privacy
      const { email: _, ...commentWithoutEmail } = {
        ...newComment,
        _id: result.insertedId,
      };

      res.status(201).json(commentWithoutEmail);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get all comments (only approved ones for public)
  getAllComments: async (req, res) => {
    try {
      const collection = client.db().collection("comments");
      const comments = await collection
        .find({ status: "approved" }) // Only return approved comments
        .sort({ _id: -1 })
        .project({ email: 0 }) // Exclude email from the response
        .toArray();
      res.json(comments);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get all comments (including pending ones) - admin only
  getAllCommentsAdmin: async (req, res) => {
    console.log(req.headers);

    try {
      const { key } = req.headers;

      if (key !== ADMIN_KEY) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      const collection = client.db().collection("comments");
      const comments = await collection.find({}).sort({ _id: -1 }).toArray();
      res.json(comments);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Approve or reject a comment
  updateCommentStatus: async (req, res) => {
    try {
      const { key } = req.headers;
      const { status } = req.body;
      const commentId = req.params.id;

      console.log("Received request:", {
        commentId,
        status,
        hasKey: !!key,
      });

      // Validate key
      if (key !== ADMIN_KEY) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      const collection = client.db().collection("comments");

      // Convert string ID to ObjectId
      const objectId = new ObjectId(commentId);

      // Update the document
      const result = await collection.updateOne(
        { _id: objectId },
        { $set: { status: status } }
      );

      if (result.matchedCount === 0) {
        return res.status(404).json({ error: "Comment not found" });
      }

      // Fetch the updated document
      const updatedComment = await collection.findOne({ _id: objectId });

      res.json(updatedComment);
    } catch (error) {
      console.error("Error in updateCommentStatus:", error);
      res.status(500).json({
        error: "Failed to update comment status",
        details: error.message,
      });
    }
  },

  // Delete a comment (admin only)
  deleteComment: async (req, res) => {
    try {
      const { key } = req.headers;
      const commentId = req.params.id;

      // Log incoming request
      console.log("Delete request:", {
        commentId,
        hasKey: !!key,
      });

      // Check authentication
      if (key !== ADMIN_KEY) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      // Validate ID
      if (!ObjectId.isValid(commentId)) {
        return res.status(400).json({ error: "Invalid comment ID" });
      }

      const collection = client.db().collection("comments");

      // Convert string ID to ObjectId
      const objectId = new ObjectId(commentId);

      // Delete the document
      const result = await collection.deleteOne({ _id: objectId });

      console.log("Delete result:", result);

      if (result.deletedCount === 0) {
        return res.status(404).json({ error: "Comment not found" });
      }

      res.json({
        success: true,
        message: "Comment deleted successfully",
        deletedId: commentId,
      });
    } catch (error) {
      console.error("Error in deleteComment:", error);
      res.status(500).json({
        error: "Failed to delete comment",
        details: error.message,
      });
    }
  },
};

module.exports = commentController;
