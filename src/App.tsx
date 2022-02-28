import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Landing from "./screens/landing/Landing";
import Signin from "./screens/signin/Signin";
import Signup from "./screens/signup/Signup";
import Test from "./screens/test/Test";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        {/* testing */}
        <Route path="/test" element={<Test />}></Route>
      </Routes>
    </div>
  );
}

export default App;
