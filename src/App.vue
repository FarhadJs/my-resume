<script setup>
import { onMounted, onUnmounted } from "vue";
import FirstText from "./components/FirstText.vue";
import About from "./components/About.vue";
import MyServices from "./components/MyServices.vue";
import MySkills from "./components/MySkills.vue";
import Portfolio from "./components/Portfolio.vue";
import Footer from "./components/Footer.vue";

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
    <div class="noise-layer" aria-hidden="true"></div>
    <header class="site-header page-width">
      <a href="#top" class="brand-mark"><span class="brand-prompt">&gt;_</span> farhad.dev</a>
      <nav class="site-nav" aria-label="ناوبری اصلی">
        <a href="#about"><span>01</span> درباره من</a>
        <a href="#skills"><span>02</span> مهارت ها</a>
        <a href="#work"><span>03</span> پروژه ها</a>
      </nav>
      <a class="header-contact" href="mailto:farhadfallahi2004@outlook.com"><i></i> آماده همکاری</a>
    </header>

    <main id="top">
      <section class="hero page-width grid-background">
        <div class="hero-copy">
          <FirstText />
        </div>
        <div class="terminal-window" aria-label="نمونه کد">
          <div class="terminal-bar"><span class="terminal-dots"><i></i><i></i><i></i></span><span>farhad@studio:~</span><span>⌘ K</span></div>
          <div class="terminal-code" dir="ltr">
            <p><span class="code-muted">01</span> <b>const</b> developer = {</p>
            <p class="indent"><span class="code-key">name:</span> <span class="code-string">"Farhad Fallahi"</span>,</p>
            <p class="indent"><span class="code-key">role:</span> <span class="code-string">"Full-stack developer"</span>,</p>
            <p class="indent"><span class="code-key">stack:</span> [<span class="code-string">"Vue"</span>, <span class="code-string">"React"</span>,</p>
            <p class="indent"><span class="code-string">"Nest.js"</span>, <span class="code-string">"MongoDB"</span>],</p>
            <p class="indent"><span class="code-key">available:</span> <span class="code-boolean">true</span></p>
            <p>};<span class="cursor"></span></p>
          </div>
          <div class="terminal-status"><span>BUILD: PASS</span><span>v1.0.0</span><span>100%</span></div>
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
