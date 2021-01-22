import React from 'react'
import { Link } from 'gatsby'

import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>テストサイト</h1>
    <p>Welcome to your new Shop powered by Gatsby and Shopify.</p>
    <Link to="/contact/">お問い合わせ</Link>
    <ProductGrid />
  </>
)

export default IndexPage
