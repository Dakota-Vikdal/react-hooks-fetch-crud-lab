import React from "react";
import QuestionItem from './QuestionItem'

function QuestionList({question, onDelete}) {
  
  const questionItem = question.map((item) => {
    return <QuestionItem key={item.id} {...item} onDelete={onDelete}/>
  })


  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionItem}</ul>
    </section>
  );
}

export default QuestionList;
