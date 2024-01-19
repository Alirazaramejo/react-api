import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Spin, Alert } from 'antd'; // Import Spin and Alert if not imported
import axios from 'axios';

export default function SinglePage() {
  const params = useParams();
  const [products, setProducts] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => {
        setProducts([res.data]); // Wrap the single product in an array
        setLoading(false); // Set loading to false after successful data fetch
      })
      .catch((err) => {
        setError(err); // Set error state in case of an error
        setLoading(false); // Set loading to false in case of an error
        console.log(err);
      });
  }, [params.id]); // Add params.id to the dependency array



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
      <div style={{ display: 'flex', justifyContent : 'center', flexWrap: 'wrap' }}>
        {products.map(product => (
          <Card
            key={product.id}
            hoverable
            style={{ width: 210, margin: '10px' }}
            cover={<img alt={product.title} src={product.image} />}
          >
            <Card.Meta title={product.title} description={product.description.slice(0, 30)} />
            <p>Price: ${product.price}</p>
           
          </Card>
        ))}
      </div>
    </div>
  );
}
