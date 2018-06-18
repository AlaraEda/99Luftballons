//Begin Scherm- Start the Game!
///<reference path="gameobject.ts"/>

class StartScreen extends GameObject {

    constructor(s:Screens) {
        console.log("IK BEN EEN STARTtt SCREEN");
        
        super(s)

        //Als je klikt op "Start-Text" --> Clicked functie;
        this.div.addEventListener("click", ()=>this.startClicked())
        
        //Lege div is gevuld met "Start my game'
        this.div.innerHTML = "START MY GAME"
    }

    //Update functie
    public update(){
    }

    private startClicked() {   
        //Wanneer je klikt, word je doorgestuurd naar game.ts (screens.ts)      
        this.screen.showPlayScreen()
    }
}