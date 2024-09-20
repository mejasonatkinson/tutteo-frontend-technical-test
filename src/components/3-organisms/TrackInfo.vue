<script setup lang="ts">
import { computed } from "vue";
import { useTrackStore } from "../../stores/trackStore";

const trackStore = useTrackStore();

const currentTrack = computed(() => trackStore.currentTrack);
</script>

<template>
  <div :class="$style.track_info">
    <img
      :src="currentTrack.thumbnail"
      :alt="currentTrack.artist + ' thumbnail'"
      :class="$style.thumbnail"
    />
    <div :class="$style.details">
      <a :href="currentTrack.trackURL" target="_blank">
        <h2>{{ currentTrack.title }}</h2>
      </a>
      <p>
        by
        <a :href="currentTrack.artistURL" target="_blank">
          {{ currentTrack.artist }}
        </a>
      </p>
    </div>
  </div>
</template>

<style module>
.track_info img {
  width: 80px;
  height: 80px;
  border-radius: 15px;
  margin-bottom: 20px;
}

.track_info .details {
  text-align: left;
  margin-bottom: 30px;
}

.track_info .details a {
  text-decoration: none;
  color: var(--f-ink);
  transition: color 0.3s ease;
}

.track_info .details a:hover {
  color: var(--f-tutteo-purple);
}

.track_info .details a h2 {
  font-family: var(--f-font-heading);
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
}

@media screen and (min-width: 768px) {
  .track_info .details a h2 {
    font-size: 32px;
    line-height: 42px;
  }
}
</style>
