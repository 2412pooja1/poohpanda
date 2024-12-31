import { Link } from 'react-router-dom';
// import '../styles/ProductCard.css';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <Link to={`/products/${product.id}`}>
        <button className="view-details-button">View Details</button>
      </Link>
    </div>
  );
}

export default ProductCard;
