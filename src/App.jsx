import { useEffect, useState } from "react";
import Home from "./Components/Home";
import "./App.css";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Bots loaded:", data);
        setBots(data);
      })
      .catch(error => {
        console.error("Error fetching bots:", error);
      });
  }, []);

  

  function addToArmy(bot) {
    console.log("Attempting to add bot:", bot);
    if (!army.find((b) => b.id === bot.id)) {
      console.log("Bot added to army");
      setArmy([...army, bot]);
    } else {
      console.log("Bot already in army");
    }
  }

  function removeFromArmy(botId) {
    setArmy(army.filter((bot) => bot.id !== botId));
  }

  function dischargeBot(botId) {
    fetch(`http://localhost:3000/bots/${botId}`, {
      method: "DELETE",
    })
      .then(() => {
        setArmy(army.filter((bot) => bot.id !== botId));
        setBots(bots.filter((bot) => bot.id !== botId));
      })
      .catch((err) => console.error("Failed to delete bot:", err));
  }

  return (
    <div className="App">
      <h1>Bot Battlr</h1>
      <Home
        bots={bots}
        army={army}
        onBotClick={addToArmy}
        onRemove={removeFromArmy}
        onDischarge={dischargeBot}
      />
    </div>
  );
}

export default App;