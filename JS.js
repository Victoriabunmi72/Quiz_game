// // Define global variables
// let currentQuestion = 0;
// let currentMoney = 0;
// let walkAway = false;
// let timeLeft = 60;
// let timerInterval; // Declare timerInterval in the global scope

// // Defining the questions and answers
// const questions = [
//     {
//         question: "Which programming language is used for building dynamic web applications?",
//         answers: ["HTML", "CSS", "JavaScript", "XML"],
//         correctAnswer: 2
//     },
//     // Add more questions here...
//     {
//         question: "What does CPU stand for in computing?",
//         answers:["Computer Personal Unit", "Central Processing Unit", "Computer Power Utility", "Central Program Utility"],
//         correctAnswer: 1
//     },

//     {
//         question: "Which of the following is not a type of computer memory?",
//         answers:["RAM", "ROM", "CPU", "Cache"],
//         correctAnswer: 3
//     },

//     {
//         question: "What does USB stand for?",
//         answers:["Universal Serial Bus", "Ultra Speed Bandwidth", "Universal Signal Break", "United Server Buffer"],
//         correctAnswer: 0
//     },

//     {
//         question: "Which of the following is not an example of cloud storage service?",
//         answers:["Dropbox","Google Drive", "iCloud", "Microsoft Paint"],
//         correctAnswer: 3
//     },

//     {
//         question: "What is the primary function of a router in a computer network?",
//         answers:["Modulating signals", "Filtering spam emails", "Connecting multiple networks", "Generating encryption keys"],
//         correctAnswer: 2
//     },

//     {
//         question: "Which programming language is primarily used for developing Android apps?",
//         answers:["Java", "Swift", "C#", "Python"],
//         correctAnswer: 0
//     },

//     {
//         question: "Which of the following is not a web browser?",
//         answers:["Firefox", "Chrome", "Safari", "Ubuntu"],
//         correctAnswer: 3
//     },

//     {
//         question: "What type of software is designed to damage, disrupt, or gain unauthorized access to a computer system?",
//         answers:["Firewall", "Antivirus", "Malware", "Encryption software"],
//         correctAnswer: 2
//     },

//     {
//         question: "What is the standard protocol used for secure communication over the internet?",
//         answers:["HTTP", "SMTP", "FTP", "HTTPS"],
//         correctAnswer: 3
//     },

//     {
//         question: "Which of the following is not a programming paradigm?",
//         answers:["Object-Oriented Programming", "Functional Programming", "Procedural Programming", "Dynamic Programming"],
//         correctAnswer: 3
//     },

//     {
//         question: "Which programming language is used for building iOS apps?",
//         answers:["Java", "Objective-C", "Kotlin", "Swift"],
//         correctAnswer: 3
//     },
// ];

// function displayQuestion() {
//     const questionContainer = document.querySelector('.question-container');
//     // const answerContainers = document.querySelectorAll('.answerin p');

//     questionContainer.querySelector('p').textContent = questions[currentQuestion].question;

//     questions[currentQuestion].answers.forEach((answer, index) => {
//         const answerContainer = document.createElement('button')// create each answer container
//         answerContainer.classList.add("")// add classes
//         answerContainer.textContent = `${String.fromCharCode(65 + index)}. ${answer}`;
//         answerContainer.classList.remove('selected-option', 'correct-answer', 'wrong-answer');
//         questionContainer.appendChild(answerContainer);

//         answerContainer.addEventListener('click', () => {
//             console.log('Answer clicked:', index);
//             checkAnswer(index);
//         });


//     });

//     // Setting the timer for the current question
//     startTimer();
// }

// function set5050() {
//     const questionContainer = document.querySelector('.question-container');
//     const randomNumber = Math.floor(Math.random() * 3); // generate a number randomly from 0 to 2
//     const correctAnswer = questions[currentQuestion].correctAnswer
//     const question5050 = [...questions[currentQuestion].answers.filter(item => item !== correctAnswer)];// get all otherr ansewrs apart from the correct answer
//     const answers = shuffle([question5050[randomNumber], correctAnswer])// shuffle the answer to make sure that its not always on the same index
//     // query for the elements containing the answers and use the remove method to remove them and just create new answerContainers with the answers you want
//     //example

//     // answers holds the two element one correctanswer and one wrong one
//     // and for it to work you have to change the structure of your question so the correctAnswer should not be the index but the text for it and in your checkAnswer you will send the text not the index
//     const answerContainer = document.createElement('button') // create the answers like that of the displayQuestion and add eventlistener to it and remember that the set5050 is to work only once in the game same as the as the audience
    




// }
// function shuffle(array) {
//     for (let i = 0; i < array.length; i++){
//         for (let j = 0; j < i; j++){
//             [array[i], array[j]] = [array[j], array[j]]
//         }

//     }
//     return array;
// }

// function askTheAudience() {
//     const num1 = Math.floor(Math.random() * 100);
//     const num2 = Math.floor(Math.random() * (100 - num1));
//     const num3 = Math.floor(Math.random() * (100 - (num1 + num2)));
//     const num4 = 100 - (num1 + num2 + num3);
//     // num1 to num4 are going to be numbers each of them will add up to 100
//     const audiencePercentage = shuffle([num1 + "%", num2 + "%", num3 + "%", num4 + "%"]) // shuffle them 
//     // then get the element you want to use to display them and input each of the into it with the current question answers 
// }

// // Here is the function to start the timer
// function startTimer() {
//     const timerElement = document.querySelector('.timer p');

//     timeLeft = 60;
//     timerElement.textContent = `Time Left: ${timeLeft}s`;

//     // Update, every second
//     timerInterval = setInterval(() => {
//         timeLeft--;
//         timerElement.textContent = `Time Left: ${timeLeft}s`;

//         if (timeLeft === 0) {
//             clearInterval(timerInterval); // To stop the timer if time runs out
//             moveToNextQuestion();
//         }
//     }, 1000);
// }

// // Function to move to the next question
// function moveToNextQuestion() {
//     if (currentQuestion === questions.length - 1) {
//         // End of game
//         gameOver();
//     } else {
//         currentQuestion++;
//         displayQuestion();
//     }
// }j

// // Here, I have the session to handle the answering the questions
// function checkAnswer(selectedIndex) {
//     const correctIndex = questions[currentQuestion].correctAnswer;
//     const answerContainers = document.querySelectorAll('.answerin p');

//     // To stop the timer when an answer is selected
//     clearInterval(timerInterval);

//     if (selectedIndex === correctIndex) {
//         answerContainers[selectedIndex].classList.add('correct-answer');
//         currentMoney += (currentQuestion < 4) ? 1000 : 5000;
//         moveToNextQuestion(); // Move to the next question only if the answer is correct
//     } else {
//         answerContainers[selectedIndex].classList.add('wrong-answer');
//         if (currentQuestion < 4) {
//             currentMoney = 0;
//         }
//         gameOver(); // End the game if the answer is incorrect
//     }
// }
  

// function handleWalkAway() {
//     alert(`You chose to walk away with ₦${currentMoney.toLocaleString()}`);
//     gameOver();
// }

// // This part is to handle the game over
// function gameOver() {
//     alert(`Game Over! You earned ₦${currentMoney.toLocaleString()}`);
// }

// displayQuestion();



 // answerContainer.addEventListener('click', () => {
            //     console.log('Answer clicked:', index);
            //     checkAnswer(index);
            // });