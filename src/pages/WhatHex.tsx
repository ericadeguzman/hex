import { useEffect, useState } from "react";
import ProjectList from "../components/ProjectList";
const getRandomColor = () => {
  const digits = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  const color = new Array(6)
    .fill("")
    .map(() => digits[Math.floor(Math.random() * digits.length)])
    .join("");
  return `#${color}`;
};

enum Result {
  Correct,
  Wrong,
}

function WhatHex() {
  const [color, setColor] = useState("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<Result | undefined>(undefined);

  const generateColors = () => {
    const actualColor = getRandomColor();
    setColor(actualColor);
    setAnswers(
      [actualColor, getRandomColor(), getRandomColor()].sort(
        () => 0.5 - Math.random()
      )
    );
  };

  useEffect(() => {
    generateColors();
  }, []);

  const handleAnswerClicked = (answer: string) => {
    if (answer === color) {
      setResult(Result.Correct);
      generateColors();
    } else {
      setResult(Result.Wrong);
    }
  };
  return (
    <div>
      <h1>what the hex?!</h1>
      <p>
        Click the correct hex code! Remember R (red) corresponds to the first 2 digits, G (green) represents the second pair of digits, and B (blue) are the last pair of digits.
      </p>
      <div className="colorBox" style={{ background: color }}></div>
      {answers.map((answer) => (
        <button
          onClick={() => handleAnswerClicked(answer)}
          key={answer}
          className="colorButton"
        >
          {answer}
        </button>
      ))}
      <div className="colorAnswers">
      {result === Result.Correct && <p className="rightAnswer">Correctamundo!</p>}
      {result === Result.Wrong && <p className="wrongAnser">Nah dawg!</p>}
      </div>
      <ProjectList />
    </div>
  );
}

export default WhatHex;
