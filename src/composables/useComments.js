// useComments.js
import { ref } from "vue";
import axios from "axios";

const API_URL = 
"http://localhost:3000/api/comments";
// "https://farhadfallahi.liara.run/api/comments";

export function useComments() {
  const comments = ref([]);
  const isLoading = ref(false);
  const error = ref(null);

  // Modified to ensure 'key' is always in headers
  const getHeaders = (apiKey) => {
    // if (!apiKey) {
    //   throw new Error("API key is required");
    // }
    return {
      "Content-Type": "application/json",
      key: apiKey, // Ensure 'key' header is set correctly
    };
  };

  const handleRequest = async (requestFn) => {
    if (isLoading.value) return false;

    isLoading.value = true;
    error.value = null;

    try {
      await requestFn();
      return true;
    } catch (err) {
      error.value = err.response?.data?.message || "An error occurred";
      console.error("Error:", err);
      return false;
    } finally {
      isLoading.value = false;
    }
  };

  const fetchComments = (isAdmin = false, apiKey = null) =>
    handleRequest(async () => {
      const url = isAdmin ? `${API_URL}/admin` : API_URL;
      const response = await axios.get(url, {
        headers: getHeaders(apiKey),
      });
      console.log(response.data);
      
      comments.value = Array.isArray(response.data)
        ? response.data
        : [response.data];
    });

  const addComment = (commentData, apiKey = null) =>
    handleRequest(async () => {
      const response = await axios.post(API_URL, commentData, {
        headers: getHeaders(apiKey),
      });
      comments.value = [response.data, ...comments.value];
    });

  const updateCommentStatus = (commentId, status, apiKey = null) =>
    handleRequest(async () => {
      const response = await axios.put(
        `${API_URL}/${commentId}/status`,
        { status },
        { headers: getHeaders(apiKey) }
      );

      // Update local state
      const index = comments.value.findIndex((c) => c._id === commentId);
      if (index !== -1) {
        comments.value[index] = response.data;
        // Force reactivity
        comments.value = [...comments.value];
      }
    });

  const deleteComment = (commentId, apiKey = null) =>
    handleRequest(async () => {
      try {
        await axios.delete(`${API_URL}/${commentId}`, {
          headers: getHeaders(apiKey),
        });

        // Remove the comment from local state
        comments.value = comments.value.filter(
          (comment) => comment._id !== commentId
        );

        return true;
      } catch (error) {
        console.error("Error deleting comment:", error);
        throw error;
      }
    });

  const clearError = () => {
    error.value = null;
  };

  return {
    comments,
    isLoading,
    error,
    fetchComments,
    addComment,
    updateCommentStatus,
    deleteComment,
    clearError,
  };
}
