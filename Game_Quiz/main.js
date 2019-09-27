const startBtn = document.getElementById('start-btn');
const questionContainer = document.getElementById('question-container');
let stuffledQuestion;
let currectQuestionIndex;
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-button');
const questions = [
    {
        question: 'What is 2 + 2',
        answer: [
            {text: '4', correct: true},
            {text: '22', correct: false},
            {text: '8', correct: false},
            {text: '5', correct: false}
        ]
    }
]


startBtn.addEventListener('click', startGame);

function startGame(){
    startBtn.classList.add('hide');
    stuffledQuestion = questions.sort(()=> Math.random() - .5);
    currectQuestionIndex = 0;
    questionContainer.classList.remove('hide');
    setNextQuestion()
};

function setNextQuestion(){
    showQuestion(stuffledQuestion[currectQuestionIndex]);
};

function selectAnswer(){

};

function showQuestion(question){
    questionElement.innerHTML = question.question;
}