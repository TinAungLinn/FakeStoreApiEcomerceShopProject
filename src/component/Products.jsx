import React from 'react'
import { useContextCustom } from '../Context/StateContext'
import Product from './Product';

const Products = () => {




  

    const {state: {products}} = useContextCustom();






    

  return (
    <div className=' flex flex-wrap gap-10 justify-center'>
      {products?.map(pd => {
        return(
            <Product key={pd.id} {...pd}/>
        )
      })}
    </div>
  )
}

export default Products
