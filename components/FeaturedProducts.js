export default function FeaturedProducts({ collection }) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex items-center justify-between space-x-4">
          <h2 className="text-lg font-medium text-gray-900">New Products!</h2>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          {collection.products.edges.map((product) => (
            <div key={product.node.handle} className="group relative">
              <div className="aspect-w-3 aspect-h-3 overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={product.node.images.edges[0].node.transformedSrc}
                  alt={product.node.title}
                  className="object-cover object-center"
                />
                <div
                  className="flex items-end p-4 opacity-0 group-hover:opacity-100"
                  aria-hidden="true"
                >
                  <div className="w-full rounded-md bg-white bg-opacity-75 py-2 px-4 text-center text-sm font-medium text-gray-900 backdrop-blur backdrop-filter">
                    View Product
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-start justify-between space-x-8 text-base font-medium text-gray-900">
                <h3>
                  <a href={product.node.onlineStoreUrl}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.node.title}
                  </a>
                </h3>
                <p className="font-bold">
                  ${parseFloat(product.node.priceRange.minVariantPrice.amount)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
