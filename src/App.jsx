import Quiz from "./components/Quiz/Quiz";
import { useEffect, useState } from "react";

function App() {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    getQuestions();
  }, []);

  const getQuestions = async () => {
    try {
      const response = await fetch(
         "https://644982a3e7eb3378ca4ba471.mockapi.io/questions"
        );
      const questionsRespons = await response.json();
      console.log(questionsRespons);
      setQuestions(questionsRespons);
    } catch (error) {
      console.log(error);
    }
  };

  return (questions.length && <Quiz questions={questions} />);
}

export default App;
