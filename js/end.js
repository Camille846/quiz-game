const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("final-score");
// const MAX_HIGH_SCORES = 5;

const mostRecentScore = localStorage.getItem("mostRecentScore");
finalScore.innerText = mostRecentScore;

// const highscores = JSON.parse(localStorage.getItem("highScores"));

// console.log(JSON.parse(localstorage.getItem("highScores")));

username.addEventListener("keyup", () =>{
    saveScoreBtn.disabled = !username.value;
})

const formBtn = document.querySelector(".enviar-btn");
// const post = document.querySelector(".post");
// const starWidget = document.querySelector(".star-widget");

formBtn.addEventListener("click", () =>{
    window.location.assign('/index.html');
})

saveHighScore = (e) =>{
    e.preventDefault();
    console.log("clicked")

    const score = {
        score: Math.floor(Math.random() * 100),
        name: username.value,
    };  
    
    // highscores.push(score);

    // highscores.sort((a,b) => b.score - a.score);
    // highscores.splice(5);

    // // console.log(highscores);
    // localStorage.setItem("highscores", JSON.stringify(highscores));
}

// Rate