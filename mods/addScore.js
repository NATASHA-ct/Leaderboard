// module for adding a new score

const newScore=(user,score,id) => {

    const listofPlayers = document.getElementById("list-container");

    const player = document.createElement("li");
    player.innerHTML = `
                     <p class="playerName">${user}:</p>
                     <p class="playerScore">${score}</p>
                   `;
    listofPlayers.appendChild(player);
};

export default newScore;