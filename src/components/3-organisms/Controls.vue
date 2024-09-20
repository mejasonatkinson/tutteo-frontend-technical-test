<script setup lang="ts">
import { ref, computed } from "vue";
import { useTrackStore } from "../../stores/trackStore";
import PrevIcon from "../0-icons/PrevIcon.vue";
import PlayIcon from "../0-icons/PlayIcon.vue";
import PauseIcon from "../0-icons/PauseIcon.vue";
import NextIcon from "../0-icons/NextIcon.vue";
import StopIcon from "../0-icons/StopIcon.vue";

const trackStore = useTrackStore();
const audio = ref<HTMLAudioElement | null>(null);

const currentTrack = computed(() => trackStore.currentTrack);

/* action update Duration in trackStore */
const updateDuration = () => {
  trackStore.updateDuration(audio.value?.duration || 0);
};

/* action update Time in trackStore */
const updateTime = () => {
  trackStore.updateTime(audio.value?.currentTime || 0);
};

/* action update currentTrack in trackStore */
const prevTrack = () => {
  trackStore.prevTrack();
};

/* action update playPauseTrack in trackStore AND if isPlaying is true, pause player else play */
const playPauseTrack = () => {
  if (trackStore.isPlaying) {
    audio.value?.pause();
  } else {
    audio.value?.play();
  }
  trackStore.playPauseTrack();
};

/* action update stopTrack in trackStore */
const stopTrack = () => {
  audio.value?.pause();
  audio.value!.currentTime = 0;
  trackStore.stopTrack();
};

/* working with stopTrack, to reset song */
const resetTrack = () => {
  stopTrack();
  if (trackStore.isPlaying) {
    audio.value?.play();
  }
};

/* action update currentTrack in trackStore */
const nextTrack = () => {
  trackStore.nextTrack();
};
</script>

<template>
  <audio
    ref="audio"
    :src="currentTrack.src"
    @timeupdate="updateTime"
    @ended="stopTrack"
    @loadedmetadata="updateDuration"
  ></audio>
  <div :class="$style.controls">
    <button @click="prevTrack" :disabled="trackStore.currentTrackIndex == 0">
      <PrevIcon :class="$style.icon" />
    </button>
    <button @click="playPauseTrack">
      <PlayIcon v-if="trackStore.isPlaying" :class="$style.icon" />
      <PauseIcon v-else :class="$style.icon" />
    </button>
    <button
      @click="nextTrack"
      :disabled="trackStore.currentTrackIndex == trackStore.tracks.length - 1"
    >
      <NextIcon :class="$style.icon" />
    </button>
    <button @click="resetTrack">
      <StopIcon :class="$style.icon" />
    </button>
  </div>
</template>

<style module>
.controls {
  display: flex;
  justify-content: space-between;
}

.controls button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.controls button .icon {
  width: 42px;
  height: 42px;
  color: var(--f-tutteo-purple);
}

.controls button:hover .icon {
  color: var(--f-tutteo-purple-dark);
}

.controls button:disabled .icon {
  color: var(--f-grey-disabled);
}
</style>
