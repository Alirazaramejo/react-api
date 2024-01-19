import { Card, Spin, Alert } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Products() {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); // Renamed Navigate to navigate for convention

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  const handleButtonClick = (id) => {
    // Placeholder onClick handler for the button
    navigate(`/SinglePage/${id}`);
    // Add your logic here, e.g., navigate to a product details page
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Spin tip="Loading..." />
      </div>
    );
  }

  if (error) {
    return (
      <Alert message="Error loading products" description={error.message} type="error" />
    );
  }

  return (
    <div>
      <p>Product ID: {params.id}</p>
      <div>Products</div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map(product => (
          <Card
            key={product.id}
            hoverable
            style={{ width: 210, margin: '10px' }}
            cover={<img alt={product.title} src={product.image} />}
          >
            <Card.Meta title={product.title} description={product.description.slice(0, 30)} />
            <p>Price: ${product.price}</p>
            <button onClick={() => handleButtonClick(product.id)}>Click me</button>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Products;
