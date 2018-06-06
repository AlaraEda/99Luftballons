class Balloon {

    private div : HTMLElement
    
    private x : number
    private y: number
    
    private speedX: number
    private speedY: number
    
    constructor() {
        this.div = document.createElement("balloon")
        document.body.appendChild(this.div)
        
        this.x = Math.random() * window.innerWidth
        this.y = window.innerHeight + Math.random() * 700
        this.speedX = 0
        this.speedY = Math.random() * - 7  // te langzaam
    
        this.div.addEventListener("click", ()=> this.kapotteBallon())
    }

    update(){
        
        this.x += this.speedX
        this.y += this.speedY
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)` 
    }

    kapotteBallon(){
        this.div.classList.add("dead")                  //Want in CSS staat de afbeelding van bot vis als .dead
        this.speedY = 2
    }
}