import { useState, useEffect } from 'react'

import './Spinner.css'
const Spinner = () => {
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    const timer = ()=>{
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 1000); 
      return clearTimeout(timer)
    }
  }, [])


  return (

  <div>
    {
      loading ? (


        <div className="spinner"> </div>
      ): null
    }


  </div>
    
  )
}

export default Spinner