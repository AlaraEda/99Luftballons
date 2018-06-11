
//Alle schermen worden hierin opgeroepen.
class Screens {
    screen: any
    
    constructor() {
        //Variabel "Screen" aanmaken die verwijst naar statscreen.ts class
        this.screen = new StartScreen(this)

        //Speel gameloop functie af.
        this.gameLoop()        
    }

    //Word hiernaar toe gestuurd via startscreen.ts
    //Richt je door naar playsreen.ts
    public showPlayScreen(){

        //Dit maakt de body van html leeg, zodat je alleen het achergrond ziet.
        document.body.innerHTML = ""
        
        let bg = document.createElement('background');
        document.body.appendChild(bg);
        
        //"This" is een instance. Doorgestuurd naar "main.ts"
         this.screen = new Playscreen(this)
    }

    // //Word afgespeeld wanneer playscreen.ts is uitgespeeld
    public showEndScreen(score:number){
        //Leegt de screen
        document.body.innerHTML = ""

        //Neemt "score" parameter in zich mee van playscreen.ts
        //Gaat met deze functie naar gameover.ts
        this.screen = new GameOverScreen(score)
    }

    private gameLoop():void{
        //Update screen aanroepen
        this.screen.update()

        //update gameloop 60x per seconde
        requestAnimationFrame(() => this.gameLoop())
    }
} 

//Laat venster = new game
window.addEventListener("load", () => new Screens())
