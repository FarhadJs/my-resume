<template>
  <div
    class="py-10 flex flex-col justify-center items-center text-center bg-white bg-opacity-5">
    <h2 class="mb-5">فرهاد فلاحی</h2>
    <p>توسعه دهنده فرانت اند، دانشجوی مهندسی کامپیوتر، طراح UI</p>

    <div class="mt-10 flex flex-col gap-6">
      <h3>راه های ارتباطی با من</h3>
      <ul
        class="flex gap-4 justify-center items-center text-2xl">
        <i><FontAwesomeIcon :icon="faXTwitter" /></i>
        <i><FontAwesomeIcon :icon="faGithub" /></i>
        <i><FontAwesomeIcon :icon="faInstagram" /></i>
        <i><FontAwesomeIcon :icon="faLinkedin" /></i>
        <i><FontAwesomeIcon :icon="faTelegram" /></i>
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
