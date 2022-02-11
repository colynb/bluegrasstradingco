import Image from 'next/image'
import Link from 'next/link'
export default function Player(props) {
  const players = [
    { name: 'Alan Munde', image: '_0026_ALAN MUNDE.jpg' },
    { name: 'Alison Brown', image: '_0001_ALISON BROWN.jpg' },
    { name: 'Allen Shelton', image: '_0015_ALLEN SHELTON.jpg' },
    { name: 'Ashley Campbell', image: '_0033_ASHLEY CAMPBELL.jpg' },
    { name: 'Ben Clark', image: '_0035_BEN CLARK.jpg' },
    { name: 'Bill Emerson', image: '_0014_BILL EMERSON.jpg' },
    { name: 'Bill Keith', image: '_0018_BILL KEITH.jpg' },
    { name: 'Butch Robins', image: '_0003_BUTCH ROBINS.jpg' },
    { name: 'Carl Jackson', image: '_0013_CARL JACKSON.jpg' },
    { name: 'Catherine “BB” Bowness', image: '' },
    { name: 'Charlie Poole', image: '' },
    { name: 'Cory Walker', image: '_0025_CORY WALKER.jpg' },
    { name: 'Don Reno', image: '_0024_DON RENO.jpg' },
    { name: 'Don Wayne Reno', image: '_0005_DON WAYNE RENO.jpg' },
    { name: 'Doug Dillard', image: '_0032_DOUG DILLARD.jpg' },
    { name: 'Earl Scruggs', image: '_0023_EARL SCRUGGS.jpg' },
    { name: 'Eddie Adcock', image: '_0034_EDDIE ADCOCK.jpg' },
    { name: 'Gina Furtado ', image: '_0006_GINA FURTADO.jpg' },
    { name: 'Grandpa Jones ', image: '' },
    { name: 'Greg Cahill', image: '' },
    { name: 'J.D. Crowe', image: '_0009_JD CROWE.jpg' },
    { name: 'Jason Davis', image: '_0000_JASON DAVIS.jpg' },
    { name: 'Jens Koch', image: '_0030_JENS KOCH.jpg' },
    { name: 'Jeremy Stephens', image: '_0002_JEREMY STEPHENS.jpg' },
    { name: 'Jim Pankey', image: '_0019_JIM PANKEY.jpg' },
    { name: 'John Apfelthaler', image: '' },
    { name: 'John Dowling', image: '' },
    // { name: 'Ken Brown', image: '' },
    { name: 'Kristin Scott Benson', image: '_0007_KRISTIN SCOTT BENSON.jpg' },
    { name: 'Mike Scott', image: '_0008_MIKE SCOTT.jpg' },
    { name: 'Mike Sumner', image: '_0022_MIKE SUMNER.jpg' },
    { name: 'Ned Luberecki', image: '_0028_NED LUBERECKI.jpg' },
    { name: 'Nick Einterz', image: '_0017_NICK EINTERZ.jpg' },
    { name: 'Nick Hornbuckle', image: '_0016_NICK HORNBUCKLE.jpg' },
    { name: 'Ralph Stanley', image: '_0020_RALPH STANLEY.jpg' },
    { name: 'Robby Boone', image: '_0029_ROBBY BOONE.jpg' },
    { name: 'Ron Block', image: '_0012_RON BLOCK.jpg' },
    { name: 'Scott Vestal', image: '_0021_SCOTT VESTAL.jpg' },
    { name: 'Snuffy Jenkins', image: '_0004_SNUFFY JENKINS.jpg' },
    { name: 'Sonny Osborne', image: '_0031_SONNY OSBORNE.jpg' },
    { name: 'Terry Baucom', image: '_0011_TERRY BAUCOM.jpg' },
    { name: 'Tony Trischka', image: '_0010_TONY TRISCHKA.jpg' },
    { name: 'Wes Corbett', image: '_0027_WES CORBETT.jpg' },
  ]

  return (
    <div>
      <header className="px-6 sm:px-0 flex items-center py-4 md:py-8 justify-center bg-white">
        <div className="relative max-w-4xl h-28 w-full">
          <Link href="/">
            <a>
              <Image
                src="/logo.svg"
                alt="Bluegrass Trading Co."
                layout="fill"
              />
            </a>
          </Link>
        </div>
      </header>
      <div className="p-12 text-center bg-gray-100">
        <div className="font-display font-bold  text-3xl text-gray-40">
          PLAYERS ({players.filter((p) => p.image).length} completed -{' '}
          {players.filter((p) => !p.image).length} in progress)
        </div>
        <div className="text-xl mb-5">
          Shipping in April -{' '}
          <a
            href="https://shop.bluegrasstradingco.com/products/bluegrass-trading-co-banjo-all-star-series-one-pack"
            className="text-blue-600"
          >
            Order now for a instant Pre-order discount!
          </a>
        </div>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-1">
            {players
              .filter((p) => p.image)
              .map((p, i) => (
                <div key={`player${i}`} className="relative rounded shadow">
                  {p.image && (
                    <div className="relative">
                      <div className="absolute bottom-0 w-full z-10 text-center bg-opacity-50 bg-green-100 font-display font-bold text-lg">
                        {p.name}
                      </div>
                      <div className="w-40 h-52 z-0">
                        <Image
                          src={`/portraits/${p.image}`}
                          alt="Bluegrass Trading Co - Banjo All-Star Series One Trading Cards"
                          layout="fill"
                          className="z-0 object-cover rounded"
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 'Alan Munde',
 'Alison Brown',
 'Allen Shelton',
 'Ashley Campbell',
 'Ben Clark',
 'Bill Emerson',
 'Bill Keith',
 'Butch Robins',
 'Carl Jackson',
 'Catherine “BB” Bowness',
 'Charlie Poole',
 'Cory Walker',
 'Don Reno',
 'Don Stover',
 'Don Wayne Reno',
 'Doug Dillard',
 'Earl Scruggs',
 'Eddie Adcock',
 'Gina Furtado ',
 'Grandpa Jones ',
 'Greg Cahill',
 'J.D. Crowe',
 'Jason Davis',
 'Jens Koch',
 'Jeremy Stephens',
 'Jim Pankey',
 'John Apfelthaler',
 'John Dowling',
 'John Hartford ',
 'Ken Brown',
 'Kristen Scott Benson',
 'Mike Scott',
 'Mike Sumner',
 'Ned Luberecki',
 'Nick Einterz',
 'Nick Hornbuckle',
 'Ralph Stanley',
 'Robby Boone',
 'Ron Block',
 'Scott Vestal',
 'Snuffy Jenkins',
 'Sonny Osborne',
 'Terry Baucom',
 'Tony Trischka',
 'Wes Corbett',
   */
