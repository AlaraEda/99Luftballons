class Game {
    timer : Timer
    balloons:Balloon[] = []

    constructor() {
        this.timer = new Timer()                //Maak Timer aan van Timer class.

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

        //Herhaal deze functie.
        requestAnimationFrame(()=>this.gameLoop())
    }
    
}

// Creates new Game instance when page is loaded.
window.addEventListener("load", function () {
    new Game()
});