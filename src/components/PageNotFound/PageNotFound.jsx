import notFound from './assets/404-not-found-2.jpg'
import './NotFound.css'

const PageNotFound = () => {
  return (
    <figure className='not-found'>
        <img src={notFound} alt="" />
    </figure>
  )
}

export default PageNotFound