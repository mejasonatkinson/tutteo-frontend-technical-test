<script setup lang="ts">
import AudioPlayer from "../4-templates/AudioPlayer.vue";
import TrackList from "../4-templates/TrackList.vue";
</script>

<template>
  <div :class="$style.audio_player_container">
    <AudioPlayer />
    <TrackList />
  </div>
</template>

<style module>
@media screen and (min-width: 1024px) {
  .audio_player_container {
    display: flex;
  }
}
</style>
