import React, { useEffect, useState } from 'react';

function BotCollection() {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/bots")
      .then(response => response.json())
      .then(data => setBots(data));
  }, []);

  return (
    <div>
      <h2>Bot Collection</h2>
      {bots.map(bot => (
        <div key={bot.id}>
          <img src={bot.avatar_url} alt={bot.name} /> {/* Display image */}
          <h3>{bot.name}</h3> {/* Display title */}
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          <p>Class: {bot.bot_class}</p>
          <p>Catchphrase: {bot.catchphrase}</p>
        </div>
      ))}
    </div>
  );
}

export default BotCollection;
