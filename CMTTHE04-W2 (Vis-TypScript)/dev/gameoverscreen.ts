class GameOverScreen {
    //game: Game

    private div: HTMLElement
    screen: Screens
    score: number

    constructor(g: Screens) {
        this.screen = g

        //Click voor nieuw spel
        this.div = document.createElement("start")
        document.body.appendChild(this.div)

        //let text = document.createElement("h1")
        this.div.innerHTML = "Game Over<br><br>Restart"


        this.div.addEventListener("click",()=> this.Clicked())

        //Score op eindscherm.
        let score = document.createElement("H3")
        score.innerHTML = "Score: " + this.score
        score.classList.add("endScore")
        document.body.appendChild(score)
    }
    public update(): void {
    }

    private Clicked() {   
        //Wanneer je klikt, word je doorgestuurd naar game.ts
        //Waarna je doorgestuurd word naar de showPlayScreen() functie.
        this.screen.showPlayScreen()
    }
}