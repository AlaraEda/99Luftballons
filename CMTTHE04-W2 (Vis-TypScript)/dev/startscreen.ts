//Begin Scherm- Start the Game!
class StartScreen {

    private div: HTMLElement
    private screen : Screens


    constructor(s:Screens) {
        console.log("IK BEN EEN START SCREEN");
        
        //screen moet een waarde hebben
        this.screen = s

        

        //Splash element is opgehaald van style.css & verwerkt in index.html
        this.div = document.createElement("start")
        let container = document.getElementsByTagName("game")[0]!
        
        container.appendChild(this.div)

        //Als je klikt word slashClicked functie uitgevoerd.
        this.div.addEventListener("click", ()=>this.startClicked())
        this.div.innerHTML = "START MY GAME"
    }

    //Update functie
    public update(){
    }

    private startClicked() {   
        //Wanneer je klikt, word je doorgestuurd naar game.ts (screens.ts)
        console.log("clicked")
        
        this.screen.showPlayScreen()
    }
}