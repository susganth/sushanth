import React, { useState } from 'react';
import './VotingApp.css';

const VotingApp = () => {
  const [options, setOptions] = useState([
    { id: 1, name: 'sushanth 0', votes: 0 },
    { id: 2, name: 'Option 2', votes: 0 },
    { id: 3, name: 'Option 3', votes: 0 },
    { id: 4, name: 'Option 4', votes: 0 },
  ]);

  const handleVote = (id) => {
    setOptions(options.map(option => 
      option.id === id ? { ...option, votes: option.votes + 1 } : option
    ));
  };

  const totalVotes = options.reduce((sum, option) => sum + option.votes, 0);

  return (
    <div className="voting-app">
      <h1>Voting App</h1>
      <div className="options-list">
        {options.map(option => (
          <div key={option.id} className="option">
            <span className="option-name">{option.name}</span>
            <span className="vote-count">{option.votes} votes</span>
            <button onClick={() => handleVote(option.id)}>Vote</button>
          </div>
        ))}
      </div>
      <div className="total-votes">
        Total votes: {totalVotes}
      </div>
    </div>
  );
};

export default VotingApp;