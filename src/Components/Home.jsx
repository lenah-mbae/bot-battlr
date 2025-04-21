
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

function Home({ bots, army, onBotClick, onRemove, onDischarge }) {
  return (
    <div className="home-container">
      <YourBotArmy army={army} onRemove={onRemove} onDischarge={onDischarge} />
      <BotCollection bots={bots} onBotClick={onBotClick} />
    </div>
  );
}

export default Home;
