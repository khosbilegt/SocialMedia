import { Register } from "./pages/Register";
import { Redirect } from "./pages/Redirect";
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Redirect />}/>
          <Route path="/register" element={<Register />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;