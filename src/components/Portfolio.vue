<template>
  <section class="content-section page-width portfolio-section">
    <div class="section-label"><span>04</span> / نمونه کار های من</div>
    <div class="portfolio-heading">
      <h2>پروژه های <em>منتخب.</em></h2>
      <p>منتخبی از پروژه های واقعی و پیش نمایش های مفهومی.</p>
    </div>
    <div class="portfolio-grid" aria-label="پروژه های منتخب">
      <BrowserView
        v-for="(project, i) in Project_urls"
        :key="i"
        :srcImage="project.cover"
        :title="project.Title"
        :projectUrl="project.url" />
    </div>
  </section>
</template>

<script setup>
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
      Title: "Sabzineh / Plant Store",
      url: "https://sabzineh.netlify.app/",
      cover: SabzinehCover,
    },
  ];
</script>

<style></style>
