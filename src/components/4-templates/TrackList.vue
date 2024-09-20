<script setup lang="ts">
import { useTrackStore } from "../../stores/trackStore";

const trackStore = useTrackStore();

/* action, update selectTrack in trackStore */
const selectTrack = (index: number) => {
  trackStore.selectTrack(index);
};
</script>

<template>
  <div :class="$style.track_list">
    <ul>
      <li
        v-for="(track, index) in trackStore.tracks"
        :key="index"
        :class="{
          [$style.active]: index === trackStore.currentTrackIndex,
        }"
        @click="selectTrack(index)"
      >
        <img
          :src="track.thumbnail"
          :alt="track.artist + ' thumbnail'"
          :class="$style.thumbnail"
        />
        <div :class="$style.track_details">
          <h3>{{ track.title }}</h3>
          <p>by {{ track.artist }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<style module>
.track_list {
  width: 100%;
  padding: 3rem;
  position: relative;
  background-color: var(--f-edu-green-10);
}

@media screen and (min-width: 1024px) {
  .track_list {
    background-color: transparent;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDg5IiBoZWlnaHQ9IjQ5MCIgdmlld0JveD0iMCAwIDQ4OSA0OTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0zOTguNDA0IDguMzg4ODhDNDM4LjAxNCAxMy4wNjE3IDQ3NS45NjUgNTEuMDk0NyA0ODAuNjI4IDkwLjc4MDhDNDkxLjc5MSAxOTMuNTk1IDQ5MS43OTEgMjk2LjQwOSA0ODAuNjI4IDM5OS4yMTlDNDc1Ljk2NSA0MzguOTEgNDM4LjAxNCA0NzYuOTM4IDM5OC40MDQgNDgxLjYxMUMyOTUuODA0IDQ5Mi43OTYgMTkzLjIgNDkyLjc5NiA5MC41OTU2IDQ4MS42MTFDNTAuOTg2MSA0NzYuOTM4IDEzLjAzNSA0MzguOTEgOC4zNzE3NiAzOTkuMjE5Qy0yLjc5MDU5IDI5Ni40MDkgLTIuNzkwNTkgMTkzLjU5NSA4LjM3MTc2IDkwLjc4MDhDMTMuMDM1IDUxLjA5NDcgNTAuOTg2MSAxMy4wNTczIDkwLjU5NTYgOC4zODg4OEMxOTMuMTk2IC0yLjc5NjI5IDI5NS44IC0yLjc5NjI5IDM5OC40MDQgOC4zODg4OFoiIGZpbGw9IiNFN0YzRUQiLz4KPC9zdmc+Cg==");
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: contain;
    height: 490px;
    width: 490px;
    padding: 5rem 2.5rem;
    margin: 2.5rem;
  }
}

.track_list ul {
  list-style: none;
  height: 330px;
  overflow: scroll;
}

@media screen and (min-width: 1024px) {
  .track_list ul::before,
  .track_list ul::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    max-width: 350px;
    margin: auto;
    height: 20px; /* Adjust based on how much fading you want */
    pointer-events: none; /* Allow clicks to pass through */
  }

  .track_list ul::before {
    top: 80px;
    background: linear-gradient(
      to bottom,
      rgba(231, 243, 237, 1),
      rgba(231, 243, 237, 0)
    );
  }

  .track_list ul::after {
    bottom: 80px;
    background: linear-gradient(
      to top,
      rgba(231, 243, 237, 1),
      rgba(231, 243, 237, 0)
    );
  }
}

/* Hide scrollbar for Chrome, Safari and Opera */
.track_list ul ::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.track_list ul {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.track_list ul li {
  display: flex;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  transition:
    background-color 0.3s,
    opacity 0.3s ease;
}

.track_list ul li.active {
  background-color: rgba(var(--f-white-rgb), 0.5);
  border-radius: 15px;
}

.track_list ul li:hover {
  opacity: 0.8;
}

.track_list ul li.active:hover {
  opacity: 1;
}

.track_list ul li .thumbnail {
  margin-right: 1rem;
  width: 60px;
  height: 60px;
  border-radius: 10px;
}

.track_list ul li h3 {
  font-family: var(--f-font-heading);
  font-weight: 400;
  font-size: 22px;
  line-height: 26px;
}

.track_list ul li p {
  font-size: 12px;
  line-height: 16px;
}
</style>
