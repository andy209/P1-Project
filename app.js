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
    question: "Which of the following is a valid CSS property to chhange color?",
    answers:[
        "font-color: #25555;",
        "text-format: blue;",
        "color: magenta;",
        "text-color: aqua;"
    ],
    correctanswer: "color: blue;"
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
question.innerHTML = questionArray[0].question
// gridItems.for( gridItem => {
//     gridItem.innerHTML
// })
 for(let i = 0; i < gridItems.length; i++) {
 for(let j = 0; j < questionArray[0].answers.length; j++) {
 gridItems[i].innerHTML = questionArray[0].answers[j]
 }
 }
 
