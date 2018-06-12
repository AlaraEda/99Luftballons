class Balloon {

    private balloon : HTMLElement                                           //Div
    
    private score: Score
    //Ballon positie
    private x : number                                                      //Positie X
    private y: number                                                       //Positie Y
    
    //Ballon Snelheid
    private speedX: number                                                  //Snelheid X-as
    private speedY: number                                                  //Snelheid Y-as
    
    public kapot: boolean = false

    constructor(s: Score) {
        this.score = s
        //Balloon is gecreerd en in de body van Html gestopt.
        this.balloon = document.createElement("balloon")            
        document.body.appendChild(this.balloon)
        
        
        //Een container is aamgemaakt --> container 0
        let container = document.getElementsByTagName("game")[0]!
        
        //"Ballonnen-Afbeelding" is gestopt in container 0
        container.appendChild(this.balloon)

        //Window.InnerWidth = 1014
        //Window.InnerHeight = 708
        this.x = Math.random() * window.innerWidth - 40                     // Random positie in window x-as, -40 zodat het niet op het randje van het scherm zit.
        this.y = window.innerHeight + Math.random()                         // * 700 zorgt ervoor dat de ballonnen lager (buiten het scherm) starten.
        //this.y = 0

        //Snelheid waarop Ballon omhoog gaat. 
        this.speedX = 0                                                     // X snelheid is 0 want de ballon gaat niet naar rechts. 
        //this.speedY = 0
        this.speedY = Math.random() * - 7                                   // Ballon Y snelheid word random besloten.   

        //Kleuren ballon.
        let randomNumber3 = Math.random() * 360
        //this.balloon.style.webkitFilter = "hue-rotate("+ randomNumber3+ "deg)"
        this.balloon.style.filter = "hue-rotate(" + randomNumber3 + "deg)"   //Binnen  0 - 360

        //Wanneer geklikt word op ballon --> knak.
        this.balloon.addEventListener("click", ()=> this.kapotteBallon())
        
    }

    update(){
        this.x += this.speedX                                               // Snelheid ballon X-as is altijd 0 (dus ballon gaat niet naar rechts of links)
        this.y += this.speedY                                               // Snelheid balloon Y-as is altijd random.

        //Laat de update van de balloon zien.
        this.balloon.style.transform = `translate(${this.x}px, ${this.y}px)` 

        //Plafond geraakt--> begin van beneden.
        if (this.y < -100){
            this.y = 708
        }


    }

    kapotteBallon(){
        if (this.kapot == false){
            this.score.addScore(10)
        }
        this.kapot = true                                                   //Verwijzing naar --> playscreen.ts
        this.balloon.classList.add("dead")                                 // Want in CSS staat de afbeelding van geknakte balloon als dood.
        this.speedY = 2                                                    // Snelheid waarmee geknakte ballon valt.
    }
}