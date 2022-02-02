import { useRouter } from 'next/router'

export default function Player(props) {
  const router = useRouter()
  const { player } = router.query

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div>
        <div>{player}</div>
      </div>
    </div>
  )
}

Player.getInitialProps = ({ req, res }) => {
  return {
    url: req.url,
  }
}
