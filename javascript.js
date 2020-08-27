//array to store the guesses in.
let guessArray = [];
//stores the number genterated by the random number genrator.
let number;

//function picks a random number between the two values passsed in as aurguments.
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

//event listener for the start button.
document.getElementById('start').addEventListener('click', () => {
  guessArray = [];
  clear();
  document.getElementById('status-h2').innerHTML = '';
  document.getElementById('guess-div').style.display = 'block';
  document.getElementById('start').style.display = 'none';
  document.getElementById('previous-h3').style.display = 'block';
  document.getElementById('guess').value = '';
  document.getElementById('status-h3').innerHTML = 'Make a guess';
  number = getRandomNumber(1, 20);
});

//Add an eventlistener to handle the guess <button className=""></button>
//create a function that gets the value from the input tag.
//Step one use consol log to see if you are getting a value.
//create an if/else statement to deal with the three possible cases.
//case 1 - the guess is to high.
//case 2 - the value is to low.
//case 3- the values are equal.
//Hint, you will need to use some of the functions i have provided to complete this challenge.
document.getElementById('guessButton').addEventListener('click', () => {
  let compareValue = document.getElementById('guess').value;
  if (compareValue > number) {
    document.getElementById('status-h3').innerHTML = 'Your guess is to high';
    previousGuess();
    guessAgain();
  } else if (compareValue < number) {
    document.getElementById('status-h3').innerHTML = 'Your guess is to low';
    previousGuess();
    guessAgain();
  } else {
    guessArray = [];
    clear();
    document.getElementById(
      'status-h2'
    ).innerHTML = `${compareValue} is the correct number, play again ?`;
    document.getElementById('start').style.display = 'block';
    document.getElementById('guess-div').style.display = 'none';
    document.getElementById('previous-h3').style.display = 'none';
  }
});

//Function that prompts the user to make another guess if they are incorrect.
const guessAgain = () => {
  setTimeout(() => {
    document.getElementById('status-h3').innerHTML = 'Guess Again!';
    document.getElementById('guess').value = '';
    document.getElementById('guess').focus();
  }, 1500);
};

//This function adds guesses to an array and prints them to the screen.
const previousGuess = () => {
  let guess = document.getElementById('guess').value;
  let div = document.getElementById('array-div');
  clear();
  if (guess) {
    guessArray.push(guess);
  }
  guessArray.forEach((element) => {
    let p = document.createElement('p');
    p.style.display = 'inline-block';
    p.innerHTML = `${element}, `;
    div.appendChild(p);
  });
};

//removes previous p tags from div.
let clear = () => {
  let guessDiv = document.getElementById('array-div');
  while (guessDiv.hasChildNodes()) {
    guessDiv.removeChild(guessDiv.firstChild);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('guess-div').style.display = 'none';
  document.getElementById('previous-h3').style.display = 'none';
});
