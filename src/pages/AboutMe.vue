<template>
  <div class="home-container">
    <Transition name="fade" appear>
      <div class="header-section ">
        <div class="flex flex-col md:flex-row items-start gap-8 mb-12">
          <!-- Profile Image -->
          <div class="w-48 h-48 md:w-64 md:h-64 rounded-xl overflow-hidden shadow-xl profile-image-container">
            <img src="../assets/Img/view-3.jpg" alt="Farhad Fallahi"
              class="w-full h-full object-cover hover:scale-110 transition-transform duration-500">
          </div>

          <!-- Profile Info -->
          <div class="flex-1 text-left">
            <h1 class="text-4xl font-bold mb-4">Farhad Fallahi</h1>
            <h2 class="text-xl text-gray-300 mb-6">Fullstack Developer</h2>
            <p class="location">Yazd, Yazd Province, Iran</p>
            <div class="social-links">
              <a href="https://www.linkedin.com/in/farhad-fallahi/" target="_blank" rel="noopener noreferrer"
                class="social-link linkedin">
                <img src="/icons/linkedin.svg" alt="LinkedIn" class="social-icon" />
                LinkedIn
              </a>
              <a href="https://t.me/Farhad_Fallahi" target="_blank" rel="noopener noreferrer"
                class="social-link telegram">
                <img src="/icons/telegram.svg" alt="Telegram" class="social-icon" />
                Telegram
              </a>
              <a href="https://github.com/FarhadJs" target="_blank" rel="noopener noreferrer"
                class="social-link github">
                <img src="/icons/github.svg" alt="GitHub" class="social-icon" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <Transition name="slide-up" appear>
      <div class="summary-section">
        <h3>Summary</h3>
        <p class="text-left lg:text-center">
          With over 2+ years of dedicated experience in React.js and Vue.js, I have
          developed a strong proficiency in crafting modern, user-friendly
          interfaces with the latest web development technologies. Currently, I am
          expanding my expertise by developing Windows Desktop Applications at
          Royanik using Electron, Vite, and Vue. This diverse experience not only
          demonstrates my adaptability but also solidifies my suitability for roles
          requiring in-depth knowledge of React, Vue, and related technologies.
        </p>
      </div>
    </Transition>

    <Transition name="slide-up" appear>
      <div class="experience-section">
        <h3>Experience</h3>

        <div class="experience-card">
          <div class="company-details">
            <h4>Frontend Developer</h4>
            <p class="company">Vesta Sanat Kavir Yazd</p>
            <p class="duration">June 2022 - June 2024 (4 years 1 month)</p>
            <p class="location">Yazd, Iran</p>
          </div>
          <p class="description">
            As a software developer, I have two years of experience working with React
            and Vue. I honed these skills during a four-month internship and developed
            an organization website using Vue and TailwindCSS.
          </p>
        </div>

        <div class="experience-card">
          <div class="company-details">
            <h4>Software Engineer</h4>
            <p class="company">Royanik</p>
            <p class="duration">August 2023 - March 2024 (8 months)</p>
            <p class="location">Yazd Province, Iran</p>
          </div>
          <p class="description">
            Developing a project for a company called 'Royanik' where I am developing
            Windows Desktop Applications using Electron, Vite, and Vue.
          </p>
        </div>
      </div>
    </Transition>

    <Transition name="slide-up" appear>
      <div class="skills-section">
        <h3>Top Skills</h3>
        <div class="skills-container">
          <div class="skill-tag">REST API</div>
          <div class="skill-tag">Node.js</div>
          <div class="skill-tag">MongoDB</div>
          <div class="skill-tag">Nest.js</div>
          <div class="skill-tag">Vue.js</div>
          <div class="skill-tag">Nuxt.js</div>
          <div class="skill-tag">React.js</div>
          <div class="skill-tag">Tailwindcss</div>
          <div class="skill-tag">Electron</div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
// Component logic here if needed
</script>

<style scoped>
.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  color: #2c3e50;
}

.header-section {
  text-align: left;
  margin-bottom: 4rem;
}

.header-section h1 {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #2c3e50, #3498db);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.header-section h2 {
  font-size: 1.8rem;
  color: #4b78a5;
  margin-bottom: 0.5rem;
}

.location {
  color: #666;
  margin-top: 0.5rem;
}

.social-links {
  display: flex;
  margin-top: 1rem;
  @apply text-sm gap-2 lg:text-base flex-col items-start lg:flex-row;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  @apply max-w-md lg:w-auto;
}

.social-icon {
  width: 1.5rem;
  height: 1.5rem;
  filter: brightness(0) invert(1);
}

.linkedin {
  background-color: #0077b5;
  color: white;
}

.github {
  background-color: #333;
  color: white;
}

.telegram {
  background-color: #0088cc;
  color: white;
}

.social-link:hover {
  transform: translateY(-2px);
  filter: brightness(110%);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.summary-section,
.experience-section,
.skills-section {
  @apply bg-[#222222c5] text-white text-sm;
  border-radius: 12px;
  /* padding: 2rem; */
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  @apply p-3 lg:p-7 text-left md:text-center;
}

.summary-section:hover,
.experience-section:hover,
.skills-section:hover {
  transform: translateY(-5px);
}

h3 {
  font-size: 1.8rem;
  color: #4b78a5;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #3498db;
  padding-bottom: 0.5rem;
}

.experience-card {
  margin-bottom: 2rem;
  padding: 1.5rem;
  /* border-left: 4px solid #3498db; */
  /* background: #272727; */
  border-radius: 0 8px 8px 0;
  @apply bg-zinc-900 lg:border-l-2 lg:border-[#3498db];
}

.company-details h4 {
  font-size: 1.4rem;
  color: #4b78a5;
  margin-bottom: 0.5rem;
}

.company {
  font-weight: 600;
  color: #3498db;
  margin-bottom: 0.3rem;
}

.duration,
.location {
  color: #7f8c8d;
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
}

.description {
  margin-top: 1rem;
  line-height: 1.6;
  @apply text-left lg:text-center;
}

.skills-container {
  flex-wrap: wrap;
  gap: 1rem;
  @apply cursor-default select-none flex items-center justify-center;
}

.skill-tag {
  background: linear-gradient(135deg, #3498db, #2980b9);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  transition: transform 0.3s ease;
}

.skill-tag:hover {
  transform: scale(1.05);
}

.profile-image-container {
  @apply relative;
  background: linear-gradient(45deg, #3b82f6, #06b6d4);
  padding: 4px;
}

.profile-image-container img {
  @apply rounded-xl;
}

/* Animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.5s ease;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

@media (max-width: 768px) {
  .home-container {
    padding: 1rem;
  }

  .header-section h1 {
    font-size: 2.5rem;
  }

  .header-section h2 {
    font-size: 1.5rem;
  }

  .skills-container {
    gap: 0.5rem;
    @apply cursor-default select-none;
  }

  .skill-tag {
    font-size: 0.8rem;
  }
}
</style>