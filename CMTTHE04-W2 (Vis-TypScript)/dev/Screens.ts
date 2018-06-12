
//Alle schermen worden hierin opgeroepen.
class Screens {
    screen: any
    container:HTMLElement
    
    constructor() {
        console.log("ik ben een screens instance");

        this.container = document.createElement("game")
        document.body.appendChild(this.container)
        
        //Variabel "Screen" aanmaken die verwijst naar statscreen.ts class
        this.screen = new StartScreen(this)
    }

    //Word hiernaar toe gestuurd via startscreen.ts
    //Richt je door naar playsreen.ts
    public showPlayScreen(){
        console.log("dit is de showplayscreen functie");
        

        //Dit maakt de body van html leeg, zodat je alleen het achergrond ziet.
        this.container.innerHTML = ""
        
        let bg = document.createElement('background');
        this.container.appendChild(bg);
        
        //"This" is een instance. Doorgestuurd naar "main.ts"
        this.screen = new Playscreen(this)
    }

    // //Word afgespeeld wanneer playscreen.ts is uitgespeeld
    public showEndScreen(){
        //Leegt de screen
        this.container.innerHTML = ""

        //Neemt "score" parameter in zich mee van playscreen.ts
        //Gaat met deze functie naar gameover.ts
       // this.screen = new GameOverScreen(5)
    }

} 

//Laat venster = new game
window.addEventListener("load", () => {
    console.log("create new scfreens");
    
    new Screens()
})
