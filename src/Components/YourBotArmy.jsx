

function YourBotArmy({ army, onRemove, onDischarge }) {
  return (
    <div className="army-container">
      <h2>Your Bot Army</h2>
      <div className="bot-collection">
        {army.map((bot) => (
          <div key={bot.id} className="bot-card">
            <img src={bot.avatar_url} alt={bot.name} />
            <h3>{bot.name}</h3>
            <button onClick={() => onRemove(bot.id)}>Release</button>
            <button style= {{ color: 'red' }} onClick={() => onDischarge(bot.id)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
