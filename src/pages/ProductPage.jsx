import { useParams } from 'react-router-dom';

function ProductPage() {
    const { id } = useParams();
    
    return <div>Product ID: {id}</div>;
  }

export default ProductPage;
