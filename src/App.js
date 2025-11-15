import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage/homepage';
import Productdetail from './productdetailpage/productdetail';
import Electronic from './electronicpage/electronic';
import HomeandGarden from './homeandgardenpage/homeandgarden';
import Book from './bookpage/book';
import Fashion from './fashionpage/fashion';
import CartPage from './cartpage/cart';
import { CartProvider } from './cartpage/cartcontext';
function App(){
  return(
    <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Homepage/>}/>
        <Route path = "/homeandgarden" element = {<HomeandGarden/>}/>
        <Route path = "/electronics" element = {<Electronic/>}/>
        <Route path = "/fashion" element = {<Fashion/>}/>
        <Route path = "/book" element = {<Book/>}/>
        <Route path = "/product/:productId" element = {<Productdetail/>}/>
        <Route path="/cart" element = {<CartPage/>}/>
      </Routes>
    </BrowserRouter>
    </CartProvider>
  )
}
export default App;