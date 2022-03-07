import Image from 'next/image'
import Link from 'next/link'
import Header from './Header'
const people = [
  {
    slug: 'alexandra-andreica',
    name: 'Alexandra Andreica',
    location: 'London England',
    imageUrl: '/artists/alexandraandreica.jpg',
    link: 'https://www.instagram.com/arthurhattonart/',
    bio: 'Non nostrud ad cillum laborum deserunt sit ea esse cillum laborum quis consectetur minim culpa. Officia et sunt sint fugiat cupidatat consequat tempor non Lorem est elit nulla velit ad. Lorem ut enim sint dolor aute et consequat elit. Quis velit esse officia esse fugiat irure anim dolor proident cupidatat eiusmod.',
  },
  {
    slug: 'anna-magruder',
    name: 'Anna Magruder',
    location: 'Portland Oregon',
    imageUrl: '/artists/annamagruder.jpeg',
    link: '#',
    bio: 'Reprehenderit cillum consectetur veniam sunt id nostrud ea anim consequat sint duis do consequat. Ad culpa quis enim enim. Officia nisi ullamco duis in. Laboris aute consectetur amet nisi proident dolor reprehenderit dolor cupidatat. Aliqua amet minim non proident labore. Cupidatat voluptate officia irure deserunt cillum dolor minim. Cupidatat est deserunt non minim eiusmod cupidatat sint.',
  },
  {
    slug: 'arthur-hatton',
    name: 'Arthur Hatton',
    location: 'East Tennessee',
    imageUrl: '/artists/arthurhatton.jpeg',
    link: 'https://www.instagram.com/andreicaart/',
    bio: 'Ullamco do labore do reprehenderit cillum dolor elit. Excepteur anim minim cupidatat sint minim ea aute voluptate amet exercitation duis ex voluptate officia. Deserunt sit laborum adipisicing sunt adipisicing id cillum sunt ullamco. Quis dolor aliquip et ex mollit excepteur amet magna. Adipisicing commodo irure magna officia sit nisi irure Lorem pariatur occaecat reprehenderit qui quis.',
  },
  {
    slug: 'bryan-peterson',
    name: 'Bryan Peterson',
    location: 'Dallas Texas',
    imageUrl: '/artists/bryanpeterson.jpg',
    link: 'https://www.instagram.com/bryanpetersonart/',
    bio: 'Occaecat excepteur incididunt non Lorem. Ex nisi exercitation eu cillum et anim minim excepteur sit exercitation dolor eu culpa. Aliquip in consequat proident consequat tempor veniam quis laboris ullamco tempor eu anim. Et dolor exercitation culpa ex sunt esse. Aliqua est exercitation cupidatat deserunt ut magna mollit ea tempor aute incididunt sint adipisicing. Aliquip amet veniam pariatur do nisi mollit quis adipisicing anim. Dolor laborum aliquip minim qui occaecat excepteur cillum duis eu.',
  },
  {
    slug: 'garrett-briggeman',
    name: 'Garrett Briggeman',
    location: 'Wichita Kansas',
    imageUrl: '/artists/Garrett Briggeman.jpg',
    link: 'https://www.facebook.com/garrett.briggeman',
    bio: 'Deserunt dolor aliqua esse nulla ad eiusmod magna aliquip eu et cupidatat aute Lorem eiusmod. Excepteur elit nulla minim nostrud laborum irure qui. Pariatur ut do cillum fugiat exercitation ad quis adipisicing id. Ad mollit velit minim pariatur aute consequat dolor et amet anim tempor sit.',
  },
  {
    slug: 'georgina-flood',
    name: 'Georgina Flood',
    location: 'Dublin Ireland',
    imageUrl: '/artists/georginaflood.jpg',
    bio: 'Id sunt mollit deserunt ut magna proident elit fugiat ut. Ad ut voluptate labore labore. Quis id laboris irure eu. Nostrud occaecat minim nulla qui Lorem exercitation sit fugiat velit ullamco proident. Eiusmod amet eu minim duis pariatur velit labore proident dolor esse deserunt culpa nulla.',
    link: '#',
  },
  {
    slug: 'grace-vant-hof',
    name: "Grace Van't Hof",
    location: 'Detroit Michigan',
    imageUrl: '/artists/gracevanthof.jpg',
    bio: 'Excepteur do incididunt qui occaecat labore deserunt fugiat esse. Exercitation Lorem culpa ut in sunt. Magna cupidatat sunt laborum incididunt ea elit quis nisi excepteur sit deserunt duis. Mollit minim cupidatat sit do incididunt veniam.',
    link: '#',
  },
  {
    slug: 'kara-lockmiller',
    name: 'Kara Lockmiller',
    location: 'Knoxville Tennessee',
    imageUrl: '/artists/karalockmiller.jpg',
    bio: 'Excepteur do incididunt qui occaecat labore deserunt fugiat esse. Exercitation Lorem culpa ut in sunt. Magna cupidatat sunt laborum incididunt ea elit quis nisi excepteur sit deserunt duis. Mollit minim cupidatat sit do incididunt veniam.',
    link: '#',
  },

  {
    slug: 'karl-morgan',
    name: 'Karl Morgan',
    location: 'South Wales',
    imageUrl: '/artists/karlmorgan.jpg',
    bio: 'Excepteur do incididunt qui occaecat labore deserunt fugiat esse. Exercitation Lorem culpa ut in sunt. Magna cupidatat sunt laborum incididunt ea elit quis nisi excepteur sit deserunt duis. Mollit minim cupidatat sit do incididunt veniam.',
    link: '#',
  },
  {
    slug: 'robert-felker',
    name: 'Robert Felker',
    location: 'Knoxville Tennessee',
    imageUrl: '/artists/robertfelker.jpg',
    bio: 'Quis dolor aute aliquip ex nostrud reprehenderit aliqua do ullamco reprehenderit. Ad non qui minim officia nostrud ullamco laborum eu ea eiusmod consequat. Aliqua esse incididunt voluptate ullamco aliqua proident excepteur velit irure ut sit commodo. Excepteur tempor aute esse esse proident. Tempor nulla qui commodo excepteur ex culpa fugiat exercitation cillum magna veniam ullamco ex. Labore adipisicing incididunt labore adipisicing. Cillum est dolore nisi dolore voluptate aute irure Lorem.',
    link: '#',
  },

  // More people...
]

export default function Example() {
  return (
    <div>
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-medium tracking-tight uppercase font-display text-gray-700">
              Our Artists
            </h2>
            <p className="text-xl text-gray-500">
              Learn more about the amazing artists behind Banjo All-Stars
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul
              role="list"
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8"
            >
              {people.map((person) => (
                <li key={person.name}>
                  <div className="flex items-center space-x-4 lg:space-x-6">
                    <img
                      className="w-16 h-16 rounded-full lg:w-20 lg:h-20"
                      src={person.imageUrl}
                      alt=""
                    />
                    <div className="font-medium text-lg leading-6">
                      <h3>{person.name}</h3>
                      <p className="text-gray-500 text-base mb-2">
                        {person.location}
                      </p>
                      <Link href={`/about/artists/${person.slug}`}>
                        <a className="text-base text-gray-700 underline font-semibold">
                          More detail
                        </a>
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
