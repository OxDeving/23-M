document.addEventListener("DOMContentLoaded", function () {
    const startQuizBtn = document.getElementById("startQuizBtn");
    
    startQuizBtn.addEventListener("click", startQuiz);

    function startQuiz() {
        // Definir preguntas y respuestas
        const questions = [
            {
                question: "Quien ama mas?",
                options: ["0. Juan Pablo", "1. Trichito"],
                correctAnswer: 0
            },
            {
                question: "Quien esta mas gorda?",
                options: ["0. Susana", "1. Bobiana"],
                correctAnswer: 1
            },
            {
                question: "No se vale googlear, cuantos dias son 23 meses?",
                options: ["0. 930 días", "1. 570 días", "2. 700 días", "3. 670 días"],
                correctAnswer: 2
            },
            {
                question: "Vamos a tener 23 chesotes en el mes?",
                options: ["0. Si, incluso mas", "1. No, muchos menos"],
                correctAnswer: 0
            },
            {
                question: "Quieres continuar muchos años mas conmigo?",
                options: ["0. No", "1. Si"],
                correctAnswer: 1
            }
        ];

        let currentQuestionIndex = 0;
        let correctAnswers = 0;

        function displayQuestion() {
            const currentQuestion = questions[currentQuestionIndex];

            const answer = prompt(`${currentQuestion.question}\n${currentQuestion.options.join("\n")}`);

            if (answer !== null) {
                const userAnswer = parseInt(answer);
                if (!isNaN(userAnswer) && userAnswer >= 0 && userAnswer < currentQuestion.options.length) {
                    if (userAnswer === currentQuestion.correctAnswer) {
                        correctAnswers++;
                    } else {
                        currentQuestionIndex = 0;
                        correctAnswers = 0;
                        alert("Incorrecto >:c");
                        return;
                    }

                    currentQuestionIndex++;
                    if (currentQuestionIndex === questions.length) {
                        showResults();
                    } else {
                        displayQuestion();
                    }
                } else {
                    alert("Por favor, selecciona una opción válida.");
                }
            }
        }

        function showResults() {
            const resultContainer = document.createElement("div");
            resultContainer.classList.add("result-container");

            const resultText = document.createElement("h2");
            resultText.textContent = "¡Felicidades! Mi amor Has respondido todas las preguntas correctamente, Feliz 23 messiversario.";

            const resultImage = document.createElement("img");
            resultImage.src = "https://media.discordapp.net/attachments/939935764375011328/1202481208739762247/IMG_20231101_003102.jpg?ex=65cd9ce5&is=65bb27e5&hm=40fe684d5cf2c7e8ee1931d5b30d517f3045fb451d2529f3a855739a53651b77&=&format=webp&width=420&height=423";
            resultImage.alt = "Imagen de resultado";

            resultContainer.appendChild(resultText);
            resultContainer.appendChild(resultImage);

            document.body.appendChild(resultContainer);

            // Ocultar el botón de inicio del cuestionario
            startQuizBtn.style.display = "none";
        }
        
        // Iniciar el cuestionario
        displayQuestion();
    }
});
