import{useState, useEffect} from 'react'
import CardImages from '../src/components/CardImages/CardImages'
import { filterCategory } from '../asyncMock'



const SnacksPage = () => {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    filterCategory("snacks").then((res) => setProducts(res));
  },[])


  return (
    <div className='imgContainer'>
      <CardImages products={products} />
    </div>
  )
}

export default SnacksPage