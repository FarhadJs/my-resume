<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
</script>

<template>
  <div class="first-text">
    <p class="hero-greeting fade-in-right" style="animation-duration: 300ms">سلام.</p>
    <h1 class="glitch-title fade-in-right" data-text="فرهاد فلاحی" style="animation-duration: 500ms">
      فرهاد فلاحی
    </h1>
    <p class="hero-greeting fade-in-right text-left" style="animation-duration: 300ms">هستم</p>
    <h2 class="hero-role fade-in-right" style="animation-duration: 700ms">Full-stack developer<span>.</span></h2>
    <p class="hero-description fade-in-right" style="animation-duration: 900ms">
      از ایده تا محصول، ساده و دقیق.
    </p>
    <div class="hero-actions fade-in-right" style="animation-duration: 1200ms">
      <a class="primary-button" href="#work">دیدن پروژه ها <span>↗</span></a>
      <a class="text-button" href="mailto:farhadfallahi2004@outlook.com">ارتباط <span>→</span></a>
    </div>
    <ul class="social-links fade-in-right" style="animation-duration: 1300ms">
      <a aria-label="X" href="https://x.com/FarhadFallahiJs">
        <FontAwesomeIcon :icon="faXTwitter" />
      </a>
      <a aria-label="GitHub" href="https://github.com/FarhadJs">
        <FontAwesomeIcon :icon="faGithub" />
      </a>
      <!-- <a>
        <FontAwesomeIcon :icon="faInstagram" />
      </a> -->
      <a aria-label="LinkedIn" href="https://www.linkedin.com/in/farhad-fallahi">
        <FontAwesomeIcon :icon="faLinkedin" />
      </a>
      <a aria-label="Telegram" href="https://t.me/Farhad_Fallahi">
        <FontAwesomeIcon :icon="faTelegram" />
      </a>
    </ul>
  </div>
</template>
