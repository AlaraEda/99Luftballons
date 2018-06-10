//Begin Scherm- Start the Game!
class StartScreen {

    private div: HTMLElement
    private screen : Screens

    constructor(s:Screens) {
       this.screen = s

        //Splash element is opgehaald van style.css & verwerkt in index.html
        this.div = document.createElement("start")
        document.body.appendChild(this.div)

        //Als je klikt word slashClicked functie uitgevoerd.
        this.div.addEventListener("click", ()=>this.startClicked())
        this.div.innerHTML = "START THE GAME"
    }

    //Update functie
    public update(){
    }

    private startClicked() {   
        //Wanneer je klikt, word je doorgestuurd naar game.ts (allScreens.ts)
        this.screen.showPlayScreen()
    }
}