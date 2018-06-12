class Timer {
    private clock:HTMLElement

    over: GameOverScreen

    //5 minuten
    private secondes : number = 200

    //Position
    private posX : number = 0
    private posY : number = 0

    public finished:boolean = false

    score: number = 5

    constructor() {
        
        //Creeer Clock in HTML
        this.clock = document.createElement("clock")
        document.body.appendChild(this.clock)

        //Zorg dat er standaard 500 start.
        this.clock.innerHTML = "Tijd: 500"

        //Een container is aangemaakt --> container 0
        let container = document.getElementsByTagName("game")[0]!

        //"Ballonnen-Afbeelding" is gestopt in container 0
        container.appendChild(this.clock)

        //Timer Positie
        this.posX = (innerWidth/2)-150

        //Laat de update van de balloon zien.
        this.clock.style.transform = `translate(${this.posX}px, ${this.posY}px)`


    }
      
    update(){
        this.clock.innerHTML = "Tijd " + Math.floor(this.secondes/50)
        
        //Teller stopt bij 0 
        if (this.secondes > 0){
            //Update dat er elke seconde word afgeteld.
            this.secondes--
        } else{
            //Door gestuurd naar game over screen. 
            this.finished = true
        }
    } 
}