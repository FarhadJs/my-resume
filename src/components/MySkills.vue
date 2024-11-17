<template>
  <div class="mt-44 lg:mt-96 flex flex-col justify-center items-center animate-fade-in-top">
    <h1>مهارت های من</h1>
    <p class="my-8 lg:my-20 p-5 text-center">
      من یک یادگیرنده سریع و ماهر با تخصص قوی در مهارت های ضروری برای توسعه
      برنامه های کاربردی وب و طراحی محصول هستم.
    </p>

    <div class="mt-10 flex flex-col lg:flex-row gap-10 lg:gap-44">
      <div class="flex flex-col gap-10">
        <div class="mirror-bg bg-white bg-opacity-10 p-3 rounded-md">
          <h4 class="mb-3">WordPress</h4>
          <div
            class="w-80 h-4 rounded-md bg-white flex justify-end items-center">
            <div class="w-48 h-4 rounded-md bg-blue-400"></div>
          </div>
        </div>
        <div class="mirror-bg bg-white bg-opacity-10 p-3 rounded-md">
          <h4 class="mb-3">My SQL</h4>
          <div
            class="w-80 h-4 rounded-md bg-white flex justify-end items-center">
            <div class="w-72 h-4 rounded-md bg-yellow-200"></div>
          </div>
        </div>

        <div class="mirror-bg bg-white bg-opacity-10 p-3 rounded-md">
          <h4 class="mb-3">Nuxt.js</h4>
          <div
            class="w-80 h-4 rounded-md bg-white flex justify-end items-center">
            <div class="w-64 h-4 rounded-md bg-green-700"></div>
          </div>
        </div>

        <div class="mirror-bg bg-white bg-opacity-10 p-3 rounded-md">
          <h4 class="mb-3">Node Js</h4>
          <div
            class="w-80 h-4 rounded-md bg-white flex justify-end items-center">
            <div class="w-20 h-4 rounded-md bg-green-800"></div>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-10">
        <div class="mirror-bg bg-white bg-opacity-10 p-3 rounded-md">
          <h4 class="mb-3">Vue</h4>
          <div
            class="w-80 h-4 rounded-md bg-white flex justify-end items-center">
            <div class="w-72 h-4 rounded-md bg-green-600"></div>
          </div>
        </div>
        <div class="mirror-bg bg-white bg-opacity-10 p-3 rounded-md">
          <h4 class="mb-3">React</h4>
          <div
            class="w-80 h-4 rounded-md bg-white flex justify-end items-center">
            <div class="w-72 h-4 rounded-md bg-sky-400"></div>
          </div>
        </div>

        <div class="mirror-bg bg-white bg-opacity-10 p-3 rounded-md">
          <h4 class="mb-3">HTML & CSS</h4>
          <div
            class="w-80 h-4 rounded-md bg-white flex justify-end items-center">
            <div class="w-80 h-4 rounded-md bg-blue-600"></div>
          </div>
        </div>

        <div class="mirror-bg bg-white bg-opacity-10 p-3 rounded-md">
          <h4 class="mb-3">JavaScript</h4>
          <div
            class="w-80 h-4 rounded-md bg-white flex justify-end items-center">
            <div class="w-80 h-4 rounded-md bg-yellow-400"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
  .mirror-bg {
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px); /* For Safari */
  }
</style>
