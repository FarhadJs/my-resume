<template>
  <div class="py-10 flex flex-col justify-center items-center text-center bg-white bg-opacity-5">
    <h2 class="mb-5">فرهاد فلاحی</h2>
    <p>توسعه دهنده فرانت اند، دانشجوی مهندسی کامپیوتر، طراح UI</p>

    <div class="mt-10 flex flex-col gap-6">
      <h3>راه های ارتباطی با من</h3>
      <ul class="flex gap-4 justify-center items-center text-2xl">
        <ul class="flex gap-4 fade-in-right text-2xl" style="animation-duration: 1200ms">
          <a href="https://x.com/FarhadFallahiJs">
            <FontAwesomeIcon :icon="faXTwitter" />
          </a>
          <a href="https://github.com/FarhadJs">
            <FontAwesomeIcon :icon="faGithub" />
          </a>
          <!-- <a>
        <FontAwesomeIcon :icon="faInstagram" />
      </a> -->
          <a href="https://www.linkedin.com/in/farhad-fallahi">
            <FontAwesomeIcon :icon="faLinkedin" />
          </a>
          <a href="https://t.me/Farhad_Fallahi">
            <FontAwesomeIcon :icon="faTelegram" />
          </a>
        </ul>
      </ul>
    </div>
  </div>
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
