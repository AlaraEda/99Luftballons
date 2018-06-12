//Begin Scherm- Start the Game!
class StartScreen {

    private div: HTMLElement
    private screen : Screens

    constructor(s:Screens) {
        console.log("IK BEN EEN START SCREEN");
        
        //screen moet een waarde hebben
        this.screen = s

        //Start-text is in een div gestopt
        this.div = document.createElement("start")

        //Een containter is aangemaakt --> containter 0
        let container = document.getElementsByTagName("game")[0]!
        
        //"Start-Text" is gestopt in container 0
        container.appendChild(this.div)

        //Als je klikt op "Start-Text" --> Clicked functie;
        this.div.addEventListener("click", ()=>this.startClicked())
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