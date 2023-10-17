const currentScore = document.querySelector(".gameScore")
const startbtnGame = document.querySelector("#btn")
const nextbtn = document.querySelector('#next')
const restart = document.querySelector("#restart")
const gridItems = document.querySelectorAll(".grid-item")
const question = document.querySelector("#question")
const winPopup = document.getElementById('winPopup');
const closePopup = document.getElementById('closePopup');
const winConditionScore = 3;

let userScore = 0
let round 
let playerWinsTheGame = false;

console.log(question)
question.style.visibility = "hidden"

gridItems.forEach(gridItem => {
    gridItem.style.visibility = "hidden"
    gridItem.addEventListener('click', select)
})

nextbtn.style.visibility = "hidden"

// console.log(restart)
function checkWinConditions(){
    return userScore >= winConditionScore;
}
function startGame(){
    round = 0
    userScore = 0
    currentScore.textContent = `${userScore}`
    question.style.visibility = "visible"
    nextbtn.style.visibility = "visible"
    gridItems.forEach(gridItem => gridItem.style.visibility = "visible")
        playRound(round);
      }
function nextRound(){
    if(round >= 3 ){
        nextbtn.style.visibility = 'hidden'
        restart.style.visibility = 'visible' 
        return;
    } else {
        gridItems.forEach(gridItem => gridItem.style.backgroundColor = 'rgba(180, 33, 65, 0.975)');
        round++;
        playRound(round);

        // Check win conditions after each round
        if (checkWinConditions()) {
            playerWinsTheGame = true;
            showWinPopup();
        }
    }
}

startbtnGame.addEventListener("click", startGame)
nextbtn.addEventListener('click', nextRound)

restart.addEventListener('click', restartGame)
restart.style.visibility = "hidden"
function restartGame(){
    restart.style.visibility = "hidden"
    question.style.visibility = "hidden"
    gridItems.forEach(gridItem => {
        gridItem.style.visibility = "hidden"
        gridItem.style.backgroundColor = 'rgba(180, 33, 65, 0.975)'
});
}
const player = {
    null: 'black',
    '1':'answer'
};
const questionArray = [
{
    question: "Which of the following is a valid CSS property to change color?",
    answers:[
        "font-color: #25555;",
        "text-format: blue;",
        "color: magenta;",
        "text-color: aqua;"
    ],
    correctAnswer: "color: magenta;"
},
{
    question: "What is the primary purpose of JavaScript?",
    answers:[
        "Defining web page structure",
        "Styling web pages",
        "Creating interactive web content",
        "Maniging database"
    ],
    correctAnswer: "Creating interactive web content"
},
{
    question: "numbers = [22,13,34,5,9] sum = 0 for number in numbers: sum += numbers print(sum)",
    answers:[
        "83",
        "15",
        "89",
        "103"
    ],
    correctAnswer: "83"
},
{   
    question: "What is correct way to comment out in HTML?",
    answers: [
        "| This is the correct way to comment out in HTML |",
        "// This is the correct way to coment out in HTML",
        " <== This is the correct to comment out in HTML ==> ",
        "<!--This is the correct way to comment out in HTML-->"
    ],
    correctAnswer:"<!--This is the correct way to comment out in HTML-->"
    
},
];

// let playerHealth = 100;
// const maxHealth =  100;

// function updateHealthBar(){
//     const healthBar = document.getElementBy("health");
//     const heathPercentage = (playerHealth / maxHealth) * 100;
//     healthBar.style.width = healthPercentage + "%";

//     if(healthPrecentage <= 25){
//         healthBar.style.background = "red";
//     } else {
//         healthBar.style.background = "green";
//     }
// } 
// function takeDamge(damageAmount) {
//     playerHealth -= damageAmount;
//     is (playerHealth < 0) {
//         playerHealth = 0;
//     }
//     updateHealthBar();
// }
// question.innerHTML = questionArray[0].question
    // for (let i = 0; i < gridItems.length; i++) {
        //     gridItems[i].textContent = questionArray[0].answers[i];
        //     gridItems[i].addEventListener('click', select);
        
        // }
        // function select(event) {
            //     console.log('click')
            //     const clickedItem = event.target;
            //     console.log(clickedItem)
            //     if(clickedItem.innerHTML === questionArray[0].correctanswer) {
                
                //         console.log('correct')
                //         event.target.style.background = 'green'
                //     } else {
                    //         event.target.style.background = 'orange'
                    //         console.log('incorrect')
                    //     } 
                    
                    // }
                    function checkAnswer(userAnswer, correctAnswer) {
                        if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
                            return true;
                        } else {
                            return false;
                        }   
                    }  
                    function playRound(questionIndex) {
                        console.log('playRound')
                        // console.log(questionIndex)
                        // console.log(questionArray[questionIndex])
                        console.log(questionArray[questionIndex].answers);
                        question.textContent = questionArray[questionIndex].question;
                        
                        for (let i = 0; i < gridItems.length; i++) {
                            gridItems[i].textContent = questionArray[questionIndex].answers[i];
                            
                        }

                        }
                        function select(event) {
                            console.log('click');
                            const clickedItem = event.target;
                            const userAnswer = clickedItem.textContent;
                            const correctAnswer = questionArray[round].correctAnswer;
                            // console.log(clickedItem)
                        if(clickedItem.textContent === correctAnswer) {
                                console.log('Correct');
                                userScore++
                                console.log('score')
                                currentScore.textContent = userScore;
                                clickedItem.style.backgroundColor = 'green';
                        } else {
                                console.log('incorrect');
                                clickedItem.style.backgroundColor = 'orange';
                                }
                        }
                        function showWinPopup() {
                            winPopup.style.display = 'block';
                        }
                        function closeWinPopup() {
                            winPopup.style.display = 'none';
                        }
                        closePopup.addEventListener('click', closeWinPopup);
                        if (playerWinsTheGame) {
                            showWinPopup();
                        }
                 
                    //  function (e) {
                        //     if(e.target.textContent = 'grid-Items')
                        //         return 
                        // };
                        
                        // gridItems.forEach(gridItem)=> 
