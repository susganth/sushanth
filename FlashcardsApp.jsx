import React, { useState } from 'react';
import './FlashcardsApp.css';

const FlashcardsApp = () => {
  const [cards] = useState([
    { id: 1, question: "What is the capital of France?", answer: "Paris" },
    { id: 2, question: "What is 2 + 2?", answer: "4" },
    { id: 3, question: "Who wrote 'Romeo and Juliet'?", answer: "William Shakespeare" },
    { id: 4, question: "What is the largest planet in our solar system?", answer: "Jupiter" },
  ]);

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
    setIsFlipped(false);
  };

  const handlePrevious = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    setIsFlipped(false);
  };

  return (
    <div className="flashcards-app">
      <h1>Flashcards App</h1>
      <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
        <div className="card-inner">
          <div className="card-front">
            <p>{cards[currentCardIndex].question}</p>
          </div>
          <div className="card-back">
            <p>{cards[currentCardIndex].answer}</p>
          </div>
        </div>
      </div>
      <div className="navigation">
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default FlashcardsApp;