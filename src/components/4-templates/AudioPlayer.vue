<script setup lang="ts">
import TrackInfo from "../3-organisms/TrackInfo.vue";
import TimeLine from "../3-organisms/TimeLine.vue";
import Controls from "../3-organisms/Controls.vue";
</script>

<template>
  <div :class="$style.audio_player">
    <TrackInfo />
    <TimeLine />
    <Controls />
  </div>
</template>

<style module>
.audio_player {
  width: 100%;
  padding: 3rem;
  background-color: var(--f-flat-blue-10);
}

@media screen and (min-width: 1024px) {
  .audio_player {
    background-color: transparent;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDg5IiBoZWlnaHQ9IjQ5MCIgdmlld0JveD0iMCAwIDQ4OSA0OTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0zOTguNDA0IDguMzg4ODhDNDM4LjAxNCAxMy4wNjE3IDQ3NS45NjUgNTEuMDk0NyA0ODAuNjI4IDkwLjc4MDhDNDkxLjc5MSAxOTMuNTk1IDQ5MS43OTEgMjk2LjQwOSA0ODAuNjI4IDM5OS4yMTlDNDc1Ljk2NSA0MzguOTEgNDM4LjAxNCA0NzYuOTM4IDM5OC40MDQgNDgxLjYxMUMyOTUuODA0IDQ5Mi43OTYgMTkzLjIgNDkyLjc5NiA5MC41OTU2IDQ4MS42MTFDNTAuOTg2MSA0NzYuOTM4IDEzLjAzNSA0MzguOTEgOC4zNzE3NiAzOTkuMjE5Qy0yLjc5MDU5IDI5Ni40MDkgLTIuNzkwNTkgMTkzLjU5NSA4LjM3MTc2IDkwLjc4MDhDMTMuMDM1IDUxLjA5NDcgNTAuOTg2MSAxMy4wNTczIDkwLjU5NTYgOC4zODg4OEMxOTMuMTk2IC0yLjc5NjI5IDI5NS44IC0yLjc5NjI5IDM5OC40MDQgOC4zODg4OFoiIGZpbGw9IiNFN0VFRkIiLz4KPC9zdmc+Cg==");
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: contain;
    height: 490px;
    width: 490px;
    padding: 5rem 2.5rem;
    margin: 2.5rem;
  }
}
</style>
