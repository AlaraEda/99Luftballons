class Game {
    i : number = 0

    constructor() {
        console.log("Start game")

        //Stopt bij 100 visjes & bubbles
        for (this.i = 0; this.i < 3; this.i++) {
            //CreateElements() functie word afgespeeld, per vis die gemaakt word 3 sec pauze. 
            setTimeout(() => this.createElements(), this.i * 300)
        }
    }

    createElements() {
            //let f = new Fish()  //Zorgt ervoor dat er een Fish van de Fish class word gehaald.
            let b = new Bubble() //Zorgt ervoor dat er een bubble van de Bubble class word gehaald.            
    }
    
}

// Creates new Game instance when page is loaded.
window.addEventListener("load", function () {
    new Game()
});