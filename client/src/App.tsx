import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"; 
import ResponsePage from "./pages/ResponsePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/response" element={<ResponsePage />} />
    </Routes>
  )
}

export default App
