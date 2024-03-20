import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [question, setQuestion] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/questions')
    .then(response => response.json())
    .then((question) => setQuestion(question))
  },[])

  function handleSubmit(newQuestion) {
    setQuestion([...question, newQuestion])
  }

  function handleDelete(idToDelete) {
    const updatedQuestions = question.filter((item) => item.id !== idToDelete)
    setQuestion(updatedQuestions)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? 
        <QuestionForm question={question} onSubmit={handleSubmit} /> : 
        <QuestionList question={question} onDelete={handleDelete}/>}
    </main>
  );
}

export default App;
