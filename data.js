const players = [
  {
    slug: 'alan-munde-01',
    code: 'ALANMUNDE',
    number: '01',
    name: 'Alan Munde',
    imageUrl: '/portraits/_0026_ALAN MUNDE.jpg',
    bio: `Born in Norman, Oklahoma, Alan Munde learned banjo from a well-regarded Oklahoman banjo player, Ed Shelton. Alan is now one of the most highly respected and most-loved banjo players in the world. A master of both melodic and traditional Scruggs styles, Alan has played and taught music professionally for over 40 years.`,
    limited: true,
    artist: {
      slug: 'georgina-flood',
      name: 'Georgina Flood',
    },
  },
  {
    slug: 'alison-brown-02',
    code: 'ALISON',
    number: '02',
    name: 'Alison Brown',
    imageUrl: '/portraits/_0001_ALISON BROWN.jpg',
    bio: `Alison is known for taking
    the banjo far beyond its roots, blending bluegrass and jazz into a unique tapestry that has earned her numerous awards including a Grammy, IBMA Banjo Player of the Year and induction into the American Banjo Hall of Fame. She is
    also co-founder of Compass Records, a leading independent label in roots music.`,
    artist: {
      slug: 'kara-lockmiller',
      name: 'Kara Lockmiller',
    },
  },
  {
    slug: 'ashley-campbell-03',
    code: 'ASHLEY',
    number: '03',
    name: 'Ashley Campbell',
    imageUrl: '/portraits/_0033_ASHLEY CAMPBELL.jpg',
    bio: `Ashley Campbell is a banjo player who has toured the world with her father, Glen Campbell as a member of his band, playing banjo, guitar and keyboards. Ashley released her first solo album The Lonely One in 2018 and her sophomore album Something Lovely in 2020 featuring a banjo duet with Carl Jackson.`,
    artist: {
      slug: 'alexandra-andreica',
      name: 'Alexandra Andreica',
    },
  },
  {
    slug: 'ben-clark-04',
    code: 'BANJOBEN',
    number: '04',
    name: 'Ben Clark',
    imageUrl: '/portraits/_0035_BEN CLARK.jpg',
    bio: `Known professionally as “Banjo Ben,” Ben Clark is a world-renowned performer, writer, and educator. He has toured the world with major artists, and teaches bluegrass to students in over 50 countries through his website & Cabin Camp events.`,
    artist: {
      slug: 'anna-magruder',
      name: 'Anna Magruder',
    },
  },
  {
    slug: 'bill-emerson-05',
    code: 'BILLEMERSON',
    number: '05',
    name: 'Bill Emerson',
    imageUrl: '/portraits/_0014_BILL EMERSON.jpg',
    bio: `Progressive Bluegrass Pioneer. Composer. Arranger. Band Leader. Harmony Singer. Banjo Legend. Sunny Mountain Boy. Founder of the Country Gentlemen, Emerson & Waldron, the US Navy’s Country Current, and Sweet Dixie. 2019 IBMA Hall of Fame inductee.`,
    limited: true,
    artist: {
      slug: 'bryan-peterson',
      name: 'Bryan Peterson',
    },
  },
  {
    slug: 'bill-keith-06',
    code: 'BILLKEITH',
    number: '06',
    name: 'Bill Keith',
    imageUrl: '/portraits/_0018_BILL KEITH.jpg',
    bio: `World-renowned banjo virtuoso, Bill Keith, is widely recognized for transforming the banjo from
    a largely percussive instrument into one with unforeseen melodic potential. In 1963, he joined Bill Monroe as a Blue Grass Boy. In 2015, Bill was inducted into the IBMA Hall of Fame .`,
    limited: true,
    artist: {
      slug: 'robert-felker',
      name: 'Robert Felker',
    },
  },
  {
    slug: 'butch-robins-07',
    code: 'BUTCH',
    number: '07',
    name: 'Butch Robins',
    imageUrl: '/portraits/_0003_BUTCH ROBINS.jpg',
    bio: `An “introverted master of an extroverted instrument,”
    Butch has established himself throughout his 50+ year career among the best of the best. He’s performed in a wide variety of musical settings, most notably with the father of bluegrass music, Bill Monroe. His solo recordings continue to inspire new generations
    of banjo players around the world.`,
    limited: true,
    artist: {
      slug: 'bryan-peterson',
      name: 'Bryan Peterson',
    },
  },
  {
    slug: 'carl-jackson-08',
    code: 'CARLJACKSON',
    number: '08',
    name: 'Carl Jackson',
    imageUrl: '/portraits/_0013_CARL JACKSON.jpg',
    bio: `Multi-Grammy winner, Carl Jackson, joined bluegrass icons, Jim & Jesse, at age fourteen. From ‘72-‘84, Glen Campbell introduced him nightly as “the greatest banjo player in the world”. A 50+ year career has seen the Mississippi Musicians HOF member play, sing, produce, or compose for literally a “Who’s Who” of bluegrass and country music greats.`,
    artist: {
      slug: 'georgina-flood',
      name: 'Georgina Flood',
    },
  },
  {
    slug: 'catherine-bb-bowness-09',
    code: 'BB',
    number: '09',
    name: 'Catherine “BB” Bowness',
    imageUrl: '/portraits/09 - BB Bowness-2.jpg',
    bio: `Coming from New Zealand, Catherine “BB” Bowness, headed to America in 2012 and co-founded her current group, Mile Twelve. Immersing herself in the traditions of bluegrass and having studied jazz at university, BB’s banjo playing
    is an exciting synthesis of new and old ideas. BB was a winner of the Steve Martin Banjo Prize in 2020.`,
    artist: {
      slug: 'grace-vant-hof',
      name: `Grace Van't Hof`,
    },
  },
  {
    slug: 'charlie-poole-10',
    code: 'CHARLIEPOOLE',
    number: '10',
    name: 'Charlie Poole',
    imageUrl: '/portraits/10 - Charlie Poole-2.jpg',
    bio: `Banjo-picker and band-leader, Charlie Poole (1892-1931), started the old-time group North Carolina Ramblers and was known for
    his three-finger style banjo playing. In 1925, the Ramblers were signed to Columbia records and their popularity boomed. It was a sound that would not be duplicated until Bill Monroe and the Bluegrass Boys brought it back nearly a generation later.
    `,
    artist: {
      slug: 'grace-vant-hof',
      name: `Grace Van't Hof`,
    },
  },
  {
    slug: 'cory-walker-11',
    code: 'CORYWALKER',
    number: '11',
    name: 'Cory Walker',
    imageUrl: '/portraits/_0025_CORY WALKER.jpg',
    bio: `Cory Walker has shared the stage/studio/TV with countless greats in music, including Sierra Hull, Ricky Skaggs, Mountain Heart, Tim O’Brien, Dailey and Vincent, Keith Urban, Peter Rowan, the Steel Drivers, Jim Lauderdale, David Grier, The Dillards and East Nash Grass among others.`,
    artist: {
      slug: 'kara-lockmiller',
      name: 'Kara Lockmiller',
    },
  },
  {
    slug: 'don-reno-12',
    code: 'DONRENO',
    number: '12',
    name: 'Don Reno',
    imageUrl: '/portraits/_0024_DON RENO.jpg',
    bio: `Don Reno, best known for his flashy single string technique popularly known as Reno style, composed over 500 songs. He and Red Smiley went on to form one of the most acclaimed duos in country and bluegrass music, Reno and Smiley.`,
    limited: true,
    artist: {
      slug: 'kara-lockmiller',
      name: 'Kara Lockmiller',
    },
  },
  {
    slug: 'don-wayne-reno-13',
    code: 'DONWAYNERENO',
    number: '13',
    name: 'Don Wayne Reno',
    imageUrl: '/portraits/13 - Don Wayne Reno-2.jpg',
    bio: `Don Wayne Reno has had a long career as a banjo player in his own right, in addition to being a fine exemplar and teacher
    of the distinctive style pioneered by his father. Reno was for several years a mainstay of the band Hayseed Dixie.`,
    artist: {
      slug: 'karl-morgan',
      name: 'Karl Morgan',
    },
  },
  {
    slug: 'doug-dillard-14',
    code: 'DOUGDILLARD',
    number: '14',
    name: 'Doug Dillard',
    imageUrl: '/portraits/_0032_DOUG DILLARD.jpg',
    bio: `Influential and pioneering banjo player, Doug Dillard, formed The Dillards with his brother Rodney. They went on to play the musical backwoods family, The Darlings, on the Andy Griffith Show, and were credited with bringing bluegrass music to a wider audience.`,
    limited: true,
    artist: {
      slug: 'arthur-hatton',
      name: 'Arthur Hatton',
    },
  },
  {
    slug: 'earl-scruggs-15',
    code: 'EARLSCRUGGS',
    number: '15',
    name: 'Earl Scruggs',
    imageUrl: '/portraits/_0023_EARL SCRUGGS.jpg',
    bio: `“Earl Scruggs is credited with
    the Three-Finger style of banjo most often used within Bluegrass. He and fellow member of Bill Monroe’s Bluegrass Boys, Lester Flatt, would soon leave Monroe
    to form The Foggy Mountain Boys where they would find commercial success in recording, radio and television, notably for performing the soundtrack to TV’s The Beverly Hillbillies.”
    - Ned Luberecki`,
    limited: true,
    artist: {
      slug: 'georgina-flood',
      name: 'Georgina Flood',
    },
  },
  {
    slug: 'eddie-adcock-16',
    code: 'EDDIE',
    number: '16',
    name: 'Eddie Adcock',
    imageUrl: '/portraits/_0034_EDDIE ADCOCK.jpg',
    bio: `Sparkplug of the Classic Country Gentlemen from 1959 to 1970, Eddie Adcock and his iconic, innovative banjo style introduced a free- wheeling, syncopated mix
    of jazz, blues, and rock’n’roll into Bluegrass, creating “newgrass”, an impactful second generation of the genre.`,
    limited: true,
    artist: {
      slug: 'georgina-flood',
      name: 'Georgina Flood',
    },
  },
  {
    slug: 'gina-furtado-17',
    code: 'GINAFURTADO',
    number: '17',
    name: 'Gina Furtado',
    imageUrl: '/portraits/_0006_GINA FURTADO.jpg',
    bio: `Twice nominated for the IBMA’s Banjo Player of the Year, Gina Furtado began touring up and down the east coast in her tween years, earning countless ribbons from fiddlers conventions, a strong reputation in the regional bluegrass scene, and a stamp from Bluegrass Today as “absurdly talented”.
    `,
    artist: {
      slug: 'arthur-hatton',
      name: 'Arthur Hatton',
    },
  },
  {
    slug: 'greg-cahill-18',
    code: 'GREGCAHILL',
    number: '18',
    name: 'Greg Cahill',
    imageUrl: '/portraits/18 - Greg Cahill-2.jpg',
    bio: `Greg co-founded The Special Consensus in 1975 and the band has continued to record and tour nationally and internationally ever since. Special C has released 20 recordings that have garnered six IBMA awards and two Grammy nominations and Greg has also received the IBMA Distinguished Achievement Award and has been inducted into the SPBGMA Hall of Greats.`,
    artist: {
      slug: 'anna-magruder',
      name: 'Anna Magruder',
    },
  },
  {
    slug: 'jd-crowe-19',
    code: 'JDCROWE',
    number: '19',
    name: 'J.D. Crowe',
    imageUrl: '/portraits/_0009_JD CROWE.jpg',
    bio: `“J.D. (James Dee) Crowe is one of the most influential banjo players since Earl Scruggs and is widely known for his timing, tone and drive. His band J.D. Crowe and The New South served as launching pad for
    the careers of Tony Rice, Ricky Skaggs, Jerry Douglas and Keith Whitley among many others.”
    - Ned Luberecki`,
    limited: true,
    artist: {
      slug: 'bryan-peterson',
      name: 'Bryan Peterson',
    },
  },
  {
    slug: 'jason-davis-20',
    code: 'JASONDAVIS',
    number: '20',
    name: 'Jason Davis',
    imageUrl: '/portraits/_0000_JASON DAVIS.jpg',
    bio: `Jason has been playing
    on the bluegrass circuit since he was 14 years old. He’s played with Michelle Nixon and Drive, Kenny and Amanda smith band, Blueridge, Grasstowne and Junior Sisk and ramblers choice. During that time
    he put out 2 solo records. He now plays in the Dan Tyminski Band.`,
    artist: {
      slug: 'alexandra-andreica',
      name: 'Alexandra Andreica',
    },
  },
  {
    slug: 'jens-koch-21',
    code: 'JENSKOCH',
    number: '21',
    name: 'Jens Koch',
    imageUrl: '/portraits/_0030_JENS KOCH.jpg',
    bio: `Jens Koch, award-winning banjo player from Sweden, relentlessly pursues tone, style and precision, with the authenticity of a native of the Southeastern United States. You can find him playing professionally around Europe and the US as well as in the studio, or as a sought after teacher out of his home in Stockholm.`,
    artist: {
      slug: 'kara-lockmiller',
      name: 'Kara Lockmiller',
    },
  },
  {
    slug: 'jeremy-stephens-22',
    code: 'JEREMYSTEPHENS',
    number: '22',
    name: 'Jeremy Stephens',
    imageUrl: '/portraits/_0002_JEREMY STEPHENS.jpg',
    bio: `Most known for his love and interpretation of the music of Don Reno, Jeremy Stephens recorded his first solo album at age 16. He
    is a founding member of the bluegrass renaissance group High Fidelity and has performed regularly at the Grand Ole Opry with Jesse McReynolds since 2016.`,
    artist: {
      slug: 'anna-magruder',
      name: 'Anna Magruder',
    },
  },
  {
    slug: 'jim-pankey-23',
    code: 'JIMPANKEY',
    number: '23',
    name: 'Jim Pankey',
    imageUrl: '/portraits/_0019_JIM PANKEY.jpg',
    bio: `“Bob Ross of the banjo” as many of his YouTube subscribers affectionately call him, Jim has been teaching banjo for 40 years. Though he presents an easy-going and no-nonsense approach to learning, Jim is also a very serious picker with a mean right hand.`,
    artist: {
      slug: 'bryan-peterson',
      name: 'Bryan Peterson',
    },
  },
  {
    slug: 'john-apfelthaler-24',
    code: 'JOHNAPFELTHALER',
    number: '24',
    name: 'John Apfelthaler',
    imageUrl: '/portraits/24 - John Apfelthaler-2.jpg',
    bio: `John Apfelthaler started learning banjo in Florida at age 13 from Garland Shuping. Heroes like Alan Munde, Little
    Roy Lewis, Raymond Fairchild and others have influenced his style. John has played professionally for over 40 years.`,
    artist: {
      slug: 'karl-morgan',
      name: 'Karl Morgan',
    },
  },
  {
    slug: 'john-dowling-25',
    code: 'JOHNDOWLING',
    number: '25',
    name: 'John Dowling',
    imageUrl: '/portraits/25 - John Dowling-2.jpg',
    bio: `John first became known as
    a prominent Banjo player in the UK when he won the BBC Radio 2 Young Folk awards in London at the age of 18. But he became known internationally as a Banjoist when he became the first person from the UK
    to win the USA National Blue- grass Banjo Championships held in Winfield, Kansas.`,
    artist: {
      slug: 'garrett-briggeman',
      name: 'Garrett Briggeman',
    },
  },
  {
    slug: 'kenny-brown-26',
    code: 'KENNYBROWN',
    number: '26',
    name: 'Kenny Brown',
    imageUrl: '/portraits/26 - Kenny Brown-2.jpg',
    bio: `Kenny, also known to me as Ken, my dad, was a talented and highly sought after melodic flavored, Scruggs-style banjo player throughout the late 60s, 70s, and 80s. Born in Philadelphia, he started playing banjo at age 12, inspired by his older brother who played clawhammer style. By age 19 he was traveling all around the Northeast winning awards, most notably 1st place in the 1965 Philly Folk Fest and 1st runner up at Union Grove 1966. Later, he could also be found performing with his band, Arkansas Travellers at the Hillbilly Ranch in late 1960s Boston. In the late 70s through the early 80s he played in all around Arizona with Lyman Keeling and all around Southern California with Train 45. Major influences include Carl Jackson, Bill Keith and Don Stover.`,
    artist: {
      slug: 'anna-magruder',
      name: 'Anna Magruder',
    },
  },
  {
    slug: 'kristin-scott-benson-27',
    code: 'KRISTIN',
    number: '27',
    name: 'Kristin Scott Benson',
    imageUrl: '/portraits/_0007_KRISTIN SCOTT BENSON.jpg',
    bio: `Kristin Scott Benson is
    a five-time IBMA Banjo Player of the Year. She was awarded the Steve Martin Award for Excellence in Bluegrass and Banjo in 2018. She has been a member of the Grammy-nominated band, The Grascals, since 2008.`,
    artist: {
      slug: 'kara-lockmiller',
      name: 'Kara Lockmiller',
    },
  },
  {
    slug: 'mike-scott-28',
    code: 'MIKESCOTT',
    number: '28',
    name: 'Mike Scott',
    imageUrl: '/portraits/_0008_MIKE SCOTT.jpg',
    bio: `Mike Scott began playing professionally at age 10 which includes over 450 performances at the Grand Ole Opry and nearly four years performing with Jim & Jesse. He continues to tour nationally & internationally and has earned a fine reputation as a singer, songwriter, session musician, producer, instructor, & TV host.`,
    artist: {
      slug: 'arthur-hatton',
      name: 'Arthur Hatton',
    },
  },
  {
    slug: 'mike-sumner-29',
    code: 'MIKESUMNER',
    number: '29',
    name: 'Mike Sumner',
    imageUrl: '/portraits/_0022_MIKE SUMNER.jpg',
    bio: `Mike learned how to play banjo at age 6 inspired
    by his dad, Joe, who learned to play late in life. Influenced by Scott Vestal, Alison Brown and many others, Mike has become a highly sought after musician, recording artist and teacher.`,
    artist: {
      slug: 'georgina-flood',
      name: 'Georgina Flood',
    },
  },
  {
    slug: 'ned-luberecki-30',
    code: 'NEDSKI',
    number: '30',
    name: 'Ned Luberecki',
    imageUrl: '/portraits/_0028_NED LUBERECKI.jpg',
    bio: `Winner of the 2018 IBMA Banjo Player of the Year award, Ned is the banjo player for The Becky Buller Band. Ned is also an on-air personality on Sirius XM Satellite Radio’s Bluegrass Junction and also can be found teaching banjo in his many online courses.`,
    artist: {
      slug: 'arthur-hatton',
      name: 'Arthur Hatton',
    },
  },
  {
    slug: 'nick-einterz-31',
    code: 'NICKEINTERZ',
    number: '31',
    name: 'Nick Einterz',
    bio: `Nick brings a progressive approach to bluegrass banjo. His attention to fretboard theory helps him achieve a unique fluency on the 5-string. In his EP, Myth & Morel, he blends blue- grass banjo techniques with unexpected genres while performing more traditional Americana in his band High Lonesome.`,
    imageUrl: '/portraits/_0017_NICK EINTERZ.jpg',
    artist: {
      slug: 'arthur-hatton',
      name: 'Arthur Hatton',
    },
  },
  {
    slug: 'nick-hornbuckle-32',
    code: 'NICKHORNBUCKLE',
    number: '32',
    name: 'Nick Hornbuckle',
    imageUrl: '/portraits/_0016_NICK HORNBUCKLE.jpg',
    bio: `Based on BC’s Vancouver Island, Nick’s unique two- finger picking seamlessly bridges the gap between clawhammer and Scruggs- style, and according to Nashville Public Radio, “incorporate(s) the best elements of bluegrass and old time into a killer new sound”.`,
    artist: {
      slug: 'anna-magruder',
      name: 'Anna Magruder',
    },
  },
  {
    slug: 'ralph-stanley-33',
    code: 'RALPHSTANLEY',
    number: '33',
    name: 'Ralph Stanley',
    imageUrl: '/portraits/_0020_RALPH STANLEY.jpg',
    bio: `Internationally known and grammy award winner, Ralph Stanley, influenced countless others with his distinctive singing and banjo playing. In 1976 he was awarded an honorary Doctorate of Music from Lincoln Memorial University, spawning the popular title “Dr. Ralph Stanley.”`,
    limited: true,
    artist: {
      slug: 'bryan-peterson',
      name: 'Bryan Peterson',
    },
  },
  {
    slug: 'robby-boone-34',
    code: 'ROBBYBOONE',
    number: '34',
    name: 'Robby Boone',
    imageUrl: '/portraits/_0029_ROBBY BOONE.jpg',
    bio: `From his start in the 1970s, Robby Boone was clearly no ordinary player. His Crowe-style banjo com- bined with his own signature tone is esteemed nationwide. According
    to one perceptive fan, “It sounds like he’s driving every note with a sledgehammer!`,
    artist: {
      slug: 'garrett-briggeman',
      name: 'Garrett Briggeman',
    },
  },
  {
    slug: 'ron-block-35',
    code: 'RONBLOCK',
    number: '35',
    name: 'Ron Block',
    imageUrl: '/portraits/_0012_RON BLOCK.jpg',
    bio: `Banjoist/guitarist with Grammy-winning group Alison Krauss & Union Station since 1991, Ron has recorded with Dolly Parton, Vince Gill, Bill Frisell, and on the O Brother, Where Art Thou? soundtrack. He’s released 7 solo and 3 duo albums.`,
    artist: {
      slug: 'anna-magruder',
      name: 'Anna Magruder',
    },
  },
  {
    slug: 'sammy-shelor-36',
    code: 'SAMMYSHELOR',
    number: '36',
    name: 'Sammy Shelor',
    imageUrl: '/portraits/037_SAMMY_SHELOR.jpg',
    bio: `Highly influential, Sammy Shelor is a 5-time IBMA Banjo Player of the Year, 2011 recipient of the Steve Martin Prize for Excellence in Banjo & Bluegrass, and leader
    of Lonesome River Band. He got his start learning banjo from his grandfather who was taught by Charlie Poole. He also has his own signature Sammy Shelor banjo fingerpicks, and a signature model banjo produced by Huber Banjos.`,
    artist: {
      slug: 'arthur-hatton',
      name: 'Arthur Hatton',
    },
  },
  {
    slug: 'scott-vestal-37',
    code: 'SCOTTVESTAL',
    number: '37',
    name: 'Scott Vestal',
    imageUrl: '/portraits/_0021_SCOTT VESTAL.jpg',
    bio: `Over his 46 year career, Scott has worked with Larry Sparks, Doyle Lawson, Ricky Skaggs, Sam Bush, and has played on records with Dolly Parton, David Lee Roth, Dierks Bentley, Kenny Chesney, Billy Ray Cyrus, and many others. He was also awarded the Steve Martin Excellence in Banjo and Bluegrass prize in 2017, and IBMA banjo player of the year for 2020 and 2021.`,
    artist: {
      slug: 'kara-lockmiller',
      name: 'Kara Lockmiller',
    },
  },
  {
    slug: 'snuffy-jenkins-38',
    code: 'SNUFFY',
    number: '38',
    name: 'Snuffy Jenkins',
    imageUrl: '/portraits/38 - Snuffy Jenkins-3.jpg',
    bio: `DeWitt “Snuffy” Jenkins, a pivotal figure in the development of three- finger bluegrass-style banjo. He is credited with directly influencing Earl Scruggs and Don Reno, who later brought this style of banjo playing to Bill Monroe.`,
    artist: {
      slug: 'karl-morgan',
      name: 'Karl Morgan',
    },
  },
  {
    slug: 'sonny-osborne-39',
    code: 'SONNY',
    number: '39',
    name: 'Sonny Osborne',
    imageUrl: '/portraits/_0031_SONNY OSBORNE.jpg',
    bio: `“Innovator and Grand
    Ole Opry member, Sonny Osborne, with his brother Bobby formed the legend- ary Osborne Brothers, best known for their hit, “Rocky Top.” He adapted many new techniques to the 5-string, citing influences from pedal steel, piano, horns, and electric guitar.”
    -- Lincoln Hensley`,
    limited: true,
    artist: {
      slug: 'georgina-flood',
      name: 'Georgina Flood',
    },
  },
  {
    slug: 'terry-baucom-40',
    code: 'TERRYBAUCOM',
    number: '40',
    name: 'Terry Baucom',
    imageUrl: '/portraits/_0011_TERRY BAUCOM.jpg',
    bio: `Multiple IBMA award winner, Terry Baucom
    has enjoyed a career in music that started in 1970 with Charlie Moore and continued over the years as a founding member of ground breaking bands Boone Creek, Quicksilver, IIIrd Tyme Out and more.`,
    artist: {
      slug: 'georgina-flood',
      name: 'Georgina Flood',
    },
  },
  {
    slug: 'tony-trischka-41',
    code: 'TONYTRISCHKA',
    number: '41',
    name: 'Tony Trischka',
    imageUrl: '/portraits/_0010_TONY TRISCHKA.jpg',
    bio: `One of the most influential banjo players in the world, Tony Trischka has achieved legendary status in his 50+ years as a consummate artist. He’s inspired generations of acoustic musicians with his technical and conceptual advances, and opened the way for such players as Béla Fleck, Alison Brown, and Noam Pikelny.`,
    limited: true,
    artist: {
      slug: 'anna-magruder',
      name: 'Anna Magruder',
    },
  },

  {
    slug: 'wes-corbett-42',
    code: 'WESCORBETT',
    number: '42',
    name: 'Wes Corbett',
    imageUrl: '/portraits/_0027_WES CORBETT.jpg',
    bio: `With a staggeringly broad musical base, Wes Corbett held the banjo professorship at the prestigious Berklee College of Music, and is now a rising star
    in Nashville’s elite bluegrass scene as the newest member of the Sam Bush Band.`,
    artist: {
      slug: 'kara-lockmiller',
      name: 'Kara Lockmiller',
    },
  },
]

const data = {
  players,
  artists: [
    {
      slug: 'alexandra-andreica',
      name: 'Alexandra Andreica',
      location: 'London England',
      imageUrl: '/artists/alexandraandreica.jpg',
      link: 'https://www.instagram.com/arthurhattonart/',
      bio: `Alexandra was born in 1986, in Zalau, Romania. As a child, she used to watch her mother paint, but she only discovers her talent in her early twenties.
      She studied Fine Arts at “University of Oradea” where she graduates top of her class. She loves figurative painting, especially painting portraits, but also approaches abstract art and different themes and subjects.
      She had exhibitions in Romania in cities like Oradea, Cluj Napoca, Bucharest, and in the UK in Cardiff and London. She lives and works in London since 2015.`,

      works: players.filter((p) =>
        ['ashley-campbell-03', 'jason-davis-20'].includes(p.slug)
      ),
    },
    {
      slug: 'anna-magruder',
      name: 'Anna Magruder',
      location: 'Portland Oregon',
      imageUrl: '/artists/annamagruder.jpeg',
      link: '#',
      bio: 'Oregon artist Anna Magruder specializes in portraits, whimsy, and historical surrealism. She enjoys re-imagining the lives & stories of characters on canvas and exploring the emotional color of faces. Her attraction to faces, people and the stories behind them is a consistent theme in her art.',

      works: players.filter((p) =>
        [
          'ben-clark-04',
          'greg-cahill-18',
          'jeremy-stephens-22',
          'kenny-brown-26',
          'nick-hornbuckle-32',
          'ron-block-35',
          'tony-trischka-41',
        ].includes(p.slug)
      ),
    },
    {
      slug: 'arthur-hatton',
      name: 'Arthur Hatton',
      location: 'East Tennessee',
      imageUrl: '/artists/arthurhatton.jpeg',
      link: 'https://www.instagram.com/andreicaart/',
      bio: 'Arthur Hatton is a visual artist specializing in watercolor and egg tempera. His artwork focuses on portraits and figures, using an abstracted realist style. Arthur is also a clinical psychologist.',

      works: players.filter((p) =>
        [
          'doug-dillard-14',
          'gina-furtado-17',
          'mike-scott-28',
          'ned-luberecki-30',
          'nick-einterz-31',
          'sammy-shelor-36',
        ].includes(p.slug)
      ),
    },
    {
      slug: 'bryan-peterson',
      name: 'Bryan Peterson',
      location: 'Dallas Texas',
      imageUrl: '/artists/bryanpeterson.jpg',
      link: 'https://www.instagram.com/bryanpetersonart/',
      bio: 'Bryan is the founder and one of two chief designers for Peterson Ray & Company, a Dallas, TX graphic design powerhouse founded in 1985. Recently, he was named as the official portrait artist for the Texas Songwriters’ Hall of Fame and is currently working on portraits for inductees Nanci Griffith and Lightnin’ Hopkins, among others.',

      works: players.filter((p) =>
        [
          'bill-emerson-05',
          'butch-robins-07',
          'jd-crowe-19',
          'jim-pankey-23',
          'ralph-stanley-33',
        ].includes(p.slug)
      ),
    },
    {
      slug: 'garrett-briggeman',
      name: 'Garrett Briggeman',
      location: 'Wichita Kansas',
      imageUrl: '/artists/Garrett Briggeman.jpg',
      link: 'https://www.facebook.com/garrett.briggeman',
      bio: 'From Wichita, Kansas, Garrett Briggeman is also a banjo player and will be on tour with his band, Pretend Friend all throughout the Midwest.',

      works: players.filter((p) =>
        ['john-dowling-25', 'robby-boone-34'].includes(p.slug)
      ),
    },
    {
      slug: 'georgina-flood',
      name: 'Georgina Flood',
      location: 'Dublin Ireland',
      imageUrl: '/artists/georginaflood.jpg',
      bio: 'A self taught, acrylic and graphite portrait artist from Dublin, Ireland. Once criticized for being "too stylized and graphic," Georgina has developed a style that is uniquely her own, with the portrait\'s hair becoming her signature mark.',

      works: players.filter((p) =>
        [
          'alan-munde-01',
          'carl-jackson-08',
          'earl-scruggs-15',
          'eddie-adcock-16',
          'mike-sumner-29',
          'sonny-osborne-39',
          'terry-baucom-40',
        ].includes(p.slug)
      ),

      link: '#',
    },
    {
      slug: 'grace-vant-hof',
      name: "Grace Van't Hof",
      location: 'Detroit Michigan',
      imageUrl: '/artists/gracevanthof.jpg',
      bio: "Grace Van't Hof, from Detroit, is also a talented banjo player in her own right, playing with Chris Jones and the Night Drivers, and Sinner Friends.",

      works: players.filter((p) =>
        ['catherine-bb-bowness-09', 'charlie-poole-10'].includes(p.slug)
      ),

      link: '#',
    },
    {
      slug: 'kara-lockmiller',
      name: 'Kara Lockmiller',
      location: 'Knoxville Tennessee',
      imageUrl: '/artists/karalockmiller.jpg',
      bio: 'Kara is a chromesthete which means she sees a vast array of real colors in her mind when she listens to music. Her goal for each portrait is to let you glimpse music and musicians the way she does. There is a kinship between color and music – both can say what words can not.',
      link: '#',
      works: players.filter((p) =>
        [
          'alison-brown-02',
          'cory-walker-11',
          'don-reno-12',
          'jens-koch-21',
          'kristin-scott-benson-27',
          'scott-vestal-37',
          'wes-corbett-42',
        ].includes(p.slug)
      ),
    },

    {
      slug: 'karl-morgan',
      name: 'Karl Morgan',
      location: 'South Wales',
      imageUrl: '/artists/karlmorgan.jpg',
      bio: 'Karl Morgan lives in Llanelli, south Wales and prints under the moniker of Facing West Prints. By day he’s an Exhibitions Officer at Swansea Museum, by night he escapes to his summer house studio at the bottom of his garden and immerses himself in his passion for print. Self-taught, he traded his years of graphic design experience for something a bit more ‘hands on’.',
      link: '#',
      works: players.filter((p) =>
        [
          'don-wayne-reno-13',
          'john-apfelthaler-24',
          'snuffy-jenkins-38',
        ].includes(p.slug)
      ),
    },
    {
      slug: 'robert-felker',
      name: 'Robert Felker',
      location: 'Knoxville Tennessee',
      imageUrl: '/artists/robertfelker.jpg',
      bio: 'Born in Knoxville, raised in Nashville and educated at School of Visual Arts in New York, Robert Felker’s journeyman career has included a variety of cities and disciplines. He started out in commercial illustration, before moving into the graphic design field. Currently, he’s working on a variety of projects including a musician series he call Patron Saints of Rock, fine art landscape paintings and public murals. He works out of his home studio in Knoxville, TN.',
      link: '#',
      works: players.filter((p) => ['bill-keith-06'].includes(p.slug)),
    },
  ],
}

module.exports = data
