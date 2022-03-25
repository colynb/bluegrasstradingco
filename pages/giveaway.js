import client from '../client'
import EnterToWinHero from '../components/EnterToWinHero'
import Layout from '../components/Layout'

export const Giveaway = ({ featured }) => {
  const metaData = {
    title: 'Enter to Win the Complete Set',
    description: `Thank you so much for your purchase. As a thank you, we are giving away 3 complete sets of Banjo All-Star Premium Trading Cards to 3 lucky subscribers to our newsletter. Each set is 12 packs and a collectible display box. Subscribe now and also get a 20% OFF
  coupon code delivered to your inbox.`,
  }
  return (
    <Layout metaData={metaData}>
      <div>
        <EnterToWinHero featured={featured} />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const featured = await client.fetch(
    `*[_type == "player"]|order(series_number){name, series_number, slug, imageUrl}`
  )

  featured.sort(() => Math.random() - 0.5)
  return {
    props: {
      featured,
    },
  }
}

export default Giveaway
