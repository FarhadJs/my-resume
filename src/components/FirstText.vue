<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
</script>

<template>
  <div class="text-white first-text">
    <p class="hero-greeting fade-in-right" style="animation-duration: 300ms">درود، من فرهاد هستم.</p>
    <h1 class="fade-in-right" style="animation-duration: 500ms">
      تجربه های دیجیتال<br /><em>با دقت ساخته می شوند.</em>
    </h1>
    <p class="hero-description fade-in-right" style="animation-duration: 900ms">
      توسعه دهنده فرانت اند و طراح UI که برای ساخت وبسایت های سریع، قابل استفاده و به یادماندنی تلاش می کند.
    </p>
    <ul class="flex gap-4 fade-in-right text-2xl" style="animation-duration: 1200ms">
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
