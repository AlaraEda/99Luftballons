// <reference path="screen.ts"/>
// <reference path="ball.ts"/>

class PlayScreen {

    //private balls: Ball[] = []
   // private paddle: Paddle
    private game: Game

    i : number = 0
    constructor(g:Game) {
        this.game = g
        //this.paddle = new Paddle(20, 87, 83)

        //Stopt bij 100 visjes
        for (this.i = 0; this.i < 100; this.i++) {
            //CreateElements() functie word afgespeeld, per vis die gemaakt word 3 sec pauze. 
            setTimeout(() => this.createElements(), this.i * 300)
        
    }

    createElements() {
        let f = new Fish()  //Zorgt ervoor dat er een Fish van de Fish class word gehaald.
        let b = new Bubble() //Zorgt ervoor dat er een bubble van de Bubble class word gehaald.            
    }

}