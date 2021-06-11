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
        release_year: "8 May 1970,",
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
        release_year: "26 August 1968,",
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
        release_year: "26 September 1969,",
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
        release_year: "August 13, 1963,",
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
        release_year: "January 13, 1964,",
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
        release_year: "July 20, 1965,",
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
        release_year: "October 1, 1961,",
        song_facts: [
          " and was Elvis' most popular and famous love song. ",
          ' and is based on a French song called "Plaisir D\'Amour", which was penned in 1784 by a German with an Italian name, Jean-Paul Egide-Martini.. ',
          " and Elvis used to end most of his concerts with this song. ",
          " and a version by the Swedish pop group A-Teens appeared on the soundtrack of the animated feature Lilo and Stitch, which like the original version was also set in Hawaii.. ",
        ],
      },
      {
        song_id: 2,
        song_title: "Jailhouse Rock",
        release_year: "September 24, 1957,",
        song_facts: [
          ' and written by Jerry Leiber and Mike Stoller, who also wrote "Hound Dog" which became a huge hit when Elvis recorded it. ',
          " and featured in the Elvis movie of the same name, where Elvis plays a wrongly accused convict who becomes a star when he gets out. The film, which is considered one of the best of his 31 movies, is famous for the scene where Elvis performs this song in an elaborate dance number taking place in prison.. ",
          " and a massive hit. It was #1 on the US pop charts for seven weeks, and also reached #1 on the country and R&B charts. In the UK, it entered the charts at #1, becoming the first song to do so.. ",
          " and has one of the most memorable intros in rock history: two guitar chords with snare drum hits. The intro last just six seconds, but the pattern repeats throughout the verses, establishing a firm musical hook that remains the envy of songwriters.. ",
        ],
      },
      {
        song_id: 3,
        song_title: "Don't Be Cruel",
        release_year: "July 13, 1956,",
        song_facts: [
          ' and released as a single with "Hound Dog". It is the only single in history to have both sides reach #1 in the US. ',
          ' and written by Otis Blackwell, a songwriter who came up with a lot of hits for Elvis. In addition to this, he also wrote "Return to Sender," "All Shook Up," and "One Broken Heart for Sale" for Elvis. ',
          " and took only about 20 minutes to record. ",
          " and inducted into the Grammy Hall of Fame in 2002. ",
        ],
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
        release_year: "5 June 1965,",
        song_facts: [
          " and just a month after Keith Richards woke up with the guitar riff in his head. . ",
          ' and The guitar riff is similar to Martha & the Vandellas "Dancing in the Street". Richards thought that is where he got the idea, and was worried that it was too similar. ',
          ' and Mick Jagger wrote all the lyrics except the line "Can\'t get no satisfaction". The lyrics deal with what Jagger saw as the two sides of America, the real and phony. He sang about a man looking for authenticity but not being able to find it. ',
          ' and The Stones performed this on their third Ed Sullivan Show appearance, which took place February 13, 1966. The line, "Trying to make some girl" was bleeped out by Sullivan\'s censors, as it was a family show. ',
        ],
      },
      {
        song_id: 2,
        song_title: "Angie",
        release_year: "20 August 1973,",
        song_facts: [
          " and the big rumor about this song is that it was written about David Bowie's wife, Angela, who wrote in her autobiography that she once walked in on Bowie and Mick Jagger in bed together - a story Jagger denies. According to the rumor, Jagger wrote this song to appease her, but it was Jagger's bandmate Keith Richards who wrote most of the song.",
          " and is one of the few Rolling Stones songs that is acoustic. ",
          " and written by Keith Richards in Switzerland after the Exile on Main St. album had been approved by the record company, but before it was released. ",
          " and according to 2010 Keith Richard's autobiography, \"I just went, 'Angie, Angie.' It was not about any particular person; it was a name, like ohhh, Diana. I didn't know Angela (his daughter) was going to be called Angela when I wrote 'Angie.'\". ",
        ],
      },
      {
        song_id: 3,
        song_title: "She's a Rainbow",
        release_year: "November 1967,",
        song_facts: [
          " and endured as a fan favorite. It is a rare pure love song by The Stones, whose songs about women tended to be much more libidinous. ",
          " and the distinctive string section was arranged by John Paul Jones, who was doing session work two years before he joined Led Zeppelin. ",
          " and one of the first songs The Stones produced without manager Andrew Loog Oldham. They wanted to get rid of him, so they angered him away by going against his wishes in many aspects of Their Satanic Majesties Request. ",
          " and the song returned to Billboard's Hot Rock Songs chart in 2018 as a result of its appearance in a commercial for the all-new Acura RDX.. ",
        ],
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
        release_year: "March 31, 1958,",
        song_facts: [
          " and is based on Berry's life. It tells the tale of a boy with humble beginnings with a talent for guitar. Some details were changed: Berry was from St. Louis, not Louisiana, and he knew how to read and write very well. He graduated from beauty school with a degree in hairdressing and cosmetology. ",
          ' and the line "that little country boy could play" was originally "that little colored boy can play." Berry knew he had to change it if he wanted the song played on the radio, and he didn\'t want to alienate his white fans, who could better relate to the tale of a "country" boy. ',
          ' and Berry got the name "Johnny" from Johnnie Johnson, a piano player who collaborated with Berry on many songs, including "Maybellene", "Roll Over Beethoven" and "Sweet Little 16". ',
          ' and the intro came from the Louis Jordan song "Ain\'t That Just Like A Woman". The guitar break came from a 1950 T-Bone Walker song called "Strollin\' With Bones". ',
        ],
      },
      {
        song_id: 2,
        song_title: "Too Much Monkey Business",
        release_year: "September 1956,",
        song_facts: [
          ' and is a song about "the everyday hassles of the average working stiff". ',
          ' and Berry made up a word in this song, singing, "I don\'t want your botheration" This wasn\'t the first time he used his own language: In "Maybellene" he sings about "motorvating". ',
          ' and when Berry won a PEN Award for song lyrics in 2012, Dylan sent him a note saying, "That\'s what too much monkey business will get ya". ',
          ' and the vocal delivery on this song is something Dylan emulated on his track "Subterranean Homesick Blues"',
        ],
      },
      {
        song_id: 3,
        song_title: "Maybellene",
        release_year: "July 1955,",
        song_facts: [
          " and evolved out of \"Ida Red\", a hillbilly song by Bob Wills & The Texas Playboys from the early '50s. Berry heard that song on the Country radio station KMOX in St. Louis, but didn't know who recorded it. ",
          " and tells the story of a girl who keeps cheating on her man. Various cars appear in the lyrics; Berry sings about chasing Maybellene in his V8 Ford while she drag races a man in a Cadillac with her Coupe de Ville. ",
          " and there are a few different stories floating around about how the song got its name. Berry has said that Maybellene was the name of a cow in child's nursery rhyme, but Johnnie Johnson recalled that there was a box of Maybellene mascara in the office, which gave Leonard Chess the idea for the title. ",
          " and Berry was 29 years old when he recorded this song, but he knew that his audience was teenagers, so he wrote the song to appeal to that crowd - the ones fascinated with cars and experiencing young love. Berry also took care to sing it as clearly as possible so it would have more crossover appeal with a white audience. His strategy worked: the song went to #1 on the R&B chart and also made #5 on the Pop chart. ",
        ],
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
        song_title: "Fire",
        release_year: "May 12, 1970,",
        song_facts: [
          ' and The main lyrics in this song ("let me stand next to your fire") came from a time when the band had just finished a gig in the cold around Christmas, 1966.  ',
          " and this lyrical lightning bolt was a breakthrough for Hendrix, who had just started writing songs at the request of his manager Chas Chandler. Writing riffs was easy for him, and it turned out he had a talent for crafting lyrics as well, as he was able to turn a simple line into a fiery tale of lustful passion. ",
          " and this was the song he was (appropriately) playing when he set it on fire for the first time. It happened at a concert in London in March 1967, two months before the Are You Experienced? album was released. ",
          " and The Red Hot Chili Peppers often covered this song in their early years. They decided to play it again at Woodstock '99 in Rome, New York, but this was a very different festival than the one where Jimi Hendrix performed the song in 1969. The '99 crowd was violent and unruly; when RHCP launched into this song, they increased their level of mayhem, tearing the place up and setting fires (yes, Rome was burning). ",
        ],
      },
      {
        song_id: 2,
        song_title: "Voodoo Child (Slight Return)",
        release_year: "October 16, 1968,",
        song_facts: [
          ' and recorded after Hendrix had finished the long, slow blues of "Voodoo Chile", a 15-minute jam that appears earlier on the album. ',
          " and Stevie Ray Vaughan covered this on his Couldn't Stand the Weather album, and numerous guitar virtuosos carry out extended versions at their own concerts. Steve Vai, Joe Satriani, and John Petrucci played a version on their G3 2001 tour. ",
          " and the last song Hendrix performed live. On September 6, 1970, which was 12 days before his death, he played it at a concert in Germany. ",
          " and voted the best guitar riff in rock'n'roll history, by readers of MusicRadar. The website said \"From its wah-wah into the the rhythm parts and the astonishing solo, this is still regarded by many as the high watermark of electric guitar expression\". Guns n'Roses' \"Sweet Child o' Mine\" came second in the poll and Led Zeppelin's \"Whole Lotta Love\" third. ",
        ],
      },
      {
        song_id: 3,
        song_title: "Little Wing",
        release_year: "December 1, 1967,",
        song_facts: [
          ' and inspired by the 1967 Monterey Pop Festival, a concert held during three days of the "Summer of Love" (1967) featuring The Who, The Byrds, Janis Joplin, and many others.  ',
          " and the guitar on the song is played in a very unique style. Jimi frets the roots of chords with his thumb, and then elaborates on them. It often involves shifts of quartile to tertian harmony and vice versa. In theory it is quite similar to the jazz style of chord melody.. ",
          " and is particularly revered among guitar players. Tom Morello wrote in this 2011 tribute to Hendrix in Rolling Stone: \"It's just this gorgeous song that, as a guitar player, you can study your whole life and not get down, never get inside it the way that he does. He seamlessly weaves chords and single-note runs together and uses chord voicings that don't appear in any music books\". ",
          " and is one of the songs that had to be remixed just before the album was released when one of the master tapes went missing. No one ever found out what happened to the original tape but its been speculated that Jimi either accidentally left the tape in a taxi or purposely disposed of the tape because he wasn't satisfied with its sound. ",
        ],
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
        song_title: "Please, Please, Please",
        release_year: "March 1956,",
        song_facts: [
          " and this pleading song was James Brown's first commercial recording; he recorded it at WIBB, a radio station in his hometown of Macon, Georgia. ",
          " and Brown built his reputation on performing this song, which he did for two years on the road before manager Clint Brantley shepherded Brown and his group into the studio. ",
          " and this was the song where James Brown would do his cape bit, where after exhausting himself on stage, a functionary on his revue named Danny Ray would place a cape on his shoulders and start to guide him offstage. ",
          " and when performing this, Brown often does the trick of letting go of the microphone (in the stand), letting it fall but catching it as he goes to his knees.  ",
        ],
      },
      {
        song_id: 2,
        song_title: "Papa's Got a Brand New Bag",
        release_year: "	June 1965,",
        song_facts: [
          ' and In this song, James Brown sings about coming up with a new "bag", meaning a completely different way of approaching music. Inspired by what he heard in church, he punctuated the music on the downbeat, creating his "brand new bag". ',
          " and the original song was about seven minutes long, moved at a slower pace, and featured a more elaborate intro. After the song was cut, Brown sliced off most of the intro, sped the song up to get it played on pop radio, and broke it up into three parts (the second of which can be heard on the flipside of the original single). ",
          " and the vocal version reached #8 in the US. It was the first Top 10 hit for the Godfather of Soul, and marked a departure from his early music toward the definition of his signature sound. Horns are used for percussive effect, and Brown's vocals are tightly attached to the overall instrumental mix. ",
          ' and Brown recorded this song in one take - the released version was merely supposed to be a run-through, but sounded so good it was kept anyway. Brown, who still hadn\'t memorized the song\'s lyrics, read from a sheet in front of him; at the beginning of the original take, he can be heard saying "There\'s a lot of words here, man". He also can be heard exclaiming "This is a hit!" just before the band kicks in. ',
        ],
      },
      {
        song_id: 3,
        song_title: "Cold Sweat",
        release_year: "July 1967,",
        song_facts: [
          " and according to Brown's band leader Pee Wee Ellis, after a show, Brown called him into his dressing room, where he grunted out the bass line for this song, ordering Ellis to write it down. After finding some paper, Ellis notated the grunts, which were later used on the song. ",
          " and this track can make a credible claim to being the first funk song. Pee Wee Ellis co-wrote the track, merging his jazz sensibility with Brown's R&B. Structurally, the song is very unorthodox, disobeying traditional laws of music, like orderly chord changes. This concept of playing what feels right rather than what was musically correct came to define funk and was a hallmark of Brown's music. ",
          ' and Brown based the lyrics and pacing of "Cold Sweat" on his 1962 song "I Don\'t Care", which contains the lines: "I don\'t care about your past, I just want our love to last". That song runs a tidy 2:50 at a slow tempo. Brown sped it up for "Cold Sweat". ',
          " and . ",
        ],
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
        song_title: "Tutti Frutti",
        release_year: "October 1955,",
        song_facts: [
          " and written by Little Richard when he was working as a dishwasher at a Greyhound bus station in his hometown of Macon, Georgia. ",
          ' and Richard says that "Awap bop a lup bop a wop bam boom" was kind of his catch phrase, something he would reply to folks who asked him how he was doing. ',
          ' and Long before Richard recorded this, he performed it at his shows as "Tutti Frutti, Good Booty". It was a very raucous and sexual song and was considered too suggestive for white audiences, so it was cleaned up considerably when he recorded it for Specialty Records.  ',
          ' and this song introduced Little Richard\'s famous "Whooooo", and also a big "Aaaaaaahhh" scream which he sings just before the tenor sax solo performed by Lee Allen. Richard\'s scream had a practical purpose: to let Allen know when to start playing. They were recording on just three tracks, so overdubbing the horns wasn\'t a practical option. ',
        ],
      },
      {
        song_id: 2,
        song_title: "Long Tall Sally",
        release_year: "March 1956,",
        song_facts: [
          ' and Richard wrote this while working as a dishwasher at a Greyhound bus station in Macon, Georgia. He also wrote "Tutti Frutti" and "Good Golly Miss Molly" while working there. ',
          " and This was Little Richard's biggest hit. He was not huge on the charts, but was a rock 'n' roll innovator and famous for his stirring performances. ",
          ' and often performed by The Beatles, who were greatly influenced by Little Richard. Paul McCartney learned to "Woooo" in songs like "I Saw Her Standing There" from watching Little Richard. In their early days, The Beatles usually ended concerts with it. ',
          ' and There really was a "Long Tall Sally", but she was not a cross-dresser as sometimes reported. Little Richard explained that Sally was a friend of the family who was always drinking whiskey - she would claim to have a cold and would drink hot toddies all day. He described her as tall and ugly, with just two teeth and cockeyed.  ',
        ],
      },
      {
        song_id: 3,
        song_title: "Slippin' and Slidin' (Peepin' and Hidin')",
        release_year: "March 1956,",
        song_facts: [
          ' and was recorded by a New Orleans musician named Eddie Bo (or at least a similar one) earlier in 1956 under the title "I\'m Wise". ',
          " and Little Richard explained in a 1970 interview with Rolling Stone: \"A fellow in my band, Lee Diamond, gave me some of the words and I changed them around. Another cat put 'Slippin' and Slidin'' out before I did, Eddie Bo, and it was a hit by him in New Orleans, and they put mine out the following week, and it killed him, because he didn't have the rhythm, you see, he didn't have that thing I have\". ",
          ' and released as the B-side of Little Richard\'s second single, "Long Tall Sally". ',
          " and the song is about a guy who decides he's through with a woman who's no good for him. ",
        ],
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
        song_title: "Respect",
        release_year: "1965,",
        song_facts: [
          ' and It was Aretha\'s idea to cover this song. She came up with the arrangement, added the "sock it to me" lines, and played piano on the track. Her sister Carolyn, who sang backup on the album, also helped work up the song. ',
          " and Aretha recorded this in New York City with the Muscle Shoals Rhythm Section, a group of four studio musicians who also played sessions in Nashville and Muscle Shoals, Alabama before starting their own Muscle Shoals Sound Studios.  ",
          " and Franklin's cover is by far the best-known version, but this was an important song for Otis Redding. It was just his second Top 40 hit, following \"I've Been Loving You Too Long (To Stop Now)\", and it helped establish Redding on mainstream radio. ",
          " and written by Otis Redding (who originally recorded it in 1965, with his version hitting #35 in the US). ",
        ],
      },
      {
        song_id: 2,
        song_title: "(You Make Me Feel Like) A Natural Woman",
        release_year: "September 1967,",
        song_facts: [
          " and written by Gerry Goffin and Carole King. They were a married couple who helped shape the Brill Building sound, named for the famous building in New York City where many hits from the '60 were written and recorded. ",
          " and the recording features the vocal talents of three Franklin sisters - Erma and Carolyn are singing in the background. Erma had a record deal in the '60s, but didn't have much success. Her biggest hit was the 1967 song \"Piece Of My Heart\". ",
          " and when Aretha Franklin performed this song in tribute to Carole King at the 2015 Kennedy Center Honors, she brought the house down, wowing King and the many luminaries present, including Barack and Michelle Obama. The crowd rose to its feet when Franklin shed her fur coat to belt out the end of the song. ",
          ' and was used on the TV shows Murphy Brown (in the 1988 episode "Respect" ) and Northern Exposure (in the 1991 episode "Animals R Us"). It was also featured in the movies The Big Chill (1983) and Street Smart (1987). ',
        ],
      },
      {
        song_id: 3,
        song_title: "Think",
        release_year: "May 2, 1968,",
        song_facts: [
          " and Franklin wrote this with Teddy White, who was her husband and manager. In the song, Aretha sings about freedom and respect for women. ",
          ' and less than a month after the assassination of Martin Luther King, Jr. on April 4. Franklin\'s family was close to King, and Aretha attended his funeral. The song\'s insistent refrain of "freedom" evoked one of King\'s famous quotes: "Free at last, free at last, thank God almighty we are free at last". ',
          " and is one of Franklin's most enduring songs, and one she often performed live. It was the sixth of her 20 #1 singles on the R&B chart. ",
          " and Franklin performed this in the 1980 movie The Blues Brothers, starring Dan Aykroyd and John Belushi. Her career was experiencing a lull at that point, so she was happy to get back into the public eye with the film. ",
        ],
      },
    ],
  },
  10: {
    artist_name: "Ray Charles",
    artist_facts: [
      ", an American singer, songwriter, pianist, and composer, ",
      ', often referred to as "the Genius", ',
      ", who was blinded during childhood due to glaucoma, ",
    ],
    artist_songs: [
      {
        song_id: 1,
        song_title: "I Got a Woman",
        release_year: "1954,",
        song_facts: [
          ' and is a re-worked, secular version of a gospel song called "My Jesus Is All the World to Me", which was the first hit song to use secular lyrics in a gospel style. Some people consider this fusion of R&B, gospel and jazz the first-ever soul record. ',
          " and Ray Charles wrote this with his bandleader Renald Richard after hearing a spiritual on the radio while his band was on the road. ",
          " and in this song, Charles sings about a very supportive woman who helps him out in many ways.  ",
          ' and the mix of gospel in blues on this track was shocking in some circles, but also made the song accessible to a wider audience. The decision to mix styles happened organically. "I was just being myself," Charles said. "Of course it created a lot of static from a lot of people. But then, on the other hand, it was a hit. It was a hit in the black community and the white community." ',
        ],
      },
      {
        song_id: 2,
        song_title: "Georgia on My Mind",
        release_year: "1930,",
        song_facts: [
          ' and written by Hoagy Carmichael and Stuart Gorrell in 1930. Carmichael was an actor, performer, and popular songwriter - some of his other compositions include "Stardust" and "Winter Moon." Gorrell was a banker living in New York City, and he wrote the lyrics. ',
          " and Charles decided to record this song after his driver suggested it, since Ray kept singing it while riding in the car. ",
          " and this was a #10 hit for a jazz saxophone player named Frankie Trumbauer in 1931. Many artists have recorded it over the years, including Louis Armstrong, James Brown (a Georgia native), Django Reinhardt, and Willie Nelson. Charles' version is by far the most famous. ",
          " and It's possible that this was written about a woman, not the state. Carmichael and Gorrell didn't live in Georgia, but Carmichael did have a sister named Georgia. ",
        ],
      },
      {
        song_id: 3,
        song_title: "Hit the Road Jack",
        release_year: "August 1961,",
        song_facts: [
          " and written by Ray's good friend Percy Mayfield, an R&B singer who was badly disfigured in a car accident soon after he started performing. Mayfield cut back his touring and made his mark as a prolific songwriter, with many of his compositions performed by Charles. ",
          " and the second (and shortest, at an even two minutes) of Charles' three #1 hits. ",
          " and the continuing popularity of this song is evident by the many professional and semi-professional hockey teams playing the first few lines whenever a player is sent to the penalty box. ",
          " and the winner of the 1961 Grammy for Best Male Rhythm and Blues Recording. ",
        ],
      },
    ],
  },
};

module.exports = { data };
