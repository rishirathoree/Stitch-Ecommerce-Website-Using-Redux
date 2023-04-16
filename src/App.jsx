import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Product from "./pages/Productdisplay"
import Loginpage from "./pages/Loginpage"
import Category from "./pages/Category"
import Tshirts from "./pages/categories/Tshirts"
import Shirts from "./pages/categories/Shirts"
import Jeans from "./pages/categories/Jeans"
import Hoodies from "./pages/categories/Hoodies"
import Shoes from "./pages/categories/Shoes"
import Jackets from "./pages/categories/Jackets"
import Pagination from "./pages/categories/Paginationtest"
import Pagenotfound from "./pages/Pagenotfound"

function App() {

  return (
    <>
<BrowserRouter>
<Navbar />
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/Cart" element={<Cart />} />
  <Route path="/Login" element={<Loginpage />} />
  <Route path="/Category" element={<Category />} />
  <Route path="/:category/:name" element={<Product />} />
  <Route path="/category/tshirts" element={<Tshirts />} />
  <Route path="/category/Shirts" element={<Shirts />} />
  <Route path="/category/Jeans" element={<Jeans />} />
  <Route path="/category/Hoodies" element={<Hoodies />} />
  <Route path="/category/Shoes" element={<Shoes />} />
  <Route path="/category/Jackets" element={<Jackets />} />
  <Route path="Pagination" element={<Pagination />} />
  <Route path="*" element={<Pagenotfound />} />
</Routes>
<Footer />
</BrowserRouter>
    </>
  )
}

export default App
