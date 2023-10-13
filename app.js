const btn = document.querySelector("#btn")
const gridItems = document.querySelectorAll(".grid-item")

const question = document.querySelector("#question")
console.log(question)
question.style.visibility = "hidden"
gridItems.forEach(gridItem => gridItem.style.visibility = "hidden")

// console.log(restart)
function startGame(){
    question.style.visibility = "visible"
    gridItems.forEach(gridItem => gridItem.style.visibility = "visible")
    for (let i = 0; i < 4; i++) {
        playRound(i);
      }
}

btn.addEventListener("click", startGame)


const restart = document.querySelector("#restart")
restart.style.visibility = "hidden"
function restartGame(){
    restart.style.visibility = "visible"
}

const players = {
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
    correctanswer: "color: magenta;"
},
{
    question: "What is the primary purpose of JavaScript?",
    answers:[
        "Defining web page structure",
        "Styling web pages",
        "Creating interactive web content",
        "Maniging database"
    ],
    correctanswer: "Creating interactive web content"
},
{
    question: " numbers = [22,13,34,5,9] sum = 0 for number in numbers: sum += numbers print(sum) ",
    answers:[
        "83",
        "15",
        "89",
        "103"
    ],
    correctanswer: "83"
},
{   
    question: "What is correct way to comment out in HTML?",
    anwsers: [
        "| This is the correct way to comment out in HTML |",
        "// This is the correct way to coment out in HTML",
        " <== This is the correct to comment out in HTML ==> ",
        " <-- This is the correct way to comment out in HTML --> "
    ],
    correctanswer: " <-- This is the correct way to comment out in HTML"
    
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
                    function playRound(questionIndex){
                        // console.log(questionIndex)
                        // console.log(questionArray[questionIndex])
                        console.log(questionArray[questionIndex].answers)
                        question.innerHTML = questionArray[questionIndex].question
                        for (let i = 0; i < gridItems.length; i++) {
                            gridItems[i].textContent = questionArray[questionIndex].answers[i];
                            gridItems[i].addEventListener('click', select);
                            
                        }
                        function select(event) {
                            console.log('click')
                            const clickedItem = event.target;
                            console.log(clickedItem)
                            if(clickedItem.innerHTML === questionArray[questionIndex].correctanswer) {
                                
                                console.log('correct')
                                event.target.style.background = 'green'
                            } else {
                                event.target.style.background = 'orange'
                                console.log('incorrect')
                            } 
                        } 
                    }
                    
                    //  function (e) {
                        //     if(e.target.textContent = 'grid-Items')
                        //         return 
                        // };
                        
                        // gridItems.forEach(gridItem)=> 
                        