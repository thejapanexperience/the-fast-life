// Scenario 1
// UK Magical Mystery Tour
const Scenario1 =
{
  scenarioName: 'UK Magical Mystery Tour',
  scenarioAuthor: 'Richard Mands',
  waypoints:['London', 'Bath', 'Manchester', 'York', 'Edinburgh', 'Fort William' ],
  vouchers: 7
}

const Waypoints = [
  {
    waypointName: 'London',
    waypointIntro: 'The capital city of the UK'
    currentWaypoint: true,
    pointsOfInterest: [{
      poiName: 'Baker Street',
      clue: 'A significant historical site, this was the location of a famous Roman spa',
      text: 'A visit to Baker Street will lead you to the original Madame Tussauds wax museum as well as to the home of Sherlock Holmes.'
      links: ['https://en.wikipedia.org/wiki/Baker_Street'],
    },
    {
      poiName: 'Buckingham Palace',
      clue: null,
      text: 'Buckingham Palace serves as both the office and London residence of Her Majesty The Queen. It is one of the few working royal palaces remaining in the world today. During a visit to Buckingham Palace, visitors can see the nineteen magnificent State Rooms, which provide the setting for ceremonial occasions and official entertaining. All rooms are furnished with many of the greatest treasures from the Royal Collection.'
      links: ['https://en.wikipedia.org/wiki/Buckingham_Palace'],
    }
  ],
  falseRoute: [],
  },
  {
    waypointName: 'Bath',
    waypointIntro: 'A city with an ancient past that has often been used as a resort for the rich and powerful.'
    currentWaypoint: false,
    pointsOfInterest: [{
      poiName: 'The Roman Baths',
      clue: null,
      text: 'The Roman Baths is one of the finest historic sites in Northern Europe, and one of the most popular tourist attractions in the UK. Hidden beneath the present city of Bath lies the stone remains of one of the finest religious spas of the ancient world.'
      links: ['https://en.wikipedia.org/wiki/Roman_Baths_(Bath)'],
    },
    {
      poiName: 'The Royal Crescent',
      clue: 'Famous for its railways, music and football teams, this city hosts the largest tram system in the UK',
      text: 'Designed by John Wood the Younger as lodging-houses for the gentry on their visits to Bath, this crescent was completed in 1767. It was in the middle of farmland then and had wonderful sweeping views of the hills and Avon valley. Those views now offer additional interest for fans of gasholder design and housing estate layout, but the Crescent itself remains a splendid sight, with Victoria Park calmly green below. Note the ha-ha, or sunken fence, which kept the sheep, cows and peasants from their front lawns, but didn’t interrupt the view from the apartments. '
      links: ['https://en.wikipedia.org/wiki/Royal_Crescent'],
    }
  ],
  falseRoute: [
    {
      falseWaypointName: 'Oxford',
      falsewaypointIntro: 'The city is known worldwide as the home of the University of Oxford, the oldest university in the English-speaking world. Buildings in Oxford demonstrate notable examples of every English architectural period since the late Saxon period. Oxford is known as the "city of dreaming spires", a term coined by poet Matthew Arnold. Oxford has a broad economic base. Its industries include motor manufacturing, education, publishing and a large number of information technology and science-based businesses.',
      falsePointsOfInterest: [
        {
          poiName: 'The Bodleian Library',
          text: "The Bodleian Library is a working library which forms part of the University of Oxford. It is housed in a remarkable group of buildings which forms the historic heart of the University, and you can explore the quadrangles of these magnificent structures at no charge. Different ticket options allow you to visit the interior of some of the buildings, such as the University’s oldest teaching and examination room, The Divinity School (built 1427-88). Here you will discover more of the University’s fascinating history. Our guided tours go behind the scenes in the Library, including its oldest research library, dating from 1602-20.",
          links:['https://en.wikipedia.org/wiki/Bodleian_Library'],
        },
        {
          poiName: 'The Ashmolean Museum',
          text: "Oxford University's Ashmolean Museum of Art and Archaeology, established in 1683, is Britain’s oldest public museum and one of the oldest museums in the world.",
          links:['https://en.wikipedia.org/wiki/Ashmolean_Museum'],
        },
      ],
    },

  ],
  },
  {
    waypointName: 'Manchester',
    waypointIntro: "Manchester is a major city and metropolitan borough in Greater Manchester, England, with a population of 514,414 as of 2013. It lies within the United Kingdom's second-most populous urban area, with a population of 2.55 million."
    currentWaypoint: false,
    pointsOfInterest: [{
      poiName: 'Old Trafford',
      clue: null,
      text: "Old Trafford, home to Manchester United Football Club, is one of the world's most iconic football stadiums. Nicknamed the Theatre of Dreams by Sir Bobby Charlton, Old Trafford stadium has been Manchester United's home ground since 1910. Visitors to Old Trafford stadium can experience the clubs history and go behind the scenes with the Manchester United Museum and Stadium Tour. The award-winning Museum blends historical exhibits with state-of-the-art interactive experiences and the 80 minute guided Stadium Tour allows visitors to see the players' dressing room, walk out of the tunnel and even sit in the dugout."
      links: ['https://en.wikipedia.org/wiki/Old_Trafford'],
    },
    {
      poiName: 'Museum of Science and Industry',
      clue: 'Famous for its railways, music and football teams, this city hosts the largest tram system in the UK',
      text: "The Museum of Science and Industry sits in the heart of Manchester, the world's first industrial city. It houses the world's oldest surviving passenger railway station and the world's first railway warehouse from 1830, which are located at the end of the museum site. On a visit to the museum, you will see amazing objects and learn about the men and women whose ideas changed the world forever. Daily demonstrations bring the museum's world class collection of textile and industrial machinery to life. There are interactive exhibits to explore and a regular programme of changing exhibitions to enjoy."
      links: ['https://en.wikipedia.org/wiki/Museum_of_Science_and_Industry_(Manchester)'],
    }
  ],
  falseRoute: [
    {
      falseWaypointName: 'Liverpool',
      falsewaypointIntro: "Liverpool, in North West England, is a major city and metropolitan borough with an estimated population of 478,580 in 2015. Liverpool, along with its metropolitan county and city region, forms the fifth largest metropolitan area in the UK, with an estimated population of over 2.24 million in 2011.",
      falsePointsOfInterest: [
        {
          poiName: 'The Bodleian Library',
          text: "The Bodleian Library is a working library which forms part of the University of Oxford. It is housed in a remarkable group of buildings which forms the historic heart of the University, and you can explore the quadrangles of these magnificent structures at no charge. Different ticket options allow you to visit the interior of some of the buildings, such as the University’s oldest teaching and examination room, The Divinity School (built 1427-88). Here you will discover more of the University’s fascinating history. Our guided tours go behind the scenes in the Library, including its oldest research library, dating from 1602-20.",
          links:['https://en.wikipedia.org/wiki/Bodleian_Library'],
        },
        {
          poiName: 'The Ashmolean Museum',
          text: "Oxford University's Ashmolean Museum of Art and Archaeology, established in 1683, is Britain’s oldest public museum and one of the oldest museums in the world.",
          links:['https://en.wikipedia.org/wiki/Ashmolean_Museum'],
        },
      ],
    },

  ],
  },
]
