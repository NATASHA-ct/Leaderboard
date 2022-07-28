import loadScore from "./loadScore";

const submitScore = (user,score) => {
     if (user||score !==""){
        const updateAPI = async () => {
          const request = await fetch(
            "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/e2165b80-0e97-11ed-a675-f9d6f7b44aa8/scores/" ,
          
          {
            method: 'POST',
            body: JSON.stringify({
            user: `${user}`,
            score,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        },
      );
      return request.status;
    };
    updateAPI()
      .then((res) => res)
      .then(() => {
        loadScore();
      });
  }
};

export default submitScore;