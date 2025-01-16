<template>
  <div class="contact-container">
    <div class="container mx-auto px-4 py-12">
      <div class="max-w-2xl mx-auto">
        <!-- Contact Form -->
        <div class="contact-form bg-zinc-900/50 backdrop-blur-sm p-8 rounded-xl shadow-xl mb-12">
          <h2 class="text-2xl lg:text-3xl font-bold mb-6">Leave a Comment</h2>
          <form @submit.prevent="handleSubmit" class="space-y-6 text-left">
            <div>
              <label for="name" class="block text-sm font-medium mb-2">Name</label>
              <input type="text" id="name" :dir="textDirectionName" v-model="formData.author" required
                :disabled="isLoading"
                class="w-full px-4 py-2 bg-zinc-800 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300">
            </div>
            <div>
              <label for="email" class="block text-sm font-medium mb-2">Email</label>
              <input type="email" id="email" v-model="formData.email" required :disabled="isLoading"
                class="w-full px-4 py-2 bg-zinc-800 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300">
            </div>
            <div>
              <label for="message" class="block text-sm font-medium mb-2">Message</label>
              <textarea id="message" :dir="textDirection" v-model="formData.content" required rows="4"
                :disabled="isLoading"
                class="w-full px-4 py-2 bg-zinc-800 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300 resize-none"></textarea>
            </div>
            <button type="submit" :disabled="isLoading"
              class="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed">
              <span v-if="!isLoading">Send Message</span>
              <div v-else class="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
            </button>
          </form>
        </div>

        <!-- Success/Error Messages -->
        <TransitionGroup name="notification" tag="div" class="fixed lg:ml-24 top-28 left-7 right-7 lg:left-auto lg:right-auto z-50">
          <div v-if="showSuccess" key="success"
            class="bg-sky-500 text-left text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2">
            <!-- <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg> -->
            <span>The comment was successfully submitted ✅<br />and if approved by the admin, the post will be
              displayed.</span>
          </div>
          <div v-if="showError" key="error"
            class="bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span>{{ error || 'An error occurred. Please try again.' }}</span>
          </div>
        </TransitionGroup>

        <!-- Comments Section -->
        <div class="mt-16">
          <div class="flex justify-between items-center mb-8">
            <h3 class="text-2xl font-bold">Comments</h3>
            <button @click="refreshComments" :disabled="isLoading"
              class="text-blue-400 hover:text-blue-500 transition-colors duration-300 flex items-center space-x-2 disabled:opacity-50">
              <svg class="w-5 h-5" :class="{ 'animate-spin': isLoading }" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span>Refresh</span>
            </button>
          </div>

          <div v-if="isLoading && !comments.length" class="flex justify-center py-8">
            <div class="animate-spin rounded-full h-8 w-8 border-2 border-blue-500 border-t-transparent"></div>
          </div>

          <TransitionGroup name="comment-list" tag="div" class="space-y-4">
            <div v-for="comment in comments" :key="comment._id"
              class="comment-card relative bg-zinc-900/50 backdrop-blur-sm p-6 rounded-lg shadow-md text-left"
              :class="{ 'text-right': isPersian(comment.content || comment.author) }">
              <div class="flex items-start"
                :class="{ 'flex-row-reverse': isPersian(comment.content || comment.author) }">
                <div class="flex-grow justify-center">
                  <h4 class="font-semibold text-lg">{{ comment.author }}</h4>
                  <h4 class="font-semibold text-lg">{{ comment.email }}</h4>
                  <p :dir="isPersian(comment.content) ? 'rtl' : 'ltr'" class="text-gray-400 mt-2 ">{{ comment.content }}
                  </p>
                </div>
                <!-- <span class="text-sm text-gray-500 shrink-0"
                :class="{ 'ml-4': !isPersian(comment.content || comment.author), 'mr-4': isPersian(comment.content || comment.author) }">
                {{ formatDate(comment.createdAt) }}
              </span> -->
                <span class="text-sm text-gray-500 absolute top-4"
                  :class="{ 'right-4': !isPersian(comment.content || comment.author), 'left-4': isPersian(comment.content || comment.author) }">
                  {{ formatDate(comment.createdAt) }}
                </span>
              </div>
            </div>
          </TransitionGroup>

          <div v-if="!isLoading && !comments.length" class="text-center py-8 text-gray-400">
            No comments yet. Be the first to comment!
          </div>
        </div>
      </div>
    </div>

    <div class="border border-gray-400/50 max-w-3xl mx-auto mb-10"></div>
    <router-link to="/dashboard" :disabled="isLoading"
      class="text-blue-400 hover:text-blue-500 transition-colors duration-300 space-x-2 disabled:opacity-50">
      <span>Manage Comments</span>
    </router-link>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useComments } from '../composables/useComments'

const { comments: allComments, isLoading, error, fetchComments, addComment, clearError } = useComments()

// Only show approved comments
const comments = computed(() =>
  allComments.value.filter(comment => comment.status === 'approved')
)

const formData = ref({
  author: '',
  email: '',
  content: ''
})

const showSuccess = ref(false)
const showError = ref(false)

const handleSubmit = async () => {
  if (isLoading.value) return

  clearError()
  showError.value = false

  try {
    const success = await addComment({
      ...formData.value,
      status: 'pending' // Set initial status as pending
    })

    if (success) {
      showSuccess.value = true
      formData.value = { author: '', email: '', content: '' }
      setTimeout(() => {
        showSuccess.value = false
      }, 7000)
    } else {
      throw new Error('Failed to post comment')
    }
  } catch (err) {
    showError.value = true
    setTimeout(() => {
      showError.value = false
    }, 5000)
  }
}

const refreshComments = async () => {
  if (isLoading.value) return
  await fetchComments()
}

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

// Modify the isPersian function to be more accurate & Text Directions
const isPersian = (text) => {
  if (!text) return false;
  const persianPattern = /[\u0600-\u06FF\uFB50-\uFB9F]/;
  // Count Persian characters
  const persianChars = text.split('').filter(char => persianPattern.test(char)).length;

  return persianChars / text.length > 0.3;
};

const textDirection = computed(() => {
  return isPersian(formData.value.content) ? 'rtl' : 'ltr';
});
const textDirectionName = computed(() => {
  return isPersian(formData.value.author) ? 'rtl' : 'ltr';
});

watch(() => formData.value.content, (newContent) => {
  const textarea = document.getElementById('message');
  if (textarea) {
    textarea.style.direction = isPersian(newContent) ? 'rtl' : 'ltr';
    textarea.style.textAlign = isPersian(newContent) ? 'right' : 'left';
  }
});

onMounted(async () => {
  await fetchComments()
})
</script>

<style scoped>
.contact-form {
  @apply opacity-0;
  animation: fadeSlideUp 0.6s ease-out forwards;
}

@keyframes fadeSlideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Notification animations */
.notification-enter-active,
.notification-leave-active {
  transition: all 0.3s ease;
}

.notification-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.notification-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

/* Comment list animations */
.comment-list-enter-active,
.comment-list-leave-active {
  transition: all 0.5s ease;
}

.comment-list-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.comment-list-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.comment-card {
  animation: pulseOnce 0.3s ease-out;
}

@keyframes pulseOnce {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.5);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(59, 130, 246, 0);
  }

  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
  }
}

[dir="rtl"] {
  font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
}
</style>