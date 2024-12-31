import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import '../styles/ProductPage.css';

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  // Update Open Graph metadata dynamically
  useEffect(() => {
    document.title = product.title;
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute('content', product.title);
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute('content', product.description);
    document
      .querySelector('meta[property="og:image"]')
      ?.setAttribute('content', product.thumbnail);
  }, [product]);

  return (
    <div className="product-container">
      <h1>{product.title}</h1>
      <img src={product.thumbnail} alt={product.title} className="product-image" />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
}

export default ProductPage;
