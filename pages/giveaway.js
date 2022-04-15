import Script from 'next/script'
import Head from 'next/head'
import client from '../client'
import EnterToWinHero from '../components/EnterToWinHero'
import Layout from '../components/Layout'

export const Giveaway = ({ featured }) => {
  const metaData = {
    image:
      'https://res.cloudinary.com/dlrg6wtbf/image/upload/c_lfill,g_center,h_500,w_500/v1648588625/Site/IMG_3738.jpg',
    title: 'Enter to Win the Complete Set',
    description: `Thank you so much for your purchase. As a thank you, we are giving away 3 complete sets of Banjo All-Star Premium Trading Cards to 3 lucky subscribers to our newsletter. Each set is 12 packs and a collectible display box.`,
  }
  return (
    <Layout metaData={metaData} options={{ giveawayBanner: false }}>
      <Script
        id="viral-loops"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
    !function(a,b,c,d,t){var e,f=a.getElementsByTagName("head")[0];if(!a.getElementById(c)){if(e=a.createElement(b),e.id=c,e.setAttribute("data-vrlps-ucid",d),e.setAttribute("data-vrlps-version","2"), e.setAttribute("data-vrlps-template", t),e.src="https://app.viral-loops.com/popup_assets/js/vl_load_v2.min.js",window.ub){jQuery=null,$=null;var g=a.createElement(b);g.src="https://code.jquery.com/jquery-2.2.4.min.js",f.appendChild(g)}f.appendChild(e);var h=a.createElement("link");h.rel="stylesheet",h.type="text/css",h.href="https://app.viral-loops.com/static/vl-loader.css",f.appendChild(h);var i=a.createElement("div");i.id="vl-overlay",i.style.display="none";var j=a.createElement("div");j.id="vl-loader",i.appendChild(j),a.addEventListener("DOMContentLoaded",function(b){a.body.appendChild(i);for(var c=a.getElementsByClassName("vrlps-trigger"),d=0;d<c.length;d++)c[d].removeAttribute("href"),c[d].onclick=function(){a.getElementById("vl-overlay").style.display="block"};var e=a.querySelectorAll("[data-vl-widget='popupTrigger']");[].forEach.call(e,function(b){var c=a.createElement("div");c.className="vl-embedded-cta-loader",b.appendChild(c)})})}}(document,"script","vrlps-js","PdUHH8snCQXrjkQg2jDFTTcrPyE","sweepstake");
  `,
        }}
      />

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
