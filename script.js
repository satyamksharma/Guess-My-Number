'use strict';
// variables
const secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;

//DOM Manipulation
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    //if no number is input
    if(!guess){
        document.querySelector('.message').textContent = '🔴 No Number!';
    }
    // If the guess is correct
    else if( guess == secretNum){
        document.querySelector('.message').textContent = '🎉 Correct Number!';
    }
    //If the guess is too low
    else if(guess < secretNum && score > 0){
        score--;
        document.querySelector('.score').textContent = score;
        document.querySelector('.message').textContent = '⏬ Too Low!';
    }
    // If the guess is high
    else if(guess > secretNum && score > 0){
        score--;
        document.querySelector('.score').textContent = score;
        document.querySelector('.message').textContent = '⏫ Too High!';
    }
    // if no match found
    if(score == 0)
        document.querySelector('.message').textContent = 'You Loose!';
    
})
