import React from "react";

type PropParams = {
  params: Promise<{
    productId: string;
  }>;
};

const ProductByIdPage = async ({ params }: PropParams) => {
  const { productId } = await params;
  return <div>Product ID {productId}</div>;
};

export default ProductByIdPage;
