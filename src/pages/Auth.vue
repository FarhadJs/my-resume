<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center px-4">
    <div class="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
      <!-- Toggle Buttons -->
      <div class="flex bg-gray-100 p-1 rounded-lg">
        <button 
          @click="isLogin = true" 
          :class="['flex-1 py-2 px-4 rounded-md transition-all duration-200', 
                  isLogin ? 'bg-white shadow-sm' : 'hover:bg-gray-200']"
        >
          Login
        </button>
        <button 
          @click="isLogin = false"
          :class="['flex-1 py-2 px-4 rounded-md transition-all duration-200',
                  !isLogin ? 'bg-white shadow-sm' : 'hover:bg-gray-200']"
        >
          Sign Up
        </button>
      </div>

      <!-- Form -->
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div v-if="!isLogin" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Full Name</label>
            <input 
              v-model="form.name"
              type="text"
              required
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Email</label>
            <input 
              v-model="form.email"
              type="email"
              required
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">Password</label>
            <input 
              v-model="form.password"
              type="password"
              required
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div v-if="error" class="text-red-500 text-sm">
          {{ error }}
        </div>

        <button 
          type="submit"
          class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          {{ isLogin ? 'Login' : 'Sign Up' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isLogin = ref(true);
const error = ref('');

const form = reactive({
  name: '',
  email: '',
  password: ''
});

const handleSubmit = async () => {
  try {
    error.value = '';
    // Here you would typically make an API call to your backend
    if (isLogin.value) {
      // Login logic
      console.log('Logging in with:', { email: form.email, password: form.password });
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      // On success:
      router.push('/');
    } else {
      // Sign up logic
      console.log('Signing up with:', form);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      // On success:
      router.push('/');
    }
  } catch (err) {
    error.value = err.message || 'An error occurred';
  }
};
</script>
