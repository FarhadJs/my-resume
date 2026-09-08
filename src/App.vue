<script setup>
import { onMounted, onUnmounted } from "vue";
import FirstText from "./components/FirstText.vue";
import About from "./components/About.vue";
import MyServices from "./components/MyServices.vue";
import MySkills from "./components/MySkills.vue";
import Portfolio from "./components/Portfolio.vue";
import Footer from "./components/Footer.vue";

import Hello3 from "./assets/images/illustrations/hello3.svg"

const revealOnScroll = () => {
  var elements = document.querySelectorAll(
    ".animate-fade-in-right, .animate-slide-in-left, .animate-zoom-in, .animate-fade-in-top"
  );
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var position = element.getBoundingClientRect();
    if (position.top < window.innerHeight && position.bottom >= 0) {
      element.classList.add("visible");
    } else {
      element.classList.remove("visible");
    }
  }
};

onMounted(() => {
  revealOnScroll();
  window.addEventListener("scroll", revealOnScroll, { passive: true });
});

onUnmounted(() => window.removeEventListener("scroll", revealOnScroll));
</script>

<template>
  <div dir="rtl" class="site-shell">
    <header class="site-header page-width">
      <a href="#top" class="brand-mark">FF<span>.</span></a>
      <nav class="site-nav" aria-label="ناوبری اصلی">
        <a href="#about">درباره من</a>
        <a href="#skills">مهارت ها</a>
        <a href="#work">نمونه کارها</a>
      </nav>
      <a class="header-contact" href="mailto:farhadfallahi2004@outlook.com">ارتباط <span>↗</span></a>
    </header>

    <main id="top">
      <section class="hero page-width">
        <div class="hero-copy">
          <p class="eyebrow">توسعه دهنده فرانت اند / یزد، ایران</p>
          <FirstText />
        </div>
        <div class="hero-art">
      <img class="img-hor-vert min-w-96 p-14 lg:p-0" :src="Hello3" draggable="false" />
          <span class="hero-index">۰۱ — ۰۴</span>
        </div>
      </section>

      <div id="about"><About /></div>
      <MyServices />
      <div id="skills"><MySkills /></div>
      <div id="work"><Portfolio /></div>
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.img-hor-vert {
  transform: scaleX(-1) !important;
  animation: FadeInFromRight 1s ease-in-out !important;

  @apply m-0;
}
</style>
