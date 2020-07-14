var firstNumber = document.querySelector(".first-number");
var twoNumber = document.querySelector(".two-number");
var answer = document.querySelector(".answer");
var containerAnswerChoice = document.querySelector(".container-answer-choice");
var followingExample = document.querySelector(".following-example");
var resultWork = document.querySelector(".result-work");
var showResult = document.querySelector(".show-result");
var containerMultiplicationTable = document.querySelector(".container-multiplication-table")

var dataOption = []
var dataElement = []
var id = ""
var countCorrectAnswer = 0
var countWrongAnswer = 0


followingExample.innerHTML = "Начать."



function colorFollowingExample(){
	followingExample.style.background = "white"
	followingExample.style.color = "black"
}


followingExample.addEventListener("click", function(){

	id = Math.floor(Math.random() * Math.floor(4))
	dataOption = []

	containerAnswerChoice.innerHTML = ""
	answer.innerHTML = ""
	followingExample.innerHTML = "Следующий пример."
	followingExample.style.background = "black"
	followingExample.style.color = "white"

	

	var firstNumberValue = Math.floor(Math.random() * Math.floor(11));
	var twoNumberValue = Math.floor(Math.random() * Math.floor(11));

	firstNumber.innerHTML = firstNumberValue;
	twoNumber.innerHTML = twoNumberValue;

	var result = firstNumberValue * twoNumberValue

	for(var i = 0; i < 4; i++){
		var randomNumber = Math.floor(Math.random() * Math.floor(101))
		var option = document.createElement("div")

		option.classList.add("option")
		containerAnswerChoice.appendChild(option)
		dataOption.push(option)

		if(randomNumber === result){
			option.innerHTML = randomNumber + 1
		} else {
			option.innerHTML = randomNumber
		}
	}

	for(var i = 0; i < dataOption.length; i++){

		dataOption[id].innerHTML = result
		dataOption[id].setAttribute("correct", "yes");

		dataOption[i].addEventListener("click", function(){
			var element = event.target
			element.style.background = "black"
			element.style.color = "white"

				function colorOption(){
					element.style.background = "white"
					element.style.color = "black"
				}

				setTimeout(colorOption, 200)
				
				var count = element.getAttribute("correct")

			if(count === "yes"){
				answer.innerHTML = "Правельно."
				answer.style.color = "green"
				countCorrectAnswer++
			} else {
				answer.innerHTML = "Не правельно."
				answer.style.color = "red"
				countWrongAnswer++
			}
		})
	}

setTimeout(colorFollowingExample, 200)

})

showResult.addEventListener("click", function(){
	showResult.style.background = "black";
	showResult.style.color = "white";
	function hideShowResultButton(){
		showResult.style.display = "none";
		containerMultiplicationTable.style.display = "none";
	}
	setTimeout(hideShowResultButton, 200)
	function createElement(){
		var conteinerCorrectAnswer = document.createElement("div");
		conteinerCorrectAnswer.classList.add("correct-wrong-answer-number");
		resultWork.appendChild(conteinerCorrectAnswer);
		var conteinerWrongAnswer = document.createElement("div");
		conteinerWrongAnswer.classList.add("correct-wrong-answer-number");
		resultWork.appendChild(conteinerWrongAnswer);
		conteinerCorrectAnswer.innerHTML = countCorrectAnswer;
		conteinerCorrectAnswer.style.color = "green";
		conteinerWrongAnswer.innerHTML = countWrongAnswer;
		conteinerWrongAnswer.style.color = "red";
		var restart = document.createElement("div");
		restart.classList.add("restart");
		resultWork.appendChild(restart)
		restart.innerHTML = "Еще раз."

			restart.addEventListener("click", function(){
				restart.style.background = "black"
				restart.style.color = "white"
				function repeat(){
					location.reload()
				}
				setTimeout(repeat, 100)
			})
	}
	setTimeout(createElement, 200)
})

