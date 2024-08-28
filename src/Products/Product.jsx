import { useDispatch, useSelector } from "react-redux"
import { incraction,decraction } from "../redux/product/product.action"

let Product=()=>{

    let dispatch=useDispatch()
    let Product=useSelector((state)=>{
        return state
    })

   let decrHandler=()=>{
       dispatch(decraction())
    }
    
   let increHandler=()=>{
        dispatch(incraction())
    }

    return <div>
       <div className="container mt-5">
        <div className="row">
            <table className="table">
                <thead className="bg-primary">
                    <th>Name</th>
                    <th>image</th>
                    <th>Qty</th>
                    <th>price</th>
                </thead>
                <tbody className="stripped">
                    <tr>
                        <td>{Product.name}</td>
                        <td><img src={Product.image} width={80} /></td>
                        <td><i className="fa fa-square-minus" onClick={decrHandler}></i>{Product.qty}<i className="fa fa-circle-plus" onClick={increHandler}></i></td>
                       
                        <td className="fa-solid fa-indian-rupee-sign">{(Product.price*Product.qty).toLocaleString('en-IN')}</td>
                    </tr>
                </tbody>
            </table>
        </div>
       </div>
        <hr/>
      {/*   <pre>{JSON.stringify(Product)}</pre> */}
       {/*  <button onClick={decrHandler}>-</button>
        <button onClick={increHandler}>+</button> */}
    </div>
}
export default Product