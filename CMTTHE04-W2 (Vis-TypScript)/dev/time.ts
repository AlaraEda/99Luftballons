class Timer {
    private div:HTMLElement

    //5 minuten
    private secondes : number = 30000

    //Position
    private posX : number = 0
    private posY : number = 0

    constructor() {
        //Creeer Clock in HTML
        this.div = document.createElement("clock")
        document.body.appendChild(this.div)

        //Zorg dat er standaard 500 start.
        this.div.innerHTML = "Tijd: 500"

        //Timer Positie
        this.posX = (innerWidth/2)-150

        //Laat de update van de balloon zien.
        this.div.style.transform = `translate(${this.posX}px, ${this.posY}px)`
    }
      
    update(){
        this.div.innerHTML = "Teller " + Math.floor(this.secondes/100)
        
        //Teller stopt bij 0 
        if (this.secondes > 0){
            //Update dat er elke seconde word afgeteld.
            this.secondes--
        }

    }
    
 

 
}