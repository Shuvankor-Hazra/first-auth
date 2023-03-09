import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Reg from "./components/Reg/Reg";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Service from "./components/Service/Service";
import SignIn from "./components/SignIn/SignIn";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/service"
          element={
            <RequireAuth>
              <Service />
            </RequireAuth>
          }
        />
        <Route path="/reg" element={<Reg />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
