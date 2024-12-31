import { useEffect, useState } from 'react';
import ProductGrid from '../components/ProductGrid';
// import '../styles/HomePage.css';

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div className="home-container">
      <h1>Product List</h1>
      <ProductGrid products={products} />
    </div>
  );
}

export default HomePage;
