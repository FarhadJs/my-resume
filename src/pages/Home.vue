<template>
  <div class="hero-container">
    <div class="background-animation"></div>

    <Transition name="fade" appear>
      <div class="content-wrapper">
        <div class="hero-text">
          <h1 class="glitch" data-text="Farhad Fallahi">Farhad Fallahi</h1>
          <div class="typing-wrapper">
            <span class="typing-text">Fullstack Developer</span>
          </div>

          <div class="cta-buttons">
            <router-link to="/about-me" class="cta-button primary">
              <span>View Profile</span>
              <div class="liquid"></div>
            </router-link>
            <router-link to="/contact-me" class="cta-button secondary">
              <span>Contact Me</span>
              <div class="liquid"></div>
            </router-link>
          </div>
        </div>

        <div class="tech-stack">
          <div v-for="(tech, index) in technologies" :key="tech" class="tech-item"
            :style="{ animationDelay: index * 0.2 + 's' }">
            {{ tech }}
          </div>
        </div>
      </div>
    </Transition>

    <div class="mouse-cursor-gradient-tracking">
      <div class="cursor-dot"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const technologies = [
  'REST API',
  'Node.js',
  'MongoDB',
  'Nest.js',
  'Vue.js',
  'React.js',
  'Nuxt.js',
  'Next.js',
  'Tailwindcss',
  'Electron'
];

// Reactive reference for tracking mobile state
const isMobile = ref(false);

// Function to check if device is mobile
const checkMobile = () => {
  isMobile.value = window.matchMedia('(max-width: 768px)').matches ||
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// Custom cursor effect
const handleMouseMove = (e) => {
  if (isMobile.value) return; // Skip if mobile

  const cursor = document.querySelector('.cursor-dot');
  if (cursor) {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';

    // Add a trail effect
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.left = e.clientX + 'px';
    trail.style.top = e.clientY + 'px';
    document.body.appendChild(trail);

    setTimeout(() => {
      trail.remove();
    }, 500);
  }
};

onMounted(() => {
  // Initial check
  checkMobile();

  // Add event listeners
  if (!isMobile.value) {
    document.addEventListener('mousemove', handleMouseMove);
  }

  // Listen for window resize to update mobile state
  window.addEventListener('resize', checkMobile);
});

onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove);
  window.removeEventListener('resize', checkMobile);
});
</script>

<style scoped>
.hero-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0f172a;
  position: relative;
  overflow: hidden;
}

.background-animation {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #0f172a 25%, #1e293b 25%, #1e293b 50%, #0f172a 50%, #0f172a 75%, #1e293b 75%, #1e293b);
  background-size: 60px 60px;
  animation: moveBackground 4s linear infinite;
  opacity: 0.1;
}

@keyframes moveBackground {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: 60px 60px;
  }
}

.content-wrapper {
  text-align: center;
  z-index: 1;
  padding: 2rem;
}

.hero-text {
  margin-bottom: 4rem;
}

/* Glitch effect */
.glitch {
  font-size: 5rem;
  font-weight: bold;
  color: #fff;
  position: relative;
  text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
    0.025em 0.04em 0 #fffc00;
  animation: glitch 725ms infinite;
  @apply select-none;
}

.glitch span {
  position: absolute;
  top: 0;
  left: 0;
}

@keyframes glitch {
  0% {
    text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
      0.025em 0.04em 0 #fffc00;
  }

  15% {
    text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
      0.025em 0.04em 0 #fffc00;
  }

  16% {
    text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff,
      -0.05em -0.05em 0 #fffc00;
  }

  49% {
    text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff,
      -0.05em -0.05em 0 #fffc00;
  }

  50% {
    text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff,
      0 -0.04em 0 #fffc00;
  }

  99% {
    text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff,
      0 -0.04em 0 #fffc00;
  }

  100% {
    text-shadow: -0.05em 0 0 #00fffc, -0.025em -0.04em 0 #fc00ff,
      -0.04em -0.025em 0 #fffc00;
  }
}

/* Typing effect */
.typing-wrapper {
  margin: 2rem 0;
}

.typing-text {
  font-size: 1.8rem;
  color: #94a3b8;
  border-right: 0.15em solid #94a3b8;
  padding-right: 0.15em;
  animation: typing 3.5s steps(30, end) infinite,
    blink-caret 0.75s step-end infinite;
  white-space: nowrap;
  overflow: hidden;
}

@keyframes typing {
  from {
    width: 0
  }

  to {
    width: 100%
  }
}

@keyframes blink-caret {

  from,
  to {
    border-color: transparent
  }

  50% {
    border-color: #94a3b8
  }
}

/* CTA Buttons */
.cta-buttons {
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-top: 3rem;
}

.cta-button {
  position: relative;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;
  text-decoration: none;
}

.cta-button.primary {
  background: #3b82f6;
}

.cta-button.secondary {
  background: #475569;
}

.liquid {
  position: absolute;
  top: -80px;
  left: 0;
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5);
  transition: 0.5s;
}

.cta-button:hover .liquid {
  top: -120px;
  transform: rotate(45deg);
}

/* Tech stack */
.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-top: 4rem;
  @apply cursor-default select-none;
}

.tech-item {
  background: rgba(255, 255, 255, 0.1);
  padding: 0.8rem 1.5rem;
  border-radius: 20px;
  color: #94a3b8;
  font-size: 0.9rem;
  backdrop-filter: blur(10px);
  animation: float-in 0.6s ease forwards;
  opacity: 0;
  transform: translateY(20px);
}

@keyframes float-in {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Custom cursor */
.cursor-dot {
  width: 10px;
  height: 10px;
  background: #3b82f6;
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 999;
  transform: translate(-50%, -50%);
}

.cursor-trail {
  width: 6px;
  height: 6px;
  background: #60a5fa;
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 999;
  transform: translate(-50%, -50%);
  transition: width 0.2s, height 0.2s;
  animation: trail-fade 0.5s linear forwards;
}

@keyframes trail-fade {
  from {
    opacity: 0.8;
    width: 6px;
    height: 6px;
  }

  to {
    opacity: 0;
    width: 0;
    height: 0;
  }
}

/* Responsive design */
@media (max-width: 768px) {
  .glitch {
    font-size: 3rem;
    @apply select-none;
  }

  .typing-text {
    font-size: 1.4rem;
  }

  .cta-buttons {
    flex-direction: column;
    gap: 1rem;
  }

  .tech-stack {
    gap: 0.5rem;
    @apply cursor-default select-none;
  }

  .tech-item {
    font-size: 0.8rem;
    padding: 0.6rem 1.2rem;
  }
}

/* Hide cursor elements on mobile */
@media (max-width: 768px) {

  .cursor-dot,
  .cursor-trail {
    display: none !important;
  }
}
</style>