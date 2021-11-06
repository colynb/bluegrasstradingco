import { useRouter } from 'next/router'
import QRCode from 'qrcode.react'

export default function Player(props) {
  const router = useRouter()
  const { player } = router.query

  const url = `https://www.bluegrasstradingco.com${props.url}`
  console.log(url)

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div>
        <div>{url}</div>
        <QRCode value={url} size={256} level={'L'} includeMargin={true} />
      </div>
    </div>
  )
}

Player.getInitialProps = ({ req, res }) => {
  return {
    url: req.url,
  }
}
