'use strict';
/*
console.log(document.querySelector('.message').textContent)
document.querySelector('.message').textContent = '🎉 correct number'
document.querySelector('.number').textContent = 10
document.querySelector('.score').textContent = 10
console.log(document.querySelector('.guess').value)
*/
/*
    let num = 20
    num--
    let numb = num - 1
    document.querySelector('.score').textContent = numb
    console.log(numb);
    */

    //for(let i = 0 ; i < 20 ; i++) {
        //document.querySelector('.score').textContent = i
        //let point = 20
        //document.querySelector('.score').textContent = point - 1
    //}
    //else if (guess = '') {
        // document.querySelector('.message').textContent = '⛔ no number'}
    
    // document.querySelector('.score').textContent = point


/*
document.querySelector('.again').addEventListener('click', function(){
    //document.querySelector('.highscore').textContent = score
    if(score > highscore) {
        document.querySelector('.highscore').textContent = score
    }else{
        document.querySelector('.highscore').textContent = highscore
    }
})
*/


/*
for(let i = 20 ; i > 0 ; i--) {
    document.querySelector('.check').addEventListener('click', function(){
        document.querySelector('.score').textContent = i
    })
}*/
// switch(guess){
//     case guess < number : 
//         document.querySelector('.message').textContent = 'number too low'
//     case guess > number :
//         document.querySelector('.message').textContent = 'number too high'
//     case guess === number : document.querySelector('.message').textContent = 'correct answer'
// }
// const ans = math.trunc(math.random() * 20) + 1
// if (guess === ans) {
//     console.log('you win')
// }else {
//     console.log('you lose');
//     }

let number = Math.trunc(Math.random() * 20) + 1
console.log(number);
let score = 20
let highscore = 0
document.querySelector('.check').addEventListener
('click' , function() {
    const guess = Number(document.querySelector('.guess').value)
    if (guess === number) {
        document.querySelector('.message').textContent = 'correct answer' 
        document.querySelector('.number').textContent = guess
        //highscore = score
        if(score > highscore) {
            document.querySelector('.highscore').textContent = score
            highscore = score
        }else{
            document.querySelector('.highscore').textContent = highscore
        }
        document.querySelector('body').style.backgroundColor =   '#60b347'
        document.querySelector('.number').style.width = '30Rem'
    }
    else if (guess !== number) {
        if(score > 1) {
            document.querySelector('.message').textContent = guess > number ? 'number too high' : 'number too low'
            score--
            document.querySelector('.score').textContent = score
        }else{
            document.querySelector('.message').textContent = 'sorry you lose'
        }
    }
/*
    else if (guess > number) {
        if(score > 1) {
            document.querySelector('.message').textContent = 'number too high'
            score--
            document.querySelector('.score').textContent = score
        }else{
            document.querySelector('.message').textContent = 'sorry you lose'
        }
        //document.querySelector('.number').textContent = guess
    }
    else if( guess < number) {
        if(score > 1) {
            document.querySelector('.message').textContent = 'number too low'
            score--
            document.querySelector('.score').textContent = score
        }else{
            document.querySelector('.message').textContent = 'sorry you lose'
        }
        // document.querySelector('.number').textContent = guess
    }
*/
})

document.querySelector('.again').addEventListener('click', function(){
    score = 20
    number = Math.trunc(Math.random() * 20) + 1
    document.querySelector('.message').textContent = 'start guessing...'
    document.querySelector('.number').textContent = '?'
    document.querySelector('.score').textContent = score
    document.querySelector('body').style.backgroundColor = 'black'
    document.querySelector('.number').style.width = '15Rem'
    document.querySelector('.guess').value = ''
    document.querySelector('.highscore').textContent = highscore
})