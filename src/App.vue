<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Footer from './components/Footer.vue';
import NavBar from './components/NavBar.vue';

const route = useRoute();
const isNotFoundPage = computed(() => route.name === 'NotFound' || route.name === 'Dashboard');

const navLinks = [
  { to: '/', text: 'Home' },
  { to: '/about-me', text: 'About' },
  { to: '/contact-me', text: 'Contact' },
  { to: '/projects', text: 'My Projects' }
];

</script>

<template>
  <div class="min-h-screen bg-zinc-950 text-white flex flex-col">
    <!-- <nav v-if="!isNotFoundPage" class="fixed top-0 left-0 right-0 z-50 bg-zinc-900/80 backdrop-blur-md">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center h-16">
          <router-link to="/" class="text-xl font-bold">Farhad Fallahi</router-link>
          <div class="space-x-6">
            <router-link v-for="link in navLinks" :key="link.to" :to="link.to" :class="[
              'nav-link transition-colors duration-300',
              { 'text-blue-400': route.path === link.to }
            ]">
              {{ link.text }}
            </router-link>
          </div>
        </div>
      </div>
    </nav> -->

    <NavBar :nav-links="navLinks" />
    <main class="flex-grow pt-16">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <Footer v-if="!isNotFoundPage" />
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.nav-link {
  @apply relative;
}

.nav-link:hover {
  @apply text-blue-400;
}

/* Active link style with underline animation */
.nav-link::after {
  content: '';
  @apply absolute left-0 right-0 bottom-[-4px] h-[2px] bg-blue-400 transform scale-x-0 transition-transform duration-300 origin-center;
}

.nav-link:hover::after,
.router-link-active::after {
  @apply scale-x-100;
}

/* Active link text color */
.router-link-active {
  @apply text-blue-400;
}

/* Global navigation styles that won't be affected by route changes */
.main-nav {
  @apply fixed top-0 left-5 right-5 w-auto shadow-md z-50 px-6 py-4 mt-5 mx-auto;
}

.nav-container {
  @apply flex items-center justify-center lg:space-x-8 text-sm lg:text-base;
}

.nav-link {
  @apply text-gray-200 hover:text-blue-600 font-medium transition-colors duration-200;
}

.nav-link.router-link-active {
  @apply text-blue-600 font-semibold;
}

/* Error page specific styles */
.error-page {
  @apply min-h-screen bg-gradient-to-b from-gray-50 to-gray-100;
}
</style>
