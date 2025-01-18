<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
</script>

<template>
  <div class="text-white">
    <p class="text-2xl fade-in-right" style="animation-duration: 300ms">
درود!
</p>
    <h1 class="fade-in-right" style="animation-duration: 500ms">
      به صفحه من خوش آمدید
    </h1>
    <!-- <img
      src="../assets/images/marker.svg"
      class="scale-x-[-1] mt-5 mr-96 animate-fadeIn" /> -->
    <br />
    <br />
    <p class="fade-in-right" style="animation-duration: 900ms">
      توسعه دهنده فرانت اند، دانشجوی مهندسی کامپیوتر، طراح UI
    </p>

    <br />
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
    <br />
    <br />
    <!-- <button
      class="bg-yellow-300 text-black px-4 py-2 rounded-full hover:-translate-y-2 hover:bg-yellow-200 fade-in-right"
      style="animation-duration: 1500ms">
      با من در تماس باش
      <FontAwesomeIcon class="mr-3" :icon="faArrowLeft" />
    </button> -->
  </div>
</template>
