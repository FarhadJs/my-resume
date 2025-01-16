<script setup>
import { ref, computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const props = defineProps({
    navLinks: {
        type: Array,
        required: true
    }
});

const route = useRoute();
const router = useRouter();
const isMenuOpen = ref(false);
const currentRoute = computed(() => route.path);

// Scroll to top function
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

// Close menu when route changes
watch(currentRoute, () => {
    isMenuOpen.value = false;
    scrollToTop(); // Add scroll to top when route changes
});
</script>

<template>
    <nav class="fixed top-0 left-0 right-0 z-50 bg-zinc-900/80 backdrop-blur-md">
        <div class="container mx-auto px-4">
            <div class="flex justify-between items-center h-16">
                <!-- Logo/Brand -->
                <router-link to="/" @click="scrollToTop" class="text-xl font-bold">
                    Farhad Fallahi
                </router-link>

                <!-- Mobile Menu Button -->
                <button @click="isMenuOpen = !isMenuOpen" class="md:hidden p-2 focus:outline-none"
                    aria-label="Toggle menu">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                        <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <!-- Desktop Navigation -->
                <div class="hidden md:flex space-x-6">
                    <router-link v-for="link in navLinks" :key="link.to" :to="link.to" @click="scrollToTop" :class="[
                        'nav-link transition-colors duration-300',
                        { 'text-blue-400': currentRoute === link.to }
                    ]">
                        {{ link.text }}
                    </router-link>
                </div>
            </div>

            <!-- Mobile Navigation Menu -->
            <transition enter-active-class="transition duration-200 ease-out"
                enter-from-class="transform -translate-y-2 opacity-0"
                enter-to-class="transform translate-y-0 opacity-100"
                leave-active-class="transition duration-200 ease-in"
                leave-from-class="transform translate-y-0 opacity-100"
                leave-to-class="transform -translate-y-2 opacity-0">
                <div v-show="isMenuOpen"
                    class="md:hidden absolute left-0 right-0 top-24 bg-zinc-900/95 backdrop-blur-md">
                    <div class="px-4 py-2 space-y-2">
                        <router-link v-for="link in navLinks" :key="link.to" :to="link.to"
                            @click="() => { isMenuOpen = false; scrollToTop(); }" :class="[
                                'block py-2 px-4 transition-colors duration-300 rounded-lg',
                                currentRoute === link.to
                                    ? 'bg-blue-500/20 text-blue-400'
                                    : 'hover:bg-zinc-800'
                            ]">
                            {{ link.text }}
                        </router-link>
                    </div>
                </div>
            </transition>
        </div>
    </nav>
</template>

<style scoped>
.nav-link {
    @apply relative;
}

.nav-link:hover {
    @apply text-blue-400;
}

.nav-link::after {
    content: '';
    @apply absolute left-0 right-0 bottom-[-4px] h-[2px] bg-blue-400 transform scale-x-0 transition-transform duration-300 origin-center;
}

.nav-link:hover::after,
.router-link-active::after {
    @apply scale-x-100;
}
</style>