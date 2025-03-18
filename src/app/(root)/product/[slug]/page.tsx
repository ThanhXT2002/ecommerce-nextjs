import { Card, CardContent } from '@/components/ui/card'
import {
  getProductBySlug,
  getRelatedProductsByCategory,
} from '@/lib/actions/product.actions'

import SelectVariant from '@/components/shared/product/select-variant'
import ProductPrice from '@/components/shared/product/product-price'
import ProductGallery from '@/components/shared/product/product-gallery'
import { Separator } from '@/components/ui/separator'
import ProductSlider from '@/components/shared/product/product-slider'
import Rating from '@/components/shared/product/rating'
import { notFound } from 'next/navigation'
import BrowsingHistoryList from '@/components/shared/browsing-history-list'
import AddToBrowsingHistory from '@/components/shared/product/add-to-browsing-history'

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>
}) {
  const params = await props.params
  const product = await getProductBySlug(params.slug)
  
  if (!product) {
    return { title: 'Product not found' }
  }
  
  return {
    title: product.name,
    description: product.description,
  }
}

export default async function ProductDetails(props: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ page: string; color: string; size: string }>
}) {
  const searchParams = await props.searchParams
  const params = await props.params
  
  const { page, color, size } = searchParams
  const { slug } = params

  const product = await getProductBySlug(slug)
  
  // Handle product not found scenario
  if (!product) {
    notFound()
  }

  // Default values and safe access
  const defaultSize = product.sizes?.length > 0 ? product.sizes[0] : ""
  const defaultColor = product.colors?.length > 0 ? product.colors[0] : ""
  const avgRating = typeof product.avgRating === 'number' ? product.avgRating : 0
  const images = Array.isArray(product.images) ? product.images : []
  const productTags = Array.isArray(product.tags) ? product.tags : []
  const isDeal = productTags.includes('todays-deal')
  
  // Safe fetch of related products
  const relatedProducts = await getRelatedProductsByCategory({
    category: product.category || "",
    productId: product._id || "",
    page: Number(page || '1'),
  }).catch(() => ({ data: [] }))

  return (
    <div>
      <AddToBrowsingHistory id={product._id} category={product.category} />
      <section>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* Product Gallery - Left Column */}
          <div className="col-span-2">
            {images.length > 0 && <ProductGallery images={images} />}
          </div>

          {/* Product Details - Middle Column */}
          <div className="flex w-full flex-col gap-2 md:p-5 col-span-2">
            <div className="flex flex-col gap-3">
              <p className="p-medium-16 rounded-full bg-gray-100 px-3 py-1 text-gray-500">
                {product.brand && `Brand ${product.brand}`}{" "}
                {product.category && product.category}
              </p>
              
              <h1 className="font-bold text-lg lg:text-xl">{product.name}</h1>
              
              {avgRating > 0 && (
                <div className="flex items-center gap-2">
                  <span>{avgRating.toFixed(1)}</span>
                  <Rating rating={avgRating} />
                  <span>{product.numReviews || 0} ratings</span>
                </div>
              )}
              
              <Separator />
              
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex gap-3">
                  <ProductPrice
                    price={product.price}
                    listPrice={product.listPrice}
                    isDeal={isDeal}
                    forListing={false}
                  />
                </div>
              </div>
            </div>
            
            <div>
              <SelectVariant
                product={product}
                size={size || defaultSize}
                color={color || defaultColor}
              />
            </div>
            
            <Separator className="my-2" />
            
            {product.description && (
              <div className="flex flex-col gap-2">
                <p className="font-bold text-base text-gray-600">Description:</p>
                <p className="text-sm lg:text-base">
                  {product.description}
                </p>
              </div>
            )}
          </div>

          {/* Product Availability - Right Column */}
          <div>
            <Card>
              <CardContent className="p-4 flex flex-col gap-4">
                <ProductPrice price={product.price} />

                {product.countInStock > 0 && product.countInStock <= 3 && (
                  <div className="text-red-600 font-bold">
                    {`Only ${product.countInStock} left in stock - order soon`}
                  </div>
                )}
                
                {product.countInStock !== 0 ? (
                  <div className="text-green-700 text-xl">In Stock</div>
                ) : (
                  <div className="text-red-600 text-xl">Out of Stock</div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      {relatedProducts.data && relatedProducts.data.length > 0 && (
        <section className="mt-10">
          <ProductSlider
            products={relatedProducts.data}
            title={`Best Sellers in ${product.category || 'Related Products'}`}
          />
        </section>
      )}

    <section>
      <BrowsingHistoryList />
    </section>
    </div>
  )
}