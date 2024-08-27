import React from 'react'
import { incraction,decraction } from '../redux/product/product.action'
import { useDispatch, useSelector } from 'react-redux'
function Product() {

    let dispatch = useDispatch()

    let Product = useSelector((state)=>{
        return state
    })


    let increHandler =()=>{
        dispatch(incraction())
    }

    let decrHandler = ()=>{
        dispatch(decraction())
    }

  return (
    <div>
        <div className="container mt-5">
            <div className="row">
                <table className='table table-bordered'>
                    <thead className='bg-secondary'>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Qty</th>
                        <th>Price</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{Product.name}</td>
                            <td><img src={Product.image} alt="" width={80}/></td>
                            <td><i className='fa fa-square-minus' onClick={decrHandler}></i>{Product.qty}<i className='fa fa-circle-plus' onClick={increHandler}></i></td>
                            <td>{(Product.price*Product.qty).toLocaleString('en-IN')}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        {/* <pre>{JSON.stringify(Product.qty)}</pre>
        <button onClick={decrHandler}>-</button>{Product.qty}
        <button onClick={increHandler}>+</button> */}
    </div>
  )
}

export default Product