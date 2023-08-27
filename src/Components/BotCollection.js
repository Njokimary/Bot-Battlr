import React, { useEffect, useState } from 'react';
import "./BotCollection.css";

function BotCollection() {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/bots")
      .then(response => response.json())
      .then(data => setBots(data));
  }, []);

  return (
    <div className="container">
      <h2>Bot <span>Collection</span></h2>
      <div className="bot-card-container">
        {bots.map(bot => (
          <div className="bot-card" key={bot.id}>
            <img src={bot.avatar_url} alt={bot.name} />
            <h3>{bot.name}</h3>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <p>Class: {bot.bot_class}</p>
            {/* <p>Catchphrase: {bot.catchphrase}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
