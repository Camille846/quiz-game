let shuffleQuestions, currentQuestionIndex;
let counter = 0;

const questions = [
    {
        question: 'consectetur adipiscing elit?',
        answers: [
            { text:'2A', correct: true },
            { text:'4A', correct: false }, 
            { text:'8A', correct: false }, 
            { text:'10A', correct: false }
        ]
    },
    {
        question: 'sed do eiusmod tempor incididunt?',
        answers: [
            { text:'12B', correct: true }, 
            { text:'14B', correct: false }, 
            { text:'16B', correct: false }, 
            { text:'18B', correct: false }
        ]
    },
    {
        question: 'ut labore et dolore magna aliqua?',
        answers: [
            { text:'20C', correct: true }, 
            { text:'22C', correct: false }, 
            { text:'24C', correct: false }, 
            { text:'26C', correct: false }
        ]
    },
    {
        question: 'quis nostrud exercitation ullamco?',
        answers: [
            { text:'28D', correct: true }, 
            { text:'30D', correct: false }, 
            { text:'32D', correct: false }, 
            { text:'34D', correct: false }
        ]
    },
    
]

const quiz = document.querySelector(".quiz__container");
const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerBtn = document.getElementById("answers-btn");
const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");

startBtn.addEventListener("click", startGame);
nextBtn.addEventListener("click", () =>{
    currentQuestionIndex++;
    setNextQuestion();
});

function startGame(){
    startBtn.classList.add("hide");
    questionContainer.classList.remove("hide");
    nextBtn.classList.remove("hide");
    shuffleQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    setNextQuestion()
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffleQuestions[currentQuestionIndex]);
}

function showQuestion(question){
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text;
        button.classList.add('btn');

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }

        button.addEventListener('click', selectAnswer)
        answerBtn.appendChild(button);
    });
}

function resetState(){
    clearStatusClass(document.body);
    nextBtn.classList.add('hide')
    while (answerBtn.firstChild) {
        answerBtn.removeChild(answerBtn.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const correct = selectedBtn.dataset.correct;

    setStatusClass(document.body, correct);
    Array.from(answerBtn.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })

    if (shuffleQuestions.length > currentQuestionIndex + 1) {
        nextBtn.classList.remove("hide");
    } else{
        clearStatusClass(document.body);
        startBtn.classList.remove("hide");
        startBtn.innerText = "Refazer";
        questionContainer.innerHTML = '<h2 class="score"> Você acertou ' + counter + ' de ' + (questions.length) + ' questões.</h2>';
    }

}

function setStatusClass(element, correct){
    clearStatusClass(element);
    if(correct){
        element.classList.add('correct');
        counter++;
    } else{
        element.classList.add('wrong');
    }
}

function clearStatusClass(element){
    element.classList.remove('correct');
    element.classList.remove('wrong');
}
