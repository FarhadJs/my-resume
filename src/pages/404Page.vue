<template>
    <div class="min-h-screen bg-gradient-to-b flex items-center justify-center px-4">
        <div class="max-w-lg w-full text-center">
            <div class="mb-8">
                <h1 class="text-9xl font-bold text-gray-800 animate-pulse">404</h1>
                <div class="space-y-2">
                    <h2 class="text-3xl font-semibold text-gray-700">Oops! Page not found</h2>
                    <p class="text-gray-600">The page you're looking for doesn't exist or has been moved.</p>
                </div>
            </div>

            <div class="space-y-4">
                <router-link to="/"
                    class="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 hover:text-white transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Back to Home
                </router-link>

                <div class="text-sm text-gray-500">
                    <p>Need help? <a href="/contact-me" class="text-blue-600 hover:underline">Contact me</a></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0.7;
    }
}
</style>