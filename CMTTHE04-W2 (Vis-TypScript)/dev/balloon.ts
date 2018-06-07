class Balloon {

    private balloon : HTMLElement                                           //Div
    
    //Ballon positie
    private x : number                                                      //Positie X
    private y: number                                                       //Positie Y
    
    //Ballon Snelheid
    private speedX: number                                                  //Snelheid X-as
    private speedY: number                                                  //Snelheid Y-as
    
    constructor() {
        //Balloon is gecreerd en in de body van Html gestopt.
        this.balloon = document.createElement("balloon")                
        document.body.appendChild(this.balloon)
        
        //Window.InnerWidth = 1014
        //Window.InnerHeight = 708
        this.x = Math.random() * window.innerWidth - 40                     // Random positie in window x-as, -40 zodat het niet op het randje van het scherm zit.
        this.y = window.innerHeight + Math.random()                         // * 700 zorgt ervoor dat de ballonnen lager (buiten het scherm) starten.

        //Snelheid waarop Ballon omhoog gaat. 
        this.speedX = 0                                                     // X snelheid is 0 want de ballon gaat niet naar rechts. 
        this.speedY = Math.random() * - 7  // te langzaam                   //Ballon Y snelheid word random besloten.
    
        //Wanneer geklikt word op ballon --> knak.
        this.balloon.addEventListener("click", ()=> this.kapotteBallon())
    }

    update(){
        this.x += this.speedX                                               //Snelheid ballon X-as is altijd 0 (dus ballon gaat niet naar rechts of links)
        this.y += this.speedY                                               //Snelheid balloon Y-as is altijd random.

        //Laat de update van de balloon zien.
        this.balloon.style.transform = `translate(${this.x}px, ${this.y}px)` 
    }

    kapotteBallon(){
        this.balloon.classList.add("dead")                                  //Want in CSS staat de afbeelding van geknakte balloon als dood.
        this.speedY = 2                                                     //Snelheid waarmee geknakte ballon valt.
    }
}