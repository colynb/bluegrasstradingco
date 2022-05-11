const redirects = [
  {
    coupon: 'BANJOALLSTAR',
    path: '/about/players/alan-munde',
    code: 'ALANMUNDE',
  },
  {
    coupon: 'BANJOALLSTAR',
    path: '/about/players/alison-brown',
    code: 'ALISON',
  },
  {
    coupon: 'BANJOALLSTAR',
    path: '/about/players/ashley-campbell',
    code: 'ASHLEY',
  },
  {
    coupon: 'BANJOALLSTAR',
    path: '/about/players/ben-clark',
    code: 'BANJOBEN',
  },
  {
    coupon: 'BANJOALLSTAR',
    path: '/about/players/bill-emerson',
    code: 'BILLEMERSON',
  },
  {
    coupon: 'BANJOALLSTAR',
    path: '/about/players/bill-keith',
    code: 'BILLKEITH',
  },
  {
    coupon: 'BANJOALLSTAR',
    path: '/about/players/butch-robins',
    code: 'BUTCH',
  },
  {
    coupon: 'BANJOALLSTAR',
    path: '/about/players/carl-jackson',
    code: 'CARLJACKSON',
  },
  {
    coupon: 'BANJOALLSTAR',
    path: '/about/players/catherine-bb-bowness',
    code: 'BB',
  },
  {
    coupon: 'BANJOALLSTAR',
    path: '/about/players/charlie-poole',
    code: 'CHARLIEPOOLE',
  },
  {
    coupon: 'BANJOALLSTAR',
    path: '/about/players/cory-walker',
    code: 'CORYWALKER',
  },
  {
    coupon: 'BANJOALLSTAR',
    path: '/about/players/don-reno',
    code: 'DONRENO',
  },
  {
    coupon: 'BANJOALLSTAR',
    path: '/about/players/don-wayne-reno',
    code: 'DONWAYNERENO',
  },
  {
    coupon: 'BANJOALLSTAR',
    path: '/about/players/doug-dillard',
    code: 'DOUGDILLARD',
  },
  {
    coupon: 'BANJOALLSTAR',
    path: '/about/players/earl-scruggs',
    code: 'EARLSCRUGGS',
  },
  {
    coupon: 'BANJOALLSTAR',
    path: '/about/players/eddie-adcock',
    code: 'EDDIE',
  },
  {
    coupon: 'BANJOALLSTAR',
    path: '/about/players/gina-furtado',
    code: 'GINAFURTADO',
  },
  {
    coupon: 'BANJOALLSTAR',
    path: '/about/players/greg-cahill',
    code: 'GREGCAHILL',
  },
  {
    coupon: 'BANJOALLSTAR',
    path: '/about/players/jd-crowe',
    code: 'JDCROWE',
  },
  {
    coupon: 'BANJOALLSTAR',
    path: '/about/players/jason-davis',
    code: 'JASONDAVIS',
  },
  {
    coupon: 'BANJOALLSTAR',
    path: '/about/players/jens-koch',
    code: 'JENSKOCH',
  },
  {
    coupon: 'BANJOALLSTAR',
    path: '/about/players/jeremy-stephens',
    code: 'JEREMYSTEPHENS',
  },
  {
    coupon: 'BANJOALLSTAR',
    path: '/about/players/jim-pankey',
    code: 'JIMPANKEY',
  },
  {
    coupon: 'BANJOALLSTAR',
    path: '/about/players/john-apfelthaler',
    code: 'JOHNAPFELTHALER',
  },
  {
    coupon: 'BANJOALLSTAR',
    path: '/about/players/john-dowling',
    code: 'JOHNDOWLING',
  },
  {
    coupon: 'BANJOALLSTAR',
    path: '/about/players/kenny-brown',
    code: 'KENNYBROWN',
  },
  {
    coupon: 'BANJOALLSTAR',
    path: '/about/players/kristin-scott-benson',
    code: 'KRISTIN',
  },
  {
    coupon: 'BANJOALLSTAR',
    path: '/about/players/mike-scott',
    code: 'MIKESCOTT',
  },
  {
    coupon: 'BANJOALLSTAR',
    path: '/about/players/mike-sumner',
    code: 'MIKESUMNER',
  },
  {
    coupon: 'BANJOALLSTAR',
    path: '/about/players/ned-luberecki',
    code: 'NEDSKI',
  },
  {
    coupon: 'BANJOALLSTAR',
    path: '/about/players/nick-einterz',
    code: 'NICKEINTERZ',
  },
  {
    coupon: 'BANJOALLSTAR',
    path: '/about/players/nick-hornbuckle',
    code: 'NICKHORNBUCKLE',
  },
  {
    coupon: 'BANJOALLSTAR',
    path: '/about/players/ralph-stanley',
    code: 'RALPHSTANLEY',
  },
  {
    coupon: 'BANJOALLSTAR',
    path: '/about/players/robby-boone',
    code: 'ROBBYBOONE',
  },
  {
    coupon: 'BANJOALLSTAR',
    path: '/about/players/ron-block',
    code: 'RONBLOCK',
  },
  {
    coupon: 'BANJOALLSTAR',
    path: '/about/players/sammy-shelor',
    code: 'SAMMYSHELOR',
  },
  {
    coupon: 'BANJOALLSTAR',
    path: '/about/players/scott-vestal',
    code: 'SCOTTVESTAL',
  },
  {
    coupon: 'BANJOALLSTAR',
    path: '/about/players/snuffy-jenkins',
    code: 'SNUFFY',
  },
  {
    coupon: 'BANJOALLSTAR',
    path: '/about/players/sonny-osborne',
    code: 'SONNY',
  },
  {
    coupon: 'BANJOALLSTAR',
    path: '/about/players/terry-baucom',
    code: 'TERRYBAUCOM',
  },
  {
    coupon: 'BANJOALLSTAR',
    path: '/about/players/tony-trischka',
    code: 'TONYTRISCHKA',
  },
  {
    coupon: 'BANJOALLSTAR',
    path: '/about/players/wes-corbett',
    code: 'WESCORBETT',
  },
  {
    coupon: 'BANJOALLSTAR',
    path: '/giveaway',
    code: 'BANJOALLSTAR',
  },
  {
    coupon: 'BERKELEY20',
    path: '/giveaway',
    code: 'BERKELEY20',
  },
  {
    coupon: 'KNEEDEEP',
    path: '/',
    code: 'KNEEDEEP',
  },
  {
    coupon: 'PICKYFINGERS',
    path: '/',
    code: 'PICKYFINGERS',
  },
  {
    coupon: 'JIM',
    path: '/',
    code: 'JIM',
  },
]

module.exports = redirects
