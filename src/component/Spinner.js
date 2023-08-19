// import React, { Component } from 'react'
import spin_loading from '../image/loading.gif'

const Spinner = () => {
  return (
    <div className='text-center'>
      <img src={spin_loading} alt='spinner' height={100} width={100} />
    </div>
  )
}

export default Spinner