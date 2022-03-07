import Image from 'next/image'
import Header from '../../../components/Header'
import Link from 'next/link'
const people = [
  {
    name: 'Alexandra Andreica',
    location: 'London England',
    imageUrl: '/artists/alexandraandreica.jpg',
    link: 'https://www.instagram.com/arthurhattonart/',
  },
  {
    name: 'Anna Magruder',
    location: 'Portland Oregon',
    imageUrl: '/artists/annamagruder.jpeg',
    link: '#',
  },
  {
    name: 'Arthur Hatton',
    location: 'East Tennessee',
    imageUrl: '/artists/arthurhatton.jpeg',
    link: 'https://www.instagram.com/andreicaart/',
  },
  {
    name: 'Bryan Peterson',
    location: 'Dallas Texas',
    imageUrl: '/artists/bryanpeterson.jpg',
    link: 'https://www.instagram.com/bryanpetersonart/',
  },
  {
    name: 'Garrett Briggeman',
    location: 'Wichita Kansas',
    imageUrl: '/artists/Garrett Briggeman.jpg',
    link: 'https://www.facebook.com/garrett.briggeman',
  },
  {
    name: 'Georgina Flood',
    location: 'Dublin Ireland',
    imageUrl: '/artists/georginaflood.jpg',
    link: '#',
  },

  {
    name: 'Kara Lockmiller',
    location: 'Knoxville Tennessee',
    imageUrl: '/artists/karalockmiller.jpg',
    link: '#',
  },
  {
    name: 'Robert Felker',
    location: 'Knoxville Tennessee',
    imageUrl: '/artists/robertfelker.jpg',
    link: '#',
  },

  // More people...
]

export default function Artists() {
  return (
    <div className="bg-gray-100">
      <Header title="Bluegrass Trading Co Banjo All-Star Artists" />
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-3xl font-display font-extrabold tracking-tight sm:text-4xl">
              Our Artists
            </h2>
            <p className="text-xl text-gray-500">
              Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum dolor
              ultricies donec risus sodales. Tempus quis et.
            </p>
          </div>
          <ul
            role="list"
            className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
          >
            {people.map((person) => (
              <li
                key={person.name}
                className="bg-white rounded-lg shadow overflow-hidden"
              >
                <Link href="/">
                  <a>
                    <div className="">
                      <div className="aspect-w-3 aspect-h-2">
                        <Image
                          className="object-cover"
                          src={person.imageUrl}
                          width="500"
                          height="500"
                          alt=""
                        />
                      </div>

                      <div className="space-y-2 p-2">
                        <div className="text-lg leading-4 font-medium space-y-1">
                          <h3>{person.name}</h3>
                          <p className="text-gray-400 text-base">
                            {person.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
