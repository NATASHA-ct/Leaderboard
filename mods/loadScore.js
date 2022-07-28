import newScore from './addScore.js';

const loadScore = () => {
  const scoreofPlayers = document.getElementById('list-container');
  scoreofPlayers.innerHTML = '';

  // getting data from API when refreshing

  const getScore = async () => {
    const request = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/e2165b80-0e97-11ed-a675-f9d6f7b44aa8/scores/',
    );

    const showDetails = await request.json();
    return showDetails.result;
  };

  // gets new leaderboard list from API after a new player is added

  getScore().then(
    (value) => {
      value.forEach((score, id) => {
        newScore(score.user, score.score, id);
      });
    },

    (error) => {
      throw error;
    },
  );
};

export default loadScore;