# Design of The Program

## Topics

The first version of this project will show messages about music: artists, songs, dates, facts, somethink like [thisdayinmusic](https://www.thisdayinmusic.com/on-this-day/) does in its webpage:

> 1956 - Pat Boone\
> American singer, actor Pat Boone was at No.1 on the UK singles chart with 'I'll Be Home.' Boone scored over 30 UK Top 40 hit singles during the 50s and early 60s and was the second biggest charting artist behind only Elvis Presley.

## Message Structure

```javascript
    message = song + connection + artist + fact_about_artist + fact_about_song + fact_abot_song_year
```
Where: 
* song: a title of a song 
* connection: how that song is related with an artist (interpreted/written by)
* artist: a musician or a band
* fact_about_artist: something interesting about the artist (nationality/acknowledgement/career)
* fact_about_song: something interesting about the artist (about/popularity)
* fact_abot_song_year: year of release

This structure will create a dependency between data to be coherent with reality. So, a tree of dependencies is sketch up in this [image](./img/design.png).