import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"; 
import DashboardPage from "./pages/DashboardPage";
import QuizPage from "./pages/QuizPage";
import FlashcardsPage from "./pages/FlashcardsPage";
import { ErrorMessageContext } from "./shared/utils/ErrorMessageContext";
import { useContext, useEffect } from "react";
import { errorMessageTimer } from "./shared/utils/errorMessageTimer";

function App() {

  const [errorText, setErrorText] = useContext(ErrorMessageContext)
  
  useEffect(() => {
      errorMessageTimer(errorText, setErrorText)
  }, [errorText])

  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/flashcards" element={<FlashcardsPage />} />
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
  )
}

export default App
