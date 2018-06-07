class Timer {
    div:HTMLElement

    //Aantal secondes
    secondes : number = 300

    constructor() {
        //Creeer Clock in HTML
        this.div = document.createElement("clock")
        document.body.appendChild(this.div)

        //Zorg dat er standaard 500 start.
        this.div.innerHTML = "Tijd: 500"

        if (this.secondes == 0){
            console.log("Stop")
        }
    }
      
    update(){
        this.div.innerHTML = "Teller " + Math.floor(this.secondes/10)
        
        //Update dat er elke seconde word afgeteld.
        this.secondes--
        

    }
    
 

 
}