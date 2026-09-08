<template>
  <div class="content-section page-width skills-section animate-fade-in-top">
    <div class="section-label">۰۳ / جعبه ابزار</div>
    <div class="section-heading">
      <h2>مهارت هایی برای ساختن<br /><em>چیزهای بهتر.</em></h2>
      <p>تمرکز من روی ساخت رابط های کاربری دقیق و قابل اتکا است؛ از اولین ایده تا آخرین پیکسل.</p>
    </div>
    <div class="skills-grid">
      <div v-for="(skill, index) in skills" :key="skill.name" class="skill-item">
        <span class="skill-number">۰{{ index + 1 }}</span>
        <h4>{{ skill.name }}</h4>
        <span class="skill-type">{{ skill.type }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const skills = [
  { name: "React", type: "Frontend" },
  { name: "Vue", type: "Frontend" },
  { name: "Next.js", type: "Frontend" },
  { name: "Nuxt.js", type: "Frontend" },
  { name: "Nest.js", type: "Backend" },
  { name: "MongoDB", type: "Database" },
];
</script>
