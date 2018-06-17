///<reference path = "gameobject.ts"/>

class GameOverScreen extends GameObject {
    
    constructor(s: Screens) {
        super(s)
    
        //Click voor nieuw spel
        this.div.addEventListener("click",()=> this.Clicked())

        //Lege div gevuld met "Game over"
        this.div.innerHTML = "Game Over Restart"

    }

    public update(): void {

    }

    private Clicked() {   
        //Wanneer je klikt, word je doorgestuurd naar game.ts
        //Waarna je doorgestuurd word naar de showPlayScreen() functie.

        this.screen.showPlayScreen()
    }
}