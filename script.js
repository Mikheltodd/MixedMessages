// Welcome Message
console.log(
  "\nWelcome to Mixed Messages\n(A random message generator)\nby Mikheltodd\n"
);

// import data
const { data } = require("./data.js");

// data

// Function to implement
const generateMessage = (data) => {
  let msg = "";
  let n_artists = Object.keys(data).length;
  let artist_id = Math.floor(Math.random() * n_artists) + 1;
  let artist = data[artist_id].artist_name;
  let artist_fact_id = Math.floor(
    Math.random() * data[artist_id].artist_facts.length
  );
  let artist_fact = data[artist_id].artist_facts[artist_fact_id];
  let artist_song_id = Math.floor(
    Math.random() * data[artist_id].artist_songs.length
  );
  let artist_song = data[artist_id].artist_songs[artist_song_id].song_title;
  let release_year = data[artist_id].artist_songs[artist_song_id].release_year;
  let song_fact_id = Math.floor(
    Math.random() *
      data[artist_id].artist_songs[artist_song_id].song_facts.length
  );
  let song_fact =
    data[artist_id].artist_songs[artist_song_id].song_facts[song_fact_id];
  msg +=
    '"' +
    artist_song +
    '"' +
    " by " +
    artist +
    artist_fact +
    "was released on " +
    release_year +
    song_fact;
  return msg;
};

// Testing
/* for (let i = 0; i < 10; i++) {
  let message = generateMessage(data);
  console.log(`Your random message #${i + 1} is: \n${message}\n`);
} */

// Program Execution
let message = generateMessage(data);
console.log(`Your random message is: \n\n${message}\n`);
