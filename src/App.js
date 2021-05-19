import './App.css';
import {useEffect} from 'react'
import {Cart,Login,Products,Wishlist,ProductDetail} from './view'
import {Navbar} from './component'
import {useProduct} from './hook'
import { allJackets } from './data/productData';
import {Routes,Route} from 'react-router-dom'

function App() {

  // const [route,setRoute] = useState('home')
  const {setProductList} = useProduct();

  useEffect(() => {
      setProductList(allJackets)
  }, [setProductList])
  
  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/products" element={<Products/>}/>
          <Route path="/products/:productId" element={<ProductDetail/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/wishlist" element={<Wishlist/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
    </div>
  );
}

export default App;
