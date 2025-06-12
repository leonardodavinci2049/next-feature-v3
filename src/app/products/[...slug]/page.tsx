import React from 'react'

type Props = {
  params: Promise<{
    slug: string[];
  }>;
};
const ProductPage = async ({params}: Props) => {
const {slug} = await params;

 if (!slug || slug.length === 0) {
    return <div>Product not found</div>;
  }

 if (slug[0] === '0') {
    return <div>Product not found</div>;
  }

  return (
    <div>Product Page {slug[0]} and {slug[1]}</div>
  )
}

export default ProductPage