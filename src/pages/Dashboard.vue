<template>
  <div class="container mx-auto px-4 py-12">
    <!-- API Key Input -->
    <Transition enter-active-class="transition-all duration-300" enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0" leave-active-class="transition-all duration-300"
      leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-4">
      <div v-show="!isAuthenticated" class="mb-8 max-w-xl mx-auto">
        <div class="bg-zinc-900/50 backdrop-blur-sm p-6 rounded-lg shadow-md">
          <h2 class="text-2xl font-bold mb-4">Dashboard Authentication</h2>
          <div class="flex flex-col lg:flex-row gap-4">
            <input type="password" v-model="apiKey" placeholder="Enter your API key" @keyup.enter="getComments"
              class="flex-grow px-4 py-2 bg-zinc-800 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300">
            <button @click="getComments" :disabled="isLoading"
              class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50">
              {{ isLoading ? 'Authenticating...' : 'Authenticate' }}
            </button>
          </div>
          <p v-if="error" class="mt-2 text-red-500">{{ error }}</p>
        </div>
      </div>
    </Transition>

    <!-- Comments Management -->
    <div v-if="isAuthenticated" class="max-w-6xl mx-auto">
      <div class="bg-zinc-900/50 backdrop-blur-sm p-4 sm:p-6 rounded-lg shadow-md">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-sm sm:text-2xl font-bold">Comments Management</h2>
          <button @click="refreshComments"
            class="text-blue-400 hover:text-blue-500 transition-colors duration-300 flex items-center space-x-2">
            <svg class="w-5 h-5" :class="{ 'animate-spin': isLoading }" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span>Refresh</span>
          </button>
        </div>

        <!-- Desktop Table (hidden on mobile) -->
        <div class="hidden md:block overflow-x-auto">
          <!-- Your existing table code -->
          <table class="w-full relative" :class="{ 'mb-32': comments.length >= 0 }">
            <thead>
              <tr class="border-b border-zinc-700">
                <th class="py-3 text-left">Author</th>
                <th class="py-3 text-left">Comment</th>
                <th class="py-3 text-left">Date</th>
                <th class="py-3 text-left">Email</th>
                <th class="py-3 text-left">Status</th>
                <th class="py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody class="text-left">
              <tr v-for="comment in comments" :key="comment._id"
                class="border-b border-zinc-800 hover:bg-zinc-800/50 transition-colors">
                <td :dir="isPersian(comment.author) ? 'rtl' : 'ltr'" class="py-4 pr-4">{{ comment.author }}</td>
                <td :dir="isPersian(comment.author) ? 'rtl' : 'ltr'" class="py-4 pr-4">
                  <div class="max-w-xs overflow-hidden text-ellipsis">
                    {{ comment.content }}
                  </div>
                </td>
                <td class="py-4 pr-4">{{ new Date(comment.createdAt).toDateString("en-us") }}</td>
                <td class="py-4 pr-4">{{ comment.email }}</td>
                <td class="py-4 pr-4">
                  <span class="px-2 py-1 rounded text-sm" :class="{
                    'bg-green-500/20 text-green-400': comment.status === 'approved',
                    'bg-red-500/20 text-red-400': comment.status === 'rejected',
                    'bg-yellow-500/20 text-yellow-400': comment.status === 'pending'
                  }">
                    {{ comment.status || 'pending' }}
                  </span>
                </td>
                <td class="py-4">
                  <div class="flex items-center space-x-2">
                    <button @click="updateStatus(comment._id, 'approved')"
                      :disabled="isLoading || comment.status === 'approved'"
                      class="p-1 text-green-400 hover:text-green-300 disabled:opacity-50" title="Approve">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </button>
                    <button @click="updateStatus(comment._id, 'rejected')"
                      :disabled="isLoading || comment.status === 'rejected'"
                      class="p-1 text-red-400 hover:text-red-300 disabled:opacity-50" title="Reject">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                    <button @click="removeComment(comment._id)" :disabled="isLoading"
                      class="p-1 text-gray-400 hover:text-gray-300 disabled:opacity-50" title="Delete">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
            <div v-if="comments.length <= 0" class="text-center py-8 text-gray-400 absolute top-16 left-0 right-0">
              <p>No comments have been posted yet.</p>
            </div>
          </table>
        </div>

        <!-- Mobile Cards (shown only on mobile) -->
        <div class="md:hidden space-y-4 relative">
          <div v-if="comments.length <= 0" class="text-center py-8 text-gray-400 absolute top-16 left-0 right-0">
            <p>No comments have been posted yet.</p>
          </div>
          <div v-for="comment in comments" :key="comment._id"
            class="bg-zinc-800/50 p-4 rounded-lg space-y-3 hover:bg-zinc-800/70 transition-colors">
            <!-- Author -->
            <div class="flex justify-between items-start">
              <div :dir="isPersian(comment.author) ? 'rtl' : 'ltr'" class="font-medium text-lg">
                {{ comment.author }}
              </div>
              <span class="text-sm text-gray-400">
                {{ new Date(comment.createdAt).toDateString("en-us") }}
              </span>
            </div>
            <!-- Comment -->
            <div :dir="isPersian(comment.content) ? 'rtl' : 'ltr'"
              :class="{ 'text-right': isPersian(comment.content), 'text-left': !isPersian(comment.content) }"
              class="text-gray-300 flex flex-col gap-5">
            <span class="text-left">
              {{ comment.email }}
            </span>
              {{ comment.content }}
            </div>

            <!-- Status -->
            <div class="flex justify-between items-center">
              <span class="px-2 py-1 rounded text-sm" :class="{
                'bg-green-500/20 text-green-400': comment.status === 'approved',
                'bg-red-500/20 text-red-400': comment.status === 'rejected',
                'bg-yellow-500/20 text-yellow-400': comment.status === 'pending'
              }">
                {{ comment.status || 'pending' }}
              </span>

              <!-- Action Buttons -->
              <div class="flex items-center space-x-3">
                <button @click="updateStatus(comment._id, 'approved')"
                  :disabled="isLoading || comment.status === 'approved'"
                  class="p-2 text-green-400 hover:text-green-300 disabled:opacity-50 hover:bg-green-500/10 rounded-full">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </button>
                <button @click="updateStatus(comment._id, 'rejected')"
                  :disabled="isLoading || comment.status === 'rejected'"
                  class="p-2 text-red-400 hover:text-red-300 disabled:opacity-50 hover:bg-red-500/10 rounded-full">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <button @click="removeComment(comment._id)" :disabled="isLoading"
                  class="p-2 text-gray-400 hover:text-gray-300 disabled:opacity-50 hover:bg-gray-500/10 rounded-full">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useComments } from '../composables/useComments';

const apiKey = ref('');
const isAuthenticated = ref();
const {
  comments,
  isLoading,
  error,
  fetchComments,
  updateCommentStatus,
  deleteComment
} = useComments();

const getComments = async () => {
  if (!apiKey.value) {
    error.value = "API key is required";
    return;
  }
  try {
    const success = await fetchComments(true, apiKey.value);
    isAuthenticated.value = success;
    refreshComments()
    console.log(success);
    
    if (!success) {
      error.value = "Authentication failed";
    }
  } catch (err) {
    console.error("Authentication error:", err);
    isAuthenticated.value = false;
  }
};

const refreshComments = async () => {
  if (!apiKey.value || !isAuthenticated.value) {
    error.value = "Please authenticate first";
    return;
  }
  await fetchComments(true, apiKey.value);
};

const updateStatus = async (commentId, status) => {
  if (!apiKey.value || !isAuthenticated.value) {
    error.value = "Please authenticate first";
    return;
  }
  try {
    const success = await updateCommentStatus(commentId, status, apiKey.value);
    if (!success) {
      error.value = "Failed to update comment status";
    } else {
      // Optionally refresh the comments list
      await refreshComments();
    }
  } catch (err) {
    console.error("Update status error:", err);
    error.value = err.response?.data?.error || "Error updating comment status";
  }
};

const removeComment = async (commentId) => {
  if (!apiKey.value || !isAuthenticated.value) {
    error.value = "Please authenticate first";
    return;
  }

  if (confirm('Are you sure you want to delete this comment?')) {
    try {
      const success = await deleteComment(commentId, apiKey.value);
      if (!success) {
        error.value = "Failed to delete comment";
      }
    } catch (err) {
      console.error("Delete error:", err);
      error.value = err.response?.data?.error || "Error deleting comment";
    }
  }
};

const isPersian = (text) => {
  if (!text) return false;
  const persianPattern = /[\u0600-\u06FF\uFB50-\uFB9F]/;
  // Count Persian characters
  const persianChars = text.split('').filter(char => persianPattern.test(char)).length;

  return persianChars / text.length > 0.3;
};
</script>

<style>
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Optional: Add smooth transitions */
.comment-card-enter-active,
.comment-card-leave-active {
  transition: all 0.3s ease;
}

.comment-card-enter-from,
.comment-card-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* Optional: Custom scrollbar for overflow */
.overflow-x-auto {
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.1) transparent;
}

.overflow-x-auto::-webkit-scrollbar {
  height: 6px;
}

.overflow-x-auto::-webkit-scrollbar-track {
  background: transparent;
}

.overflow-x-auto::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
}
</style>
