class Game {
    timer : Timer
    score : Score
    balloons:Balloon[] = []

    constructor() {
        this.timer = new Timer()                //Maak Timer aan van Timer class.

        this.score = new Score()                //Maakt een nieuw Scoreboard aan.
        //Push nieuwe Balloon
        for (let i = 0; i < 15; i++) {
            this.balloons.push(new Balloon())
        }
        this.gameLoop()
    }
    
    private gameLoop(){
        //Update elke balloon die aangemaakt word.
        for(let b of this.balloons){
            //update staat in balloon.ts
            b.update()
        }

        //Update de timer die staat in time.ts
        this.timer.update()

        //Upate de Scorebord die staat in score.ts
        //this.score.update()
        this.score.update()

        //Herhaal deze functie.
        requestAnimationFrame(()=>this.gameLoop())
    }   
}

// Creates new Game instance when page is loaded.
window.addEventListener("load", function () {
    new Game()
});