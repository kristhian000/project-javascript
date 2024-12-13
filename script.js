// Hi

var name = prompt("Hi! what is your name?");
console.log(name);
alert("Hi " + name);

var name_change = document.getElementById("welcome");
name_change.textContent = "Welcome to this webpage " + name;

name_change.style.color = "white";

// background color black
// https://es.stackoverflow.com/questions/351312/cambiar-background-color-seg%C3%BAn-value-html-con-javascript
document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        document.getElementById("themeToggle").textContent = "Light mode";
    }else{
        document.getElementById("themeToggle").textContent = "Dark mode";
    }
})
// Last Js competition random color
document.getElementById("RamdomColor").addEventListener("click", () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for(var i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }

    document.body.style.backgroundColor = color;
})
 
// Fotter section links
// https://www.youtube.com/watch?v=KJbLiV6Y9sY
const footerButton = document.getElementById("footerButton");
const footerContent = document.getElementById("footerContent");


footerButton.addEventListener("click", () => {
    footerContent.classList.toggle("footer-open");
   
    if(footerContent.classList.contains("footer-open")){
    footerButton.textContent = "Hide links";
    }else{
    footerButton.textContent = "Show links";
    }
});



// Game section
// https://www.youtube.com/watch?v=PBcqGxrr9g8
// https://es.stackoverflow.com/questions/303367/como-puedo-hacer-para-poder-jugar-varias-veces-en-mi-juego-de-preguntas
// chat gpt
var questions = [
    {question: "What is Artificial Intelligence?", options: ["A human", "Simulation of human intelligence", "A physical robot"], answer: 1 },
    {question: "Who coined the term 'artificial intelligence'?", options: ["Alan Turing", "John McCarthy", "Elon Musk"], answer: 1 }
];
    
var currentQuestionIndex = 0;
    
function startQuiz(){
    currentQuestionIndex = 0;
    document.getElementById("gameArea").style.display = "block";
    showQuestion();
}
    
function showQuestion(){
    var gameArea = document.getElementById("gameArea");
    var questionData = questions[currentQuestionIndex];
    
    gameArea.innerHTML = "<h3>" + questionData.question + "</h3>";
    for(var i = 0; i < questionData.options.length; i++){
        gameArea.innerHTML += "<button onclick='checkAnswer(" + i + ")'>" + questionData.options[i] + "</button><br>";
    }
}
    
function checkAnswer(selected){
    var gameArea = document.getElementById("gameArea");
    var questionData = questions[currentQuestionIndex];
    
    if(selected === questionData.answer) {
        gameArea.innerHTML += "<p style='color:green;'>Correct!</p>";
    }else{
        gameArea.innerHTML += "<p style='color:red;'>Incorrect. The correct answer is: " +
        questionData.options[questionData.answer] + "</p>";
    }
    
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        setTimeout(showQuestion, 2000);
    }else{
        gameArea.innerHTML += "<p>Game over! Thanks for participating!</p>";
    }
}