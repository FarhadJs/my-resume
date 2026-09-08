<template>
  <footer class="site-footer page-width">
    <div class="footer-cta">
      <p class="mini-label">آیا پروژه داری؟</p>
      <h2>بیایید چیزی<br /><em>باورنکردنی بسازیم.</em></h2>
      <a class="primary-button" href="mailto:farhadfallahi2004@gmail.com">ارتباط با من <span>↗</span></a>
    </div>
    <div class="footer-bottom">
      <span>© ۲۰۲۵ FARHAD FALLAHI</span>
      <div class="social-links">
          <a href="https://x.com/FarhadFallahiJs">
            <FontAwesomeIcon :icon="faXTwitter" />
          </a>
          <a href="https://github.com/FarhadJs">
            <FontAwesomeIcon :icon="faGithub" />
          </a>
          <a href="https://www.linkedin.com/in/farhad-fallahi">
            <FontAwesomeIcon :icon="faLinkedin" />
          </a>
          <a href="https://t.me/Farhad_Fallahi">
            <FontAwesomeIcon :icon="faTelegram" />
          </a>
      </div>
      <span>BUILT WITH VUE / <b>♥</b></span>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTelegram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>

<style></style>
