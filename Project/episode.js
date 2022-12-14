let episode = {
    title: 'Dark Beginning',
    duration: 45,
    hasBeenWatched: false
  };


let episodeTitle = episode.title;
let episodeDuration = episode.duration;
let episodeHasBeenWatched = episode.hasBeenWatched;
  
class Episode {
  constructor(title, duration, hasBeenWatched) {
    this.title = title;
    this.duration = duration;
    this.hasBeenWatched = hasBeenWatched;
  }
}

let firstEpisode = new Episode('Dark Beginnings', 45, true);
let secondEpisode = new Episode('The Mystery Continues', 45, false);
let thirdEpisode = new Episode('The Unexpected Climax', 60, false);
