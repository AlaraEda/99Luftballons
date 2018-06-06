class Game {
    timer : Timer
    balloons:Balloon[] = []

    constructor() {
        this.timer = new Timer()
        for (let i = 0; i < 15; i++) {
            this.balloons.push(new Balloon())
        }
        this.gameLoop()
    }
    
    private gameLoop(){
        for(let b of this.balloons){
            b.update()
        }
        this.timer.update()
        requestAnimationFrame(()=>this.gameLoop())
    }
    
}

// Creates new Game instance when page is loaded.
window.addEventListener("load", function () {
    new Game()
});