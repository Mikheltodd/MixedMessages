/* 
For the list of the artists: Rolling Stones, 100 Greatest Artists (https://www.rollingstone.com/music/music-lists/100-greatest-artists-147446/ray-charles-29783/)

For the artists info: Wikipedia

For the songs: SongFacts.com (https://www.songfacts.com/)

 */

const data = {
  1: {
    artist_name: "The Beatles",
    artist_facts: [
      ", an English rock band formed in Liverpool in 1960, ",
      ", regarded as the most influential band of all time, ",
      ", whose best-known line-up comprised John Lennon, Paul McCartney, George Harrison and Ringo Starr, ",
      ", whose sound incorporated elements of classical music and traditional pop in innovative ways, ",
    ],
    artist_songs: [
      {
        song_id: 1,
        song_title: "Let It Be",
        release_year: "8 May 1970",
        song_facts: [
          " and written by Paul McCartney and inspired by his mother, Mary, who died when he was 14. ",
          " and hated by John Lennon because of it's apparent Christian overtones. ",
          " and first recorded by Aretha Franklin in December 1969. ",
          " and the first Beatles song released in The Soviet Union. The single made it there in 1972. ",
        ],
      },
      {
        song_id: 2,
        song_title: "Hey Jude",
        release_year: "26 August 1968",
        song_facts: [
          ' and the song was initially written as "Hey Jules", song meant to comfort John Lennon\'s 5-year-old son Julian as his parents were getting a divorce. ',
          " and the Beatles longest single, running 7:11, and at the time was the longest song ever released as a single. ",
          " and the first song released on Apple Records, the record label owned by The Beatles. ",
          " and hit #1 in at least 12 countries and by the end of 1968 had sold more than 5 million copies.",
        ],
      },
      {
        song_id: 3,
        song_title: "Here Comes The Sun",
        release_year: "26 September 1969",
        song_facts: [
          " and written by George Harrison in Eric Clapton's garden using one of Clapton's acoustic guitars after attending a round of business meetings. ",
          " and the instrumental break is similar to 'Badge' which Harrison helped Clapton write for his band Cream. ",
          " and inspired by the long winters in England which Harrison thought went on forever. ",
          " and John Lennon did not play on this. Around this time, he was making a habit of not playing on Harrison's compositions as the two were not on the best of terms. ",
        ],
      },
    ],
  },
  2: {
    artist_name: "Bob Dylan",
    artist_facts: [
      ", who as a teenager claimed that playing with little richard was his life goal - though he might have been joking, ",
      ", (born Robert Allen Zimmerman) an American singer-songwriter, author and visual artist, ",
      ", often regarded as one of the greatest songwriters of all time, ",
      ", whose lyrics incorporated a range of political, social, philosophical, and literary influences, defying pop music conventions and appealing to the burgeoning counterculture, ",
    ],
    artist_songs: [
      {
        song_id: 1,
        song_title: "Blowin' in the Wind",
        release_year: "August 13, 1963",
        song_facts: [
          ' and Dylan claims that he wrote this song in about 10 minutes one afternoon. He put words to the melody of an old slave song called "No More Auction Block" which he might have learned from Carter family records. ',
          " and made Dylan gained National exposure when he performed this song with Peter, Paul & Mary at the 1963 Newport Folk Festival.  ",
          " and written by George Harrison in Eric Clapton's garden using one of Clapton's acoustic guitars after attending a round of business meetings. ",
          " and the Dylan version of this song was never a hit - it was a cover by Peter, Paul & Mary that made #2 in the US in February 1963, introducing many people to the music of Bob Dylan, who was an obscure folk singer at the time. ",
        ],
      },
      {
        song_id: 2,
        song_title: "The Times They Are a-Changin'",
        release_year: "January 13, 1964",
        song_facts: [
          " and became an anthem for frustrated youth. It summed up the anti-establishment feelings of people who would later be known as hippies. Many of the lyrics are based on the Civil Rights movement in the US. ",
          " and performed for the first time at a Carnegie Hall concert on October 26 of 1963, using it as his opening number. ",
          " and became his first hit in the UK in 1965, climbing to #9 on April 21. ",
          " and Dylan allowed this to be used in commercials for accounting firm Coopers and Lybrand in the '90s. In 1996, he also licensed it for commercial use by the Bank of Montreal. ",
        ],
      },
      {
        song_id: 3,
        song_title: "Like a Rolling Stone",
        release_year: "July 20, 1965",
        song_facts: [
          ' and The title is not a reference to The Rolling Stones. It is taken from the proverb "a rolling stone gathers no moss". Dylan got the idea from the 1949 Hank Williams song "Lost Highway," which contains the line, "I\'m a rolling stone, all alone and lost." ',
          " and the only song on the album produced by Tom Wilson, who produced Dylan's second album, The Freewheelin' Bob Dylan. Wilson had been a jazz producer and was brought in to replace John Hammond. ",
          " and Dylan based the lyrics on a short story he had written about a debutante who becomes a loner when she falls out of high society. The lyrics that made it into the song are only a small part of what was in the story. ",
          " and it is rumored that this was written about one-time debutante Edie Sedgwick, who was part of artist Andy Warhol's crowd. She was the subject of an emotional tug-of-war between the Dylan camp and the Warhol camp. ",
        ],
      },
    ],
  },
  3: {
    artist_name: "Elvis Presley",
    artist_facts: [
      ", an American singer, musician and actor, ",
      ", regarded as one of the most significant cultural icons of the 20th century, ",
      ', often referred to as the "King of Rock and Roll", ',
      ", whose energized interpretations of songs and sexually provocative performance style led him to both great success and initial controversy,",
    ],
    artist_songs: [
      {
        song_id: 1,
        song_title: "Can't Help Falling in Love",
        release_year: "October 1, 1961",
        song_facts: [" and . ", " and . ", " and . ", " and . "],
      },
      {
        song_id: 2,
        song_title: "Jailhouse Rock",
        release_year: "September 24, 1957",
        song_facts: [" and . ", " and . ", " and . ", " and . "],
      },
      {
        song_id: 3,
        song_title: "Don't Be Cruel",
        release_year: "July 13, 1956",
        song_facts: [" and . ", " and . ", " and . ", " and . "],
      },
    ],
  },
  4: {
    artist_name: "The Rolling Stones",
    artist_facts: [
      ", an English rock band formed in London in 1962, ",
      ", who pioneered the gritty, heavier-driven sound that came to define hard rock, ",
      ", whose first stable line-up was vocalist Mick Jagger, multi-instrumentalist Brian Jones, guitarist Keith Richards, drummer Charlie Watts, and bassist Bill Wyman, ",
    ],
    artist_songs: [
      {
        song_id: 1,
        song_title: "(I Can't Get No) Satisfaction",
        release_year: "5 June 1965",
        song_facts: [" and . ", " and . ", " and . ", " and . "],
      },
      {
        song_id: 2,
        song_title: "Angie",
        release_year: "20 August 1973",
        song_facts: [" and . ", " and . ", " and . ", " and . "],
      },
      {
        song_id: 3,
        song_title: "She's a Rainbow",
        release_year: "November 1967",
        song_facts: [" and . ", " and . ", " and . ", " and . "],
      },
    ],
  },
  5: {
    artist_name: "Chuck Berry",
    artist_facts: [
      ", an American singer, songwriter and guitarist, ",
      ', nicknamed the "Father of Rock and Roll" ',
      ", who refined and developed rhythm and blues into the major elements that made rock and roll distinctive, ",
    ],
    artist_songs: [
      {
        song_id: 1,
        song_title: "Johnny B. Goode",
        release_year: "March 31, 1958",
        song_facts: [" and . ", " and . ", " and . ", " and . "],
      },
      {
        song_id: 2,
        song_title: "Too Much Monkey Business",
        release_year: "September 1956",
        song_facts: [" and . ", " and . ", " and . ", " and . "],
      },
      {
        song_id: 3,
        song_title: "Maybellene",
        release_year: "July 1955",
        song_facts: [" and . ", " and . ", " and . ", " and . "],
      },
    ],
  },
  6: {
    artist_name: "Jimi Hendrix",
    artist_facts: [
      ", an American musician, singer, and songwriter, ",
      ", who is widely regarded as one of the most influential electric guitarists in the history of popular music, ",
      ', described as "arguably the greatest instrumentalist in the history of rock music" by The Rock and Roll Hall of Fame, ',
    ],
    artist_songs: [
      {
        song_id: 1,
        song_title: "",
        release_year: "",
        song_facts: [" and . ", " and . ", " and . ", " and . "],
      },
      {
        song_id: 2,
        song_title: "",
        release_year: "",
        song_facts: [" and . ", " and . ", " and . ", " and . "],
      },
      {
        song_id: 3,
        song_title: "",
        release_year: "",
        song_facts: [" and . ", " and . ", " and . ", " and . "],
      },
    ],
  },
  7: {
    artist_name: "James Brown",
    artist_facts: [
      ", an American singer, songwriter, dancer, musician, record producer, and bandleader, ",
      ", the central progenitor of funk music and a major figure of 20th-century music, ",
      ', often referred to by the honorific nicknames "Godfather of Soul", "Mr. Dynamite", and "Soul Brother No. 1", ',
    ],
    artist_songs: [
      {
        song_id: 1,
        song_title: "",
        release_year: "",
        song_facts: [" and . ", " and . ", " and . ", " and . "],
      },
      {
        song_id: 2,
        song_title: "",
        release_year: "",
        song_facts: [" and . ", " and . ", " and . ", " and . "],
      },
      {
        song_id: 3,
        song_title: "",
        release_year: "",
        song_facts: [" and . ", " and . ", " and . ", " and . "],
      },
    ],
  },
  8: {
    artist_name: "Little Richard",
    artist_facts: [
      ", (born Richard Wayne Penniman) an American musician, singer, and songwriter and an influential figure in popular music and culture for seven decades, ",
      ", whose charismatic showmanship and dynamic music, characterized by frenetic piano playing, pounding back beat and raspy shouted vocals, laid the foundation for rock and roll, ",
      ', nicknamed "The Innovator, The Originator, and The Architect of Rock and Roll" , ',
    ],
    artist_songs: [
      {
        song_id: 1,
        song_title: "",
        release_year: "",
        song_facts: [" and . ", " and . ", " and . ", " and . "],
      },
      {
        song_id: 2,
        song_title: "",
        release_year: "",
        song_facts: [" and . ", " and . ", " and . ", " and . "],
      },
      {
        song_id: 3,
        song_title: "",
        release_year: "",
        song_facts: [" and . ", " and . ", " and . ", " and . "],
      },
    ],
  },
  9: {
    artist_name: "Aretha Franklin",
    artist_facts: [
      ", an American singer and pianist that began her career as a child singing gospel at New Bethel Baptist Church in Detroit, Michigan, where her father C. L. Franklin was a minister, ",
      ", who found acclaim and commercial success after signing with Atlantic Records in 1966, ",
      ', also known as the "Queen of Soul", ',
    ],
    artist_songs: [
      {
        song_id: 1,
        song_title: "",
        release_year: "",
        song_facts: [" and . ", " and . ", " and . ", " and . "],
      },
      {
        song_id: 2,
        song_title: "",
        release_year: "",
        song_facts: [" and . ", " and . ", " and . ", " and . "],
      },
      {
        song_id: 3,
        song_title: "",
        release_year: "",
        song_facts: [" and . ", " and . ", " and . ", " and . "],
      },
    ],
  },
  10: {
    artist_name: "Ray Charles",
    artist_facts: [
      ", an American singer, songwriter, pianist, and composer., ",
      ', often referred to as "the Genius", ',
      ", who was blinded during childhood due to glaucoma, ",
    ],
    artist_songs: [
      {
        song_id: 1,
        song_title: "",
        release_year: "",
        song_facts: [" and . ", " and . ", " and . ", " and . "],
      },
      {
        song_id: 2,
        song_title: "",
        release_year: "",
        song_facts: [" and . ", " and . ", " and . ", " and . "],
      },
      {
        song_id: 3,
        song_title: "",
        release_year: "",
        song_facts: [" and . ", " and . ", " and . ", " and . "],
      },
    ],
  },
};

module.exports = { data };
