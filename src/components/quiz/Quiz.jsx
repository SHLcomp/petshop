import React, { useState, useContext } from "react";
import { myCon } from "../../context/Context";
import quizData from "../../data/quiz";
import "./Quiz.scss";

const Quiz = () => {
  const { quiz } = useContext(myCon);

  const [answers, setAnswers] = useState(Array(quizData.length).fill(null));
  const [result, setResult] = useState("");

  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    const chosenPet = quiz(answers);
    setResult(chosenPet);
  };

  return (
    <div className="quiz" id="quiz">
      <h1>Find Your Perfect Pet</h1>
      <div className="cont">
        {quizData.map((q, i) => (
          <div key={i} className="question">
            <h3>{q.question}</h3>
            <div className="ans">
              {q.type === "yesno" ? (
                <>
                  <label>
                    <input
                      type="radio"
                      name={`q${i}`}
                      checked={answers[i] === true}
                      onChange={() => handleChange(i, true)}
                    />
                    Yes
                  </label>
                  <label>
                    <input
                      type="radio"
                      name={`q${i}`}
                      checked={answers[i] === false}
                      onChange={() => handleChange(i, false)}
                    />
                    No
                  </label>
                </>
              ) : (
                q.ans.map((option, idx) => (
                  <label key={idx}>
                    <input
                      type="radio"
                      name={`q${i}`}
                      checked={answers[i] === idx}
                      onChange={() => handleChange(i, idx)}
                    />
                    {option}
                  </label>
                ))
              )}
            </div>
          </div>
        ))}
      </div>

      <h3 className="cta" onClick={handleSubmit}>Submit</h3>

      {result && (
        <div className="result">
          <h2>The pet that is most suitable  is:</h2>
          <h2>{result}</h2>
        </div>
      )}
    </div>
  );
};

export default Quiz;
