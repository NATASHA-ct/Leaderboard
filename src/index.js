import './index.css';
import submitScore from '../mods/submitScore';
import loadScore from '../mods/loadScore';


// Loading the leaderboard players and scores
loadScore();


// refreshing leaderboard list after button is clicked

const refreshButton = document.querySelector(".refresh")

refreshButton.addEventListener ("click", () =>{
    loadScore();
});


// submitting a new player and scores after clicking submit button

document.getElementById("submit").addEventListener ("click" , () => {
    const user = document.getElementById("user").value;
    const score = document.getElementById("score").value;
    submitScore(user,score);
})

