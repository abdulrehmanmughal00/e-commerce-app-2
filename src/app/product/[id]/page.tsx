import { products } from "@/data/Product";

const ProductPage = ({ params }: { params: { id: string } }) => {
  const product = products.find(
    (item) => item.id === Number(params.id)
  );

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <p>Price: Rs. {product.newPrice}</p>
    </div>
  );
};

export default ProductPage;