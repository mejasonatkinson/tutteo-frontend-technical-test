<script setup lang="ts">
import { ref } from "vue";
import { useTrackStore } from "../../stores/trackStore";

const trackStore = useTrackStore();
const audio = ref<HTMLAudioElement | null>(null);

/* action update currentTime in trackStore */
const seekTrack = (event: Event) => {
  const target = event.target as HTMLInputElement;
  audio.value!.currentTime = Number(target.value);
  trackStore.seekTrack(Number(target.value));
};

/* format the time correctly into minutes and seconds */
const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};
</script>

<template>
  <div
    :class="$style.timeline"
    :style="`--played-percentage: ${(trackStore.currentTime / trackStore.duration) * 100}`"
  >
    <span :class="$style.start_end">
      <span>{{ formatTime(trackStore.currentTime) }}</span>
      <span>{{ formatTime(trackStore.duration) }}</span>
    </span>
    <input
      type="range"
      min="0"
      :max="trackStore.duration"
      v-model="trackStore.currentTime"
      @input="seekTrack"
    />
  </div>
</template>

<style module>
/* Container for timeline to position the elements properly */
.timeline {
  position: relative;
  width: 100%;
  margin-bottom: 30px;
}

.timeline .start_end {
  display: flex;
  justify-content: space-between;
  color: var(--f-tutteo-purple);
  margin-bottom: 10px;
}

/* Input range slider */
input[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 0.4rem;
  background: transparent;
  outline: none; /* Remove outline */
  cursor: pointer;
}

/* The track (background) */
input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 6px;
  cursor: pointer;
  background: var(--f-white); /* Track color */
}

/* The thumb (the slider handle) */
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 15px;
  height: 15px;
  background: var(--f-tutteo-purple); /* Thumb color */
  border-radius: 50%;
  margin-top: -5px; /* Center the thumb vertically */
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  cursor: pointer;
}

/* Firefox */
input[type="range"]::-moz-range-track {
  width: 100%;
  height: 6px;
  cursor: pointer;
  background: var(--f-white); /* Track color */
}

input[type="range"]::-moz-range-thumb {
  width: 15px;
  height: 15px;
  background: var(--f-tutteo-purple); /* Thumb color */
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
}

/* IE */
input[type="range"]::-ms-track {
  width: 100%;
  height: 6px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}

input[type="range"]::-ms-fill-lower {
  background: var(--f-white); /* Track color */
}

input[type="range"]::-ms-fill-upper {
  background: var(--f-white); /* Track color */
}

input[type="range"]::-ms-thumb {
  width: 15px;
  height: 15px;
  background: var(--f-tutteo-purple); /* Thumb color */
  border-radius: 50%;
  cursor: pointer;
  margin-top: 0px; /* Center the thumb vertically */
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
}

/* Current time indicator */
.timeline::before {
  content: "";
  position: absolute;
  height: 6px;
  background: var(--f-tutteo-purple-dark); /* Played portion color */
  bottom: 3px;
  left: 0;
  width: calc(var(--played-percentage, 0) * 1%); /* Set in template */
  pointer-events: none; /* Allow clicks to pass through */
}
</style>
