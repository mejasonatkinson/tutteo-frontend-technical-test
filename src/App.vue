<script setup lang="ts">
import PlayerPage from "./components/5-pages/PlayerPage.vue";
</script>

<template>
  <div :class="$style.center">
    <div :class="$style.container">
      <h1>Senior Front-End Developer: Technical test - Audio Player</h1>
      <PlayerPage />
    </div>
  </div>
</template>

<style module>
.center {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}
.container {
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  width: 100%;
  animation: fadeIn 2s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@media screen and (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}
@media screen and (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}
@media screen and (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}

h1 {
  font-family: var(--f-font-heading);
  font-weight: 400;
  text-align: center;
}
</style>
