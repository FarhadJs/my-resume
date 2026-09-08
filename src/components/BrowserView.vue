<template>
  <div @mouseenter="HoverCoverP" @mouseleave="HoverCoverP"
    class="relative z-50 lg:mt-44 overflow-hidden bg-white bg-opacity-15 w-72 h-56 lg:w-[450px] lg:h-72 rounded-t-lg rounded-b-md">
    <div ref="containerCover" class="absolute -top-10 right-0 left-0 bottom-0 z-40 transition-all duration-500"></div>
    <div class="w-full h-full bg-black bg-opacity-60">
      <div class="w-full h-full">
        <img :src="srcImage" :alt="title" class="full-image" draggable="false" />
      </div>
    </div>
    <a :href="props.projectUrl" target="_blank" rel="noopener noreferrer" ref="containerDetails"
      class="absolute -bottom-20 left-0 right-0 bg-black bg-opacity-70 py-4 z-50 text-left text-lg px-10 transition-all duration-500 cursor-pointer">
      {{ title }}
    </a>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  srcImage: { type: String, required: true },
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
  object-fit: fill;
  /* Ensures the image covers the container */
  position: absolute;
  top: 0;
  left: 0;
}
</style>
