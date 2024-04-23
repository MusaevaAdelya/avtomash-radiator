import { useParams } from 'react-router-dom';
import Carousel from '../components/Carousel';

function ProductPage() {
    const { id } = useParams();
    
    return <div>
      <p>Product ID: {id}</p>

      <Carousel/>
    </div>;
  }

export default ProductPage;
