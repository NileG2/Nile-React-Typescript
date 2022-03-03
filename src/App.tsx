import { Route, Routes} from "react-router-dom";
import "./App.scss";
import { NavigationBar } from "./components/navbar/Navbar";
import Footer  from "./components/footer/Footer";
import Signin from "./screens/signin/Signin";
import Signup from "./screens/signup/Signup";
import ProductListing from "./screens/productListing/ProductListing";
import Cart from "./screens/cart/Cart";
import ProductDetails from "./screens/productDetails/ProductDetails";

import Test from "./screens/test/Test";
import ProfileDashboard from "./screens/profile/ProfileDashboard";
import SellerProfileDashboard from "./screens/sellerProfile/SellerProfileDashboard";
import Checkout from "./screens/checkout/Checkout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavigationBar />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/products" element={<ProductListing />}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/product/details' element={<ProductDetails/>}></Route>
        <Route path="/profile" element={<ProfileDashboard />}></Route>
        <Route path="/seller-profile" element={<SellerProfileDashboard />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        {/* testing */}
        <Route path="/test" element={<Test />}></Route>
      </Routes>
    <Footer/>
    </div>
  );
}

export default App;
