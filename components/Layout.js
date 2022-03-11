import Footer from './Footer'
import Header from './Header'

export default function Layout({ children, ...rest }) {
  return (
    <div className="h-screen flex flex-col justify-between">
      <Header {...rest} />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  )
}
