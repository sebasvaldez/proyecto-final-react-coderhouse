import notFound from './assets/404-not-found-2.jpg'
import './NotFound.css'

const NotFound = () => {
  return (
    <figure className='not-found'>
        <img src={notFound} alt="" />
    </figure>
  )
}

export default NotFound