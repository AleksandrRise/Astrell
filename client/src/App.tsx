import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"; 
import ResponsePage from "./pages/ResponsePage";
import QuizPage from "./pages/QuizPage";
import FlashcardsPage from "./pages/FlashcardsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/response" element={<ResponsePage />} />
      <Route path="/flashcards" element={<FlashcardsPage />} />
      <Route path="/quiz" element={<QuizPage />} />
    </Routes>
  )
}

export default App
