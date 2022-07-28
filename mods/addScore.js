// module for adding a new score

const newScore = (user, score) => {
  const listofPlayers = document.getElementById('list-container');

  const player = document.createElement('li');
  player.innerHTML = `
                    <div class="playerDetails">
                     <p class="playerName">${user}:</p>
                     <p class="playerScore">${score}</p>
                    </div>
                   `;
  listofPlayers.appendChild(player);
};

export default newScore;