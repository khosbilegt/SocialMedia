import { Register } from "./pages/Register"
import { Login } from "./pages/Login"
import { Error } from "./pages/Error"
import { Home } from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Login />}/>
          <Route path="login" element={<Login />}/>
          <Route path="register" element={<Register />}/>
          <Route path="home" element={<Home />}/>
          <Route path="*" element={<Error />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
