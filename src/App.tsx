import { Route, Routes} from "react-router-dom";
import "./App.scss";
import { NavigationBar } from "./components/navbar/Navbar";
import Footer  from "./components/footer/Footer";
import Signin from "./screens/signin/Signin";
import Signup from "./screens/signup/Signup";
import Test from "./screens/test/Test";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavigationBar />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        {/* testing */}
        <Route path="/test" element={<Test />}></Route>
      </Routes>
    <Footer/>
    </div>
  );
}

export default App;
