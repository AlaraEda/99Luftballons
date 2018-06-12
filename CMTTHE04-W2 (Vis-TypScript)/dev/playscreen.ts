class Playscreen {

    screen : Screens 
    timer : Timer
    score : Score
    balloon:Balloon[] = []

    constructor(s:Screens) {
        //Screen moet een waarde hebben
        this.screen = s
    
        this.timer = new Timer()                //Maak Timer aan van Timer class.
        
        this.score = new Score()                //Maakt een nieuw Scoreboard aan.

        //Push aantal Balloon
        for (let i = 0; i < 20; i++) {
           this.balloon.push(new Balloon())
        }
       this.gameLoop()

    }
    
    private gameLoop(){
        //Update elke balloon die aangemaakt word.
        for(let b of this.balloon){
            //update staat in balloon.ts
            b.update()

            if (b.kapot == true){
                b.kapot = false
                this.score.addScore(10)
            }
     
        }

        //Update de timer die staat in time.ts
        this.timer.update()

        //Upate de Scorebord die staat in score.ts
        this.score.update()

        if(this.timer.finished == true) {
            this.screen.showEndScreen()
            // roep de gameover functie aan van screens

        } else {
            //Herhaal deze functie.
            requestAnimationFrame(()=>this.gameLoop())
        }
    }   
}