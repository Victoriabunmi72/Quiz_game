import { questions } from "./JavaScript.js";

// Define global ('variables
let currentQuestion = 0;
const currentMoney = document.querySelector('.current__money');
let walkAway = false;
let timerInterval; // Declare timerInterval inlobal scope



window.addEventListener('click', (e) =>{
    if(e.target.closest('.answer_button')){
        const ansButton = e.target.closest('.answer_button')
        document.querySelector('.question-container').querySelectorAll("button").forEach(for1buttn => for1buttn.disabled = true) 
        checkAnswer(ansButton)
        
    }
    if(e.target.closest("#call50-50")){
        set5050()
        e.target.closest("#call50-50").style.display ="none"

    }
    if(e.target.closest("#callAudience")){
        askTheAudience()
        e.target.closest("#callAudience").style.display ="none"
        document.querySelector(".askAudience").style.top = 10 + "%"
    }
    if(e.target.closest("#theX")){
        document.querySelector(".askAudience").style.top = -100 + "%"
    }
})

function displayQuestion() {
        const questionContainer = document.querySelector('.question-container');
        removeAllButton(questionContainer)
        // const answerContainers = document.querySelectorAll('.answerin p');
    
        questionContainer.querySelector('p').textContent = questions[currentQuestion].question;
    
        questions[currentQuestion].answers.forEach((answer, index) => {
            const answerContainer = document.createElement('button')// create each answer container
            answerContainer.classList.add("answer_button")// add classes
            answerContainer.textContent = answer;
            questionContainer.appendChild(answerContainer);
    
            // answerContainer.addEventListener('click', () => {
            //     console.log('Answer clicked:', index);
            //     checkAnswer(index);
            // });
    
    
     });

}


function checkAnswer(selected) {
        const correctAnswer = questions[currentQuestion].correctAnswer;
        const answerContainers = Array.from(document.querySelectorAll('.answer_button'));
        const progressList = Array.from(document.querySelector('.progress').querySelectorAll('div'))
        const progress = progressList[progressList.length - (1 + currentQuestion)];
    
        // To stop the timer when an answer is selected
    
        if (selected.textContent === correctAnswer) {
            selected.classList.add('correct-answer');
            progress.classList.add('active')
            const filtered = answerContainers.filter(item => item !== selected)
            filtered.forEach(item => item.classList.add('wrong-answer'))
            currentMoney.textContent = `₦ ${parseInt(cleanProgress(currentMoney.textContent)) + parseInt(cleanProgress(progress.textContent))}`
            setTimeout(moveToNextQuestion, 2000)
            console.log(currentQuestion)
            // moveToNextQuestion(); // Move to the next question only if the answer is correct
        } else {
            selected.classList.add('wrong-answer')
            const filtered = answerContainers.find(item => item.innerHTML === correctAnswer)
            filtered.classList.add('correct-answer')
            if (currentQuestion > 4 && currentQuestion <= 9) {
                const amount = progressList.filter(item => progressList.indexOf(item) >= progressList.length - 5)
                const totalAmount  = amount.map(item => {
                    return parseInt(cleanProgress(item.textContent))
                }).reduce((a,b) => a + b)
                console.log(totalAmount)
                 alert('You won ₦' + totalAmount)
            }
            else if (currentQuestion >= 10){
                const amount = progressList.filter(item => progressList.indexOf(item) >= progressList.length - 10)
                const totalAmount = amount.map(item => {
                    return parseInt(cleanProgress(item.textContent))
                }).reduce((a,b) => a + b)
                alert('You won ₦' + totalAmount)
            }
            else {
                currentMoney.textContent = "₦0"
                alert("You won " + currentMoney.textContent)
            }
            setTimeout(gameOver, 2000)
            // gameOver(); // End the game if the answer is incorrect
       }
}

displayQuestion()


function cleanProgress(string){
    const splited = string.split("")
    const cleaned = splited.map(item =>{
       if(!isNaN(item)){
        return item
       }
    })
    return cleaned.join('')
}

// Function to move to the next question
function moveToNextQuestion() {
    if (currentQuestion === questions.length - 1) {
        // when the person scored all
        alert("Congratulations, you won " + document.querySelector(".current__money").innerHTML)
        window.location = "home.html";

    } else {
        currentQuestion++;
        displayQuestion();
    }
}

function removeAllButton(parentContainer){
    const buttonList = Array.from(parentContainer.querySelectorAll('button'))
    buttonList.forEach(item => {
        item.remove()
    })
}

function handleWalkAway() {
    alert(`You chose to walk away with ${currentMoney.textContent}`);
    gameOver();
}

const button = document.querySelector('.walk-away-button')
button.addEventListener('click', handleWalkAway)


// document.getElementById("start-game-btn").addEventListener("click", function() {
//     window.location.href = "index.html";
// });

function set5050() {
       
        const questionContainer = document.querySelector('.question-container');
        removeAllButton(questionContainer)
        const randomNumber = Math.floor(Math.random() * 3);
        const correctAnswer = questions[currentQuestion].correctAnswer
        const question5050 = [...questions[currentQuestion].answers.filter(item => item !== correctAnswer)];
        const answers = shuffle([question5050[randomNumber], correctAnswer])
    
            answers.forEach((answer, index) => {
            const answerContainer = document.createElement('button')
            answerContainer.classList.add("answer_button")// add classes
            answerContainer.textContent = answer;
            questionContainer.appendChild(answerContainer);
})
}
    
    

function gameOver() {
    window.location = "game_over.html"
}

function shuffle(array) {
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < i; j++){
            [array[i], array[j]] = [array[j], array[i]]
        }

    }
    return array;
}

function askTheAudience() {
        const num1 = Math.floor(Math.random() * 101);
        const num2 = Math.floor(Math.random() * (101 - num1));
        const num3 = Math.floor(Math.random() * (101 - (num1 + num2)));
        const num4 = 100 - (num1 + num2 + num3);

        // num1 to num4 are going to be numbers each of them will add up to 100
        const highestNumber = max([num1, num2 , num3, num4])
        let audiencePercentage = shuffle([num1, num2 , num3, num4]) // shuffle them
        // then get the element you want to use to display them and input each of the into it with the current question answers 

        const percentageList = Array.from(document.getElementById("percentage").querySelectorAll("div"))
        const ansewrsList = Array.from(document.getElementById("answers").querySelectorAll("div"))
        audiencePercentage = audiencePercentage.filter(hight => hight !== highestNumber)
        console.log(highestNumber)
    
        const answerOption = shuffle(questions[currentQuestion].answers.filter(hight => hight !== questions[currentQuestion].correctAnswer))
        for( let i = 0; i < audiencePercentage.length; i++){
            percentageList[i].textContent = audiencePercentage[i] + "%"
            ansewrsList[i].textContent = answerOption[i]
        }
        percentageList[percentageList.length - 1 ].textContent = highestNumber + "%"
        ansewrsList[ansewrsList.length - 1].textContent = questions[currentQuestion].correctAnswer
    }

    function max(array) {
        let highest = 0
        for(let i = 0; i < array.length; i++) {
            if(array[i] > highest){
                highest = array[i]
            }
        }
        return highest
    }