const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById("question-counter");
const scoreText = document.getElementById("score");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "São direitos reprodutivos, EXCETO:",
        choice1: "Direito de exercer a sexualidade e a reprodução livre de discriminação",
        choice2: "Direito à informação, aos meios, métodos e técnicas para ter ou não filhos",
        choice3: "Direito ao sexo seguro para prevenção da gravidez indesejada e das ISTs.",
        choice4: "Direito de decidir livre e responsavelmente sobre o número, o espaçamento e se quer ou não ter filhos",
        answer: 3
    },
    {
        question: "Com relação a contracepção e adolescência, qual alternativa abaixo representa um método recomendado a adolescentes?",
        choice1: "Implantes",
        choice2: "Injetáveis ",
        choice3: "D.I.U",
        choice4: "Preservativos e pílulas",
        answer: 4
    },
    {
        question: "São princípios éticos orientadores das práticas profissionais no planejamento familiar, exceto:",
        choice1: "Respeito aos direitos e á autonomia sexual e reprodutiva de todos os sujeitos",
        choice2: "Promoção da iniquidade de gênero, equidade ético-racial e da injustiça social",
        choice3: "Diversidade e respeito às diferenças culturais, de estilo de vida, de orientação sexual e outras",
        choice4: "Integralidade e humanização como princípios das práticas de saúde e organização dos processos de trabalho",
        answer: 2
    },
    {
        question: "Com relação a prevenção de Infecções Sexualmente Transmissíveis, qual alternativa abaixo representa um método eficaz?",
        choice1: "D.I.U",
        choice2: "Diafragma",
        choice3: "Preservativos femininos e masculinos",
        choice4: "Anel vaginal",
        answer: 3
    },
    {
        question: "O que é planejamento familiar? ",
        choice1: "Conjunto de ações que possibilitam à pessoa escolher livre e responsavelmente sobre o número, o espaçamento e se quer ou não ter filhos.",
        choice2: "Conjunto de ações que possibilitam a identificação das necessidades de saúde do Idoso nem sempre valorizadas",
        choice3: "Conjunto de ações referentes ao controle de natalidade com a intenção de diminuir ou aumentar a população",
        choice4: "Conjunto de ações que possibilitam práticas políticas voltadas a legalização do aborto.",
        answer: 1
    }
];

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

startGame = () =>{
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    // console.log(availableQuestions);
    getNewQuestion();
}


getNewQuestion = () => {

    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign('/end.html');
    }

    questionCounter++;
    questionCounterText.innerText = questionCounter + ' / ' + MAX_QUESTIONS;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;


    choices.forEach( choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach( choice => {
    choice.addEventListener('click', e =>{
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        let classToApply = 'incorrect';
        if (selectedAnswer == currentQuestion.answer) {
            classToApply = 'correct';
        }

        if (classToApply === 'correct') {
            incrementScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add(classToApply);
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 2000);
    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};

startGame();