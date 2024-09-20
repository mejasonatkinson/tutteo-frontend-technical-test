import { defineStore } from "pinia";
import track1 from "../assets/alex-productions-hard-as-steel.mp3";
import thumbnail1 from "../assets/alex-productions-hard-as-steel.jpg";
import track2 from "../assets/arthur-vyncke-cherry-metal.mp3";
import thumbnail2 from "../assets/arthur-vyncke-cherry-metal.jpg";
import track3 from "../assets/fsm-team-power.mp3";
import thumbnail3 from "../assets/fsm-team-power.jpg";
import track4 from "../assets/mixaund-a-new-beginning.mp3";
import thumbnail4 from "../assets/mixaund-a-new-beginning.jpg";
import track5 from "../assets/punch-deck-maximalism.mp3";
import thumbnail5 from "../assets/punch-deck-maximalism.jpg";
import track6 from "../assets/ron-gelinas-chill-beats-here-i-come.mp3";
import thumbnail6 from "../assets/ron-gelinas-chill-beats-here-i-come.jpg";

export const useTrackStore = defineStore("trackStore", {
  state: () => ({
    tracks: [
      {
        title: "Hard as Steel",
        artist: "Alex Productions",
        thumbnail: thumbnail1,
        src: track1,
        trackURL:
          "https://www.free-stock-music.com/alex-productions-hard-as-steel.html",
        artistURL:
          "https://www.free-stock-music.com/artist.alex-productions.html",
      },
      {
        title: "Cherry Metal",
        artist: "Arthur Vyncke",
        thumbnail: thumbnail2,
        src: track2,
        trackURL:
          "https://www.free-stock-music.com/arthur-vyncke-cherry-metal.html",
        artistURL: "https://www.free-stock-music.com/artist.arthur-vyncke.html",
      },
      {
        title: "Power",
        artist: "FSM Team",
        thumbnail: thumbnail3,
        src: track3,
        trackURL: "https://www.free-stock-music.com/fsm-team-power.html",
        artistURL: "https://www.free-stock-music.com/artist.fsm-team.html",
      },
      {
        title: "A New Beginning",
        artist: "Mixaund",
        thumbnail: thumbnail4,
        src: track4,
        trackURL:
          "https://www.free-stock-music.com/mixaund-a-new-beginning.html",
        artistURL: "https://www.free-stock-music.com/artist.mixaund.html",
      },
      {
        title: "Maximalism",
        artist: "Punch Deck",
        thumbnail: thumbnail5,
        src: track5,
        trackURL: "https://www.free-stock-music.com/punch-deck-maximalism.html",
        artistURL: "https://www.free-stock-music.com/artist.punch-deck.html",
      },
      {
        title: "Here I Come",
        artist: "Ron Gelinas Chill Beats",
        thumbnail: thumbnail6,
        src: track6,
        trackURL:
          "https://www.free-stock-music.com/ron-gelinas-chill-beats-here-i-come.html",
        artistURL:
          "https://www.free-stock-music.com/artist.ron-gelinas-chillout-lounge.html",
      },
    ],
    currentTrackIndex: 0,
    isPlaying: false,
    currentTime: 0,
    duration: 0,
  }),
  getters: {
    currentTrack: (state) => state.tracks[state.currentTrackIndex],
  },
  actions: {
    updateDuration(duration: number) {
      this.duration = duration;
    },
    prevTrack() {
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
        this.resetTrack();
      }
    },
    playPauseTrack() {
      this.isPlaying = !this.isPlaying;
    },
    stopTrack() {
      this.isPlaying = false;
      this.currentTime = 0;
    },
    resetTrack() {
      this.stopTrack();
    },
    nextTrack() {
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
        this.resetTrack();
      }
    },
    selectTrack(index: number) {
      this.currentTrackIndex = index;
      this.resetTrack();
    },
    updateTime(currentTime: number) {
      this.currentTime = currentTime;
    },
    seekTrack(time: number) {
      this.currentTime = time;
    },
  },
});
