'use strict';
// variables
let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const dispMessage = function(message){
    document.querySelector('.message').textContent = message;
}
//DOM Manipulation
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    //if no number is input
    if(!guess){
        dispMessage('🔴 No Number!');
    }
    // If the guess is correct
    else if( guess == secretNum){
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNum;
        if(score>highScore){
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
        }
    }
    // If the guess is wrong ie low or high 
    else if(guess !== secretNum && score > 0)
    {
        score--;
        document.querySelector('.score').textContent = score;
        document.querySelector('.message').textContent = guess < secretNum ? '⏬ Too Low!' : '⏫ Too High!';
    }
    // if no match found
    if(score == 0)
        document.querySelector('.message').textContent = 'You Lost!';
        
    
})

document.querySelector('.again').addEventListener('click', function(){
    secretNum = Math.trunc(Math.random() * 20) + 1;
    score = 20;

    document.querySelector('.message').textContent = 'Start Guessing.....';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '?';
    document.querySelector('.score').textContent = score;
    

})
