class Timer {
    fiveMinutes = 60 * 5
    i : number = 5000
    div:HTMLElement

    constructor() {
        this.div = document.createElement("clock")
        document.body.appendChild(this.div)
       this.div.innerHTML = "Tijd: 500"
    }
      
    update(){
        console.log("update de tijd");
        this.div.innerHTML = "Teller " + Math.floor(this.i/10)

        this.i--
        
    }
    
 

 
}