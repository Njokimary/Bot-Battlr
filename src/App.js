import React, { useState } from 'react';
import BotCollection from './Components/BotCollection';
import YourBotArmy from './Components/YourBotArmy';
import './App.css';

function App() {
  const [enlistedBots, setEnlistedBots] = useState([]);

  const enlistBot = (bot) => {
    if (!enlistedBots.some(b => b.id === bot.id)) {
      setEnlistedBots([...enlistedBots, bot]);
    }
  };

  return (
    <div className="app-container">
    
      <main>
        <section className="bot-collection">
          <BotCollection enlistBot={enlistBot} enlistedBots={enlistedBots} />
        </section>
        <section className="your-bot-army">
          <YourBotArmy enlistedBots={enlistedBots} setEnlistedBots={setEnlistedBots} />
        </section>
      </main>
    </div>
  );
}

export default App;
