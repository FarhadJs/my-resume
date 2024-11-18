<template>
  <div
    @mouseenter="HoverCoverP"
    @mouseleave="HoverCoverP"
    class="relative z-40 lg:mt-44 overflow-hidden bg-white bg-opacity-15 w-72 h-56 lg:w-[450px] lg:h-72 rounded-t-lg rounded-b-md">
    <div
      ref="containerCover"
      class="absolute top-7 right-0 left-0 bottom-0 z-40 transition-all duration-500"></div>
    <div
      class="absolute flex justify-start gap-3 pr-2 items-center top-0 right-0 bg-black bg-opacity-60 rounded-t-lg w-20 h-7">
      <div class="bg-red-500 w-3 h-3 rounded-full"></div>
      <div class="bg-yellow-500 w-3 h-3 rounded-full"></div>
      <div class="bg-green-500 w-3 h-3 rounded-full"></div>
    </div>
    <div class="w-full h-full bg-black bg-opacity-60">
      <div class="w-full h-full">
        <img
          :src="srcImage"
          alt="coffee-menu"
          class="mt-7 full-image"
          draggable="false" />
      </div>
    </div>
    <h3
      @click="DirectToProject"
      ref="containerDetails"
      class="absolute -bottom-20 left-0 right-0 bg-black bg-opacity-70 py-4 z-50 text-left px-10 transition-all duration-500 cursor-pointer">
      {{ title }}
    </h3>
  </div>
</template>

<script setup>
  import { ref } from "vue";

  const props = defineProps({
    srcImage: { type: String, requeired: true },
    title: { type: String, required: true },
    projectUrl: { type: String, required: true },
  });

  const containerCover = ref();
  const containerDetails = ref();
  function HoverCoverP() {
    // console.log(containerCover);

    containerCover.value.classList.toggle("bg-black");
    containerCover.value.classList.toggle("bg-opacity-40");
    containerDetails.value.classList.toggle("-bottom-20");
    containerDetails.value.classList.toggle("-bottom-0");
  }

  function DirectToProject() {
    location.assign(props.projectUrl);
  }
</script>

<style scoped>
  .full-image {
    width: 100%;
    height: 100%;
    object-fit: fill; /* Ensures the image covers the container */
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
