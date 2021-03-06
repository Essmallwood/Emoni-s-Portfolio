document.addEventListener('DOMContentLoaded', () =>{
    const bird = document.querySelector('.bird')
    const gameDisplay = document.querySelector('.game-container')
    const ground = document.querySelector('.ground')
    
    let birdLeft = 220
    let birdBottom = 100
    let gravity = 2
    let isGameOver = false
    
    function startGame(){
        birdBottom -= gravity
        bird.style.bottom = birdBottom + 'px'
        bird.style.left = birdLeft + 'px'
    }
    
    let gameTimerId = setInterval(startGame, 20)
    
    function control(e){
        if(e.keyCode === 38){
            jump()
        }
    }
    
    
    function jump(){
        if(birdBottom < 440) birdBottom += 50
        bird.style.bottom = birdBottom + 'px'
        console.log(birdBottom)
    }
    
    document.addEventListener('keyup', control)
    
    function generateObstacle(){
    
        let obstacleleft = 500
        let randomHeight = Math.random () * 60
        let obstacleBottom = randomHeight
       const obstacle = document.createElement('div')
     if(!isGameOver) obstacle.classList.add('obstacle')
      gameDisplay.appendChild(obstacle)
      obstacle.style.left = obstacleleft + 'px'
    obstacle.style.bottom = obstacleBottom + 'px'
    
    function moveObstacle(){
        obstacleleft -=2
        obstacle.style.left = obstacleleft + 'px'
       if(obstacleleft === -60){
           clearInterval(timerId)
           gameDisplay.removeChild(obstacle)
       }
       if(
           obstacleleft > 200 && obstacleleft < 280 && birdLeft === 220 &&
           birdBottom < obstacleBottom + 70  ||
           birdBottom === 0
           ) {
           gameOver()
           clearInterval(timerId)
       }
    
    }
    
    let timerId = setInterval(moveObstacle, 20)
    if (!isGameOver) setTimeout(generateObstacle, 3000)
    
    }
    generateObstacle()
    
    
    
    function gameOver(){
        clearInterval(gameTimerId)
        console.log('game over')
        isGameOver = true
        document.removeEventListener('keyup', control)
    }
    
    } )