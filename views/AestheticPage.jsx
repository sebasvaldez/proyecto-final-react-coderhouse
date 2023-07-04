import {useState, useEffect} from 'react';
import CardImages from '../src/components/CardImages/CardImages';
import {  filterCategory } from '../asyncMock';

const AestheticPage = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
   
    filterCategory("aesthetic").then((res) => setProducts(res));
  }, []);


  return <div className='imgContainer'>
    <CardImages products={products} />
  </div>;
  // return <div>
  //   <h1>Aesthetic Page</h1>
  // </div>
};

export default AestheticPage;
