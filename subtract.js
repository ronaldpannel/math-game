document.addEventListener('DOMContentLoaded', () => {

    const num1 = document.getElementById('num1')
    const num2 = document.getElementById('num2')
    const btn1 = document.getElementById('btn1')
    const btn2 = document.getElementById('btn2')
    const btn3 = document.getElementById('btn3')
    const btn4 = document.getElementById('btn4')
    let btn = document.querySelectorAll('.btn')
    const gameEndText = document.getElementById('gameEndDiv')
    const gameEndMess = document.getElementById('gameEndMess')
    const innerProgBar = document.getElementById('innerProgBar')
    const startBtn = document.getElementById('startBtn')
    const pointsScore = document.getElementById('pointsScore')
    const wrongScore = document.getElementById('wrongScore')
    
    let number1 = Math.floor(Math.random() * 12 +1)
    let number2 = Math.floor(Math.random() * 12 +1)
    let answer = number1 - number2
    let buttonArray = [btn1, btn2, btn3, btn4]
    let state ={
        correctPoints: 10,
        wrongPoints: 3
    }
    
    function setProblem(){
        let number1 = Math.floor(Math.random() * 12 +1)
        let number2 = Math.floor(Math.random() * 12 +1)
        num1.innerText = number1
        num2.innerText = number2
        answer = number1 - number2
        btn1.innerText = Math.floor(Math.random() * 12 +1)
        btn2.innerText = Math.floor(Math.random() * 12 +1)
        btn3.innerText = Math.floor(Math.random() * 12 +1)
        btn4.innerText = Math.floor(Math.random() * 12 +1)
        buttonArray[[Math.floor(Math.random() * 4)]].innerText = answer
    
        if(state.correctPoints === 0){
        gameEndText.style.display = 'block'
        gameEndMess.innerText = 'Well Done You Win'
        gameEndText.classList.add('game-end-animate')
        } else if (state.wrongPoints === 0){
        gameEndText.style.display = 'block'
        gameEndMess.innerText = 'Unlucky Try Again'
        gameEndText.classList.add('game-end-animate')
        }   
        innerProgBar.style.transform = `scaleX(${(state.correctPoints - 10) *.1 })`
        console.log(state.correctPoints)
    }
    
    btn1.addEventListener('click', function(){
        if(parseInt(btn1.innerText) === answer){
            state.correctPoints --
            pointsScore.innerText = state.correctPoints
            setProblem()
        } else if(parseInt(btn1.innerText) !== answer){
            state.wrongPoints --
            wrongScore.innerText = state.wrongPoints
            setProblem()
        }
    })
    btn2.addEventListener('click', function(){
        if(parseInt(btn2.innerText) === answer){
            state.correctPoints --
            pointsScore.innerText = state.correctPoints
            setProblem()
        } else if(parseInt(btn2.innerText) !== answer){
            state.wrongPoints --
            wrongScore.innerText = state.wrongPoints
            setProblem()
        }
    })
    btn3.addEventListener('click', function(){
        if(parseInt(btn3.innerText) === answer){
            state.correctPoints --
            pointsScore.innerText = state.correctPoints
            setProblem()
        } else if(parseInt(btn.innerText) !== answer){
            state.wrongPoints --
            wrongScore.innerText = state.wrongPoints
            setProblem()
        }
    })
    btn4.addEventListener('click', function(){
        if(parseInt(btn4.innerText) === answer){
            state.correctPoints --
            pointsScore.innerText = state.correctPoints
            setProblem()
        } else if(parseInt(btn2.innerText) !== answer){
            state.wrongPoints --
            wrongScore.innerText = state.wrongPoints
            setProblem()
        }
    })
    
    startBtn.addEventListener('click', function(){
        state.correctPoints = 10
        state.wrongPoints = 3
        pointsScore.innerText = 10
        wrongScore. innerText = 3
        gameEndText.style.display = 'none'
        setProblem()  
    })
    
    
        
    })
    