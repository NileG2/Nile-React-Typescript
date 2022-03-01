import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Landing from "./screens/landing/Landing";
import Signin from "./screens/signin/Signin";
import Signup from "./screens/signup/Signup";
import ProductListing from "./screens/productListing/ProductListing";
import Cart from "./screens/cart/Cart";
import ProductDetails from "./screens/productDetails/ProductDetails";

import Test from "./screens/test/Test";
import ProfileDashboard from "./screens/profile/ProfileDashboard";
import SellerProfileDashboard from "./screens/sellerProfile/SellerProfileDashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/products" element={<ProductListing />}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/product/details' element={<ProductDetails/>}></Route>
        <Route path="/profile" element={<ProfileDashboard />}></Route>
        <Route path="/seller-profile" element={<SellerProfileDashboard />}></Route>
        {/* testing */}
        <Route path="/test" element={<Test />}></Route>
      </Routes>
    </div>
  );
}

export default App;
