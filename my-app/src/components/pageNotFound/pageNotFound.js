import React from 'react'
import './pageNotFound.css'
import NotFoundImage from './notFound.jpg'

function PageNotFound() {
  return (
    <div className='page-not-found'>
      {/* <h1>Página não encontrada</h1> */}
      <img src={NotFoundImage}/>
    </div>
  )
}

export default PageNotFound