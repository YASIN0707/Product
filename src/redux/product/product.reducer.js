import {INCR,DECR} from './product.action'
let initialState={
  name:'Iphone 16pro max',
  image:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369818',
  qty:1,
  price:100000
}
let productReducer=(state = initialState,action)=>{
      switch(action.type){
          case INCR:
            return{...state,qty:state.qty+1}
          case DECR:
            return{...state,qty:state.qty-1}
          default:
            return state
      }
}
export {productReducer}