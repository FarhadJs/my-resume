<script setup>
  import FirstText from "./components/FirstText.vue";
  import About from "./components/About.vue";
  import MyServices from "./components/MyServices.vue";
  import MySkills from "./components/MySkills.vue";
  import Portfolio from "./components/Portfolio.vue";
  import Footer from "./components/Footer.vue";

  window.addEventListener("scroll", function () {
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
  });
</script>

<template>
  <div dir="rtl">
    <div
      class="flex flex-col lg:flex-row gap-10 justify-center items-center px-5 lg:px-0">
      <img
        class="img-hor-vert min-w-96 p-14 lg:p-0"
        src="./assets/images/illustrations/hello3.svg"
        draggable="false" />

      <FirstText />
    </div>

    <About />
    <MyServices />
    <MySkills />
    <Portfolio />
    <Footer />
  </div>
</template>

<style scoped>
  .img-hor-vert {
    transform: scaleX(-1) !important;
    animation: FadeInFromRight 1s ease-in-out !important;

    @apply m-20;
  }
</style>
