<template>
  <div
    class="mt-44 lg:mt-96 flex flex-col justify-center items-center text-center animate-fade-in-top">
    <h1>نمونه کارها</h1>

    <div
      class="flex flex-col lg:flex-row gap-20 lg:gap-44 mt-20 lg:mt-0 items-center mb-44">
      <BrowserView
        v-for="(project, i) in Project_urls"
        :key="i"
        :srcImage="project.cover"
        :title="project.Title"
        :projectUrl="project.url" />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import BrowserView from "./BrowserView.vue";
  import CoffeeShopCover from "../assets/images/My_Projects/coffee-menu.png";
  import SweetPicCover from "../assets/images/My_Projects/sweet-cupcake.png";
  import SabzinehCover from "../assets/images/My_Projects/sabzineh.png";

  const Project_urls = [
    {
      Title: "Sweet Cupcake",
      url: "https://sweet-raiden-cupcake.netlify.app/",
      cover: SweetPicCover,
    },
    {
      Title: "Coffee Shop Menu",
      url: "https://coffeeshopmenulist.netlify.app/",
      cover: CoffeeShopCover,
    },
    {
      Title: "Sabzineh",
      url: "https://sabzineh.netlify.app/",
      cover: SabzinehCover,
    },
  ];
</script>

<style></style>
