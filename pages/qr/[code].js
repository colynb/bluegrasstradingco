import { useRouter } from 'next/router'
import QRCode from 'qrcode.react'

export default function Player(props) {
  const router = useRouter()
  const { code } = router.query

  const url = `https://www.bluegrasstradingco.com/r/${code}`

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div>
        <div>{url}</div>
        <QRCode value={url} size={128} level={'L'} includeMargin={false} />
      </div>
    </div>
  )
}

Player.getInitialProps = ({ req, res }) => {
  return {
    url: req.url,
  }
}
