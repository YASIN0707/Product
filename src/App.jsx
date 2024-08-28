import Product from './Products/Product'
import {store} from './redux/store'
import { Provider } from 'react-redux'
let App=()=>{
  return <div>
    <Provider store={store}>
   <Product/>
   </Provider>
  </div>
}
export default App