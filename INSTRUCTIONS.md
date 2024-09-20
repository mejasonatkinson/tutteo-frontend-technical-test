# Senior Front-End Developer: Technical test

**Table of content**

# Introduction

The objective is to create a basic yet functional Spotify like player. The player will include core features such as play/pause/stop functionality, a timeline slider, and display of the audio thumbnail. The goal is to assess your ability to implement a user-friendly and efficient front-end application using modern web technologies.

# Specifications

<aside>
💡 The key words `MUST`, `MUST NOT`, `REQUIRED`, `SHALL`, `SHALL NOT`, `SHOULD`, `SHOULD NOT`, `RECOMMENDED`, `NOT RECOMMENDED`, `MAY`, and `OPTIONAL` in this document are to be interpreted as described in [BCP 14](https://tools.ietf.org/html/bcp14) [[RFC2119](https://tools.ietf.org/html/rfc2119)] [[RFC8174](https://tools.ietf.org/html/rfc8174)] when, and only when, they appear in all capitals, as shown here.

</aside>

## Feature Set

1. **Basic Player Controls**: The player **MUST** include play, pause, and stop functionalities.
2. **Timeline Slider**: The player **MUST** have a timeline slider that shows the current position and allows the user to seek to different parts of the track.
3. **Track Information**: Display of the current track’s information including title, artist, and thumbnail **IS REQUIRED**.

## Design specifications

<aside>
🎨 **Note:** We don’t expect you to be a designer. We just expect the UI to have a **“quality look”**: consistency in margins, alignments, colors, etc…

</aside>

- The audio player **SHOULD** have a clean, intuitive interface.
- The player **MUST** display the following controls: play/pause/stop button, timeline slider.
- The player **MUST** display the current track's title, artist, and thumbnail.
- The UI **SHOULD** be responsive and work well on both desktop and mobile devices.
- The usage of UI kit and/or icons library like [FontAwesome](https://fontawesome.com/) are **OPTIONAL** but **RECOMMENDED** to save you some time.

For the functionalities, UX and user interaction flows you can get some inspirations from real music platforms like: [Spotify](https://open.spotify.com/intl-fr), [Deezer](https://www.deezer.com/),  or [Tidal](https://tidal.com/).

For the UI, you’ll find some design inspiration in Dribble or Pinterest for example: 

[Browse thousands of Audio Player images for design inspiration | Dribbble](https://dribbble.com/search/audio-player)

![« Audio player » on Dribble.com](https://prod-files-secure.s3.us-west-2.amazonaws.com/ec3f0ce9-f445-40c5-8162-de535d1bb61e/64dc7a73-4621-4cf1-8e57-51811a9ccfd1/CleanShot_2024-03-11_at_11.21.552x.png)

« Audio player » on Dribble.com

[Pinterest](https://www.pinterest.fr/search/pins/?q=music%20player%20ui%20design&rs=typed)

![« Music Player UI Design » on Pinterest.fr](https://prod-files-secure.s3.us-west-2.amazonaws.com/ec3f0ce9-f445-40c5-8162-de535d1bb61e/61682f13-f9e4-41fc-bb72-d105589020ed/CleanShot_2024-03-11_at_11.52.222x.png)

« Music Player UI Design » on Pinterest.fr

## **Music to use**

1. **Music choice:** You **MUST** use ****a royalty free music. You can find it in different platforms like: [Pixabay](https://pixabay.com/music/), [Free Stock Music](https://www.free-stock-music.com/), [Bensound](https://www.bensound.com/)
2. **Usage:** Credits **MAY** **BE** **REQUIRED** depending of the usage conditions of the music you choose.

## Technical requirements

- You **MUST** use Vue 3 and Composition API.
- You **MUST** use Typescript.
- The player **MUST** handle audio playbacks efficiently
- The application **MUST** be compatible with modern browsers (Chrome, Firefox, Safari, Edge).
- You **SHOULD** use CSS Modules for styling.
- You **SHOULD** use a format and linter system like Prettier, ESLint.
- Basic transitions and/or animations are **RECOMMENDED**.

## Repository guidelines

- You **MUST** create a Github repository
- The repository **MUST** contain a `README.md` file that explains how to run and test the project.
- It is highly **RECOMMENDED** to use the [Conventional Commits system](https://www.conventionalcommits.org/en/v1.0.0/).
- Adequate documentation and code comments **ARE REQUIRED** for maintainability.

# Submission rules

## How to submit the project

- The project **MUST** be named `tutteo-frontend-technical-test`
- The project **MUST** be submitted in a Github repository. You’ll have to add [@lanaambre](https://github.com/lanaambre) and [@gierschv](https://github.com/gierschv) as members of the repository.
- The completed project **MUST** be submitted by the agreed deadline.
- Any deviations from the specified requirements **MUST** be clearly documented in the README.

## Evaluation Criteria

- **Code Quality:** Readability, use of best practices, and adherence to Vue and TypeScript conventions.
- **Git Repository:** README, description and commit history will be read.
- **Design Implementation:** How well your UI matches basics design standards.
- **Functionality:** All required features should work as expected.
- **Documentation:** Clarity and completeness of the README and inline code comments.

# Resources links

## Music resources

[Royalty Free Music Download - Pixabay](https://pixabay.com/music/)

[Royalty Free Music for Content Creators, Perfect for YouTube Videos or Multimedia Projects](https://www.free-stock-music.com/)

[Music for Video Creators - Hear the Difference](https://www.bensound.com/)

## Design resources

[Browse thousands of Audio Player images for design inspiration | Dribbble](https://dribbble.com/search/audio-player)

[Pinterest](https://www.pinterest.fr/search/pins/?q=music%20player%20ui%20design&rs=typed)

[Font Awesome](https://fontawesome.com/)

## Developers resources

[Vue.js](https://vuejs.org/)

[JavaScript With Syntax For Types.](https://www.typescriptlang.org/)

[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)