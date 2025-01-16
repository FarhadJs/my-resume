<template>
  <div class="container mx-auto px-4 py-8">
    <Transition appear>
      <h1 class="text-4xl font-bold text-center mb-12 fade-in-down">My Projects</h1>
    </Transition>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      <!-- Project 1 -->
      <div class="project-card">
        <div
          class="relative overflow-hidden rounded-lg bg-zinc-900 p-6 transition-all duration-300 hover:transform hover:scale-[1.02] group">
          <div
            class="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          </div>
          <h3 class="text-xl font-semibold mb-3 text-blue-400">Present Website</h3>
          <p class="text-gray-300 mb-4">A modern, responsive personal website built with Vue.js and TailwindCSS,
            featuring smooth animations and a clean design.</p>
          <div class="flex flex-wrap gap-2">
            <span class="tech-tag">Vue.js</span>
            <span class="tech-tag">TailwindCSS</span>
            <span class="tech-tag">JavaScript</span>
          </div>
        </div>
      </div>

      <!-- Project 2 -->
      <div class="project-card">
        <div
          class="relative overflow-hidden rounded-lg bg-zinc-900 p-6 transition-all duration-300 hover:transform hover:scale-[1.02] group">
          <div
            class="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          </div>
          <h3 class="text-xl font-semibold mb-3 text-green-400">E-Commerce Platform</h3>
          <p class="text-gray-300 mb-4">A full-featured e-commerce solution with product management, cart functionality,
            and secure payment integration.</p>
          <div class="flex flex-wrap gap-2">
            <span class="tech-tag">React</span>
            <span class="tech-tag">Node.js</span>
            <span class="tech-tag">MongoDB</span>
          </div>
        </div>
      </div>

      <!-- Project 3 -->
      <div class="project-card">
        <div
          class="relative overflow-hidden rounded-lg bg-zinc-900 p-6 transition-all duration-300 hover:transform hover:scale-[1.02] group">
          <div
            class="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          </div>
          <h3 class="text-xl font-semibold mb-3 text-purple-400">Task Management App</h3>
          <p class="text-gray-300 mb-4">A collaborative task management application with real-time updates,
            drag-and-drop functionality, and team features.</p>
          <div class="flex flex-wrap gap-2">
            <span class="tech-tag">Vue.js</span>
            <span class="tech-tag">Firebase</span>
            <span class="tech-tag">Vuex</span>
          </div>
        </div>
      </div>

      <!-- Project 4 -->
      <div class="project-card">
        <div
          class="relative overflow-hidden rounded-lg bg-zinc-900 p-6 transition-all duration-300 hover:transform hover:scale-[1.02] group">
          <div
            class="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          </div>
          <h3 class="text-xl font-semibold mb-3 text-yellow-400">Weather Dashboard</h3>
          <p class="text-gray-300 mb-4">A weather forecasting application with interactive maps, detailed weather data,
            and location-based services.</p>
          <div class="flex flex-wrap gap-2">
            <span class="tech-tag">React</span>
            <span class="tech-tag">Weather API</span>
            <span class="tech-tag">Charts.js</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Add fade-in class to each card with a delay
  const cards = document.querySelectorAll('.project-card')
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('fade-in')
    }, index * 200)
  })
})
</script>

<style scoped>
.project-card {
  @apply transform transition-all duration-300 opacity-0;
}

.tech-tag {
  @apply px-3 py-1 rounded-full text-sm bg-zinc-800 text-gray-300 transition-colors duration-300 hover:bg-zinc-700;
}

.fade-in {
  animation: fadeIn 0.6s ease-out forwards;
}

.fade-in-down {
  animation: fadeInDown 0.6s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Hover effect for project cards */
.project-card:hover {
  @apply shadow-lg;
}
</style>