import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("₹ 0");

  const data = [
    {
        id: 1,
        question: "Who is known as the father of Indian IT industry?",
        answers: [
            { text: "Azim Premji", correct: false },
            { text: "N. R. Narayana Murthy", correct: true },
            { text: "Sundar Pichai", correct: false },
            { text: "Satya Nadella", correct: false },
        ],
    },
    {
        id: 2,
        question: "In which year did India win its first Cricket World Cup?",
        answers: [
            { text: "1983", correct: true },
            { text: "1987", correct: false },
            { text: "2003", correct: false },
            { text: "2011", correct: false },
        ],
    },
    {
        id: 3,
        question: "Who was the first Prime Minister of India?",
        answers: [
            { text: "Mahatma Gandhi", correct: false },
            { text: "Jawaharlal Nehru", correct: true },
            { text: "Indira Gandhi", correct: false },
            { text: "Sardar Vallabhbhai Patel", correct: false },
        ],
    },
    {
        id: 4,
        question: "Which Indian city is known as the Silicon Valley of India?",
        answers: [
            { text: "Mumbai", correct: false },
            { text: "Chennai", correct: false },
            { text: "Bengaluru", correct: true },
            { text: "Hyderabad", correct: false },
        ],
    },
    {
        id: 5,
        question: "Who wrote the Indian national anthem?",
        answers: [
            { text: "Rabindranath Tagore", correct: true },
            { text: "Bankim Chandra Chatterjee", correct: false },
            { text: "Sarojini Naidu", correct: false },
            { text: "Mahatma Gandhi", correct: false },
        ],
    },
    {
        id: 6,
        question: "What is the time complexity of binary search algorithm?",
        answers: [
            { text: "O(n)", correct: false },
            { text: "O(n log n)", correct: false },
            { text: "O(log n)", correct: true },
            { text: "O(n^2)", correct: false },
        ],
    },
    {
        id: 7,
        question: "Who was the first Indian to win a Nobel Prize?",
        answers: [
            { text: "C. V. Raman", correct: false },
            { text: "Rabindranath Tagore", correct: true },
            { text: "Mother Teresa", correct: false },
            { text: "Amartya Sen", correct: false },
        ],
    },
    {
        id: 8,
        question: "Which Indian cricketer is known as the 'Little Master'?",
        answers: [
            { text: "Virat Kohli", correct: false },
            { text: "Sunil Gavaskar", correct: true },
            { text: "Kapil Dev", correct: false },
            { text: "Sachin Tendulkar", correct: false },
        ],
    },
    {
        id: 9,
        question: "In which year was the Indian Constitution adopted?",
        answers: [
            { text: "1947", correct: false },
            { text: "1949", correct: true },
            { text: "1950", correct: false },
            { text: "1952", correct: false },
        ],
    },
    {
        id: 10,
        question: "Who is known as the Missile Man of India?",
        answers: [
            { text: "Vikram Sarabhai", correct: false },
            { text: "A. P. J. Abdul Kalam", correct: true },
            { text: "Homi J. Bhabha", correct: false },
            { text: "Satish Dhawan", correct: false },
        ],
    },
    {
        id: 11,
        question: "What does 'IPL' stand for in the context of Indian cricket?",
        answers: [
            { text: "Indian Professional League", correct: false },
            { text: "International Premier League", correct: false },
            { text: "Indian Premier League", correct: true },
            { text: "Indian Players League", correct: false },
        ],
    },
    {
        id: 12,
        question: "Which programming language was developed by James Gosling at Sun Microsystems?",
        answers: [
            { text: "Python", correct: false },
            { text: "Java", correct: true },
            { text: "C++", correct: false },
            { text: "Ruby", correct: false },
        ],
    },
    {
        id: 13,
        question: "Which Indian mathematician is known for his contributions to number theory and infinity?",
        answers: [
            { text: "Srinivasa Ramanujan", correct: true },
            { text: "Aryabhata", correct: false },
            { text: "Bhaskara II", correct: false },
            { text: "C. R. Rao", correct: false },
        ],
    },
    {
        id: 14,
        question: "Which Mughal emperor commissioned the construction of the Taj Mahal?",
        answers: [
            { text: "Akbar", correct: false },
            { text: "Shah Jahan", correct: true },
            { text: "Aurangzeb", correct: false },
            { text: "Jahangir", correct: false },
        ],
    },
    {
        id: 15,
        question: "Who is the author of the book 'A Brief History of Time'?",
        answers: [
            { text: "Albert Einstein", correct: false },
            { text: "Isaac Newton", correct: false },
            { text: "Stephen Hawking", correct: true },
            { text: "Carl Sagan", correct: false },
        ],
    },
];


const moneyPyramid = useMemo(
  () =>
    [
      { id: 1, amount: "₹ 10,000" },
      { id: 2, amount: "₹ 20,000" },
      { id: 3, amount: "₹ 30,000" },
      { id: 4, amount: "₹ 50,000" },
      { id: 5, amount: "₹ 1,00,000" },
      { id: 6, amount: "₹ 2,00,000" },
      { id: 7, amount: "₹ 4,00,000" },
      { id: 8, amount: "₹ 8,00,000" },
      { id: 9, amount: "₹ 16,00,000" },
      { id: 10, amount: "₹ 32,00,000" },
      { id: 11, amount: "₹ 64,00,000" },
      { id: 12, amount: "₹ 1,25,00,000" },
      { id: 13, amount: "₹ 2,50,00,000" },
      { id: 14, amount: "₹ 5,00,00,000" },
      { id: 15, amount: "₹ 10,00,00,000" },
    ].reverse(),
  []
);


  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;