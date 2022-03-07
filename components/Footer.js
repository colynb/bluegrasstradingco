export default function Footer() {
  return (
    <footer className="bg-gray-800">
      <div className="mx-auto max-w-4xl text-sm text-gray-500 px-4 md:px-0 py-12 space-y-4">
        <div className="md:flex items-center space-y-4 md:space-y-0 md:space-x-4 leading-none">
          <div>&copy; 2021 Bluegrass Trading Co. LLC</div>
          <div className="hidden md:block">♥</div>
          <div>Established 2021, Friendsville Tennessee</div>
          <div className="hidden md:block">♥</div>
          <div>
            <a
              href="mailto:colyn@bluegrasstradingco.com"
              className="text-white"
            >
              colyn@bluegrasstradingco.com
            </a>
          </div>
        </div>
        <div>Site design and development by Bluegrass Trading Co. LLC</div>
      </div>
    </footer>
  )
}
