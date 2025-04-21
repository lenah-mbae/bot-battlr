function BotCollection({ bots, onBotClick }) {
  return (
    <div className="bot-collection">
      <h2>All Bots</h2>
      {bots.map((bot) => (
        <div
          key={bot.id}
          className="bot-card"
          onClick={() => onBotClick(bot)}
          style={{ cursor: "pointer" }}
        >
          <img src={bot.avatar_url} alt={bot.name} />
          <h3>{bot.name}</h3>
          <p>Class: {bot.bot_class}</p>
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
        </div>
      ))}
    </div>
  );
}

export default BotCollection;

