class Bubble {

    balloon: HTMLElement

    //Constructor voert de code in het document uit.
    constructor() {
        console.log("ik ben een bubble")

        //Gekopieerd van Javascript
        //Random nummer voor de scherm grootte in breedte en hoogte
        let screenSize = window.innerWidth * 0.9                        //Scherm breedte
        //let screenSize2 = window.innerHeight                            //Scherm hoogte

        //Gekopieerd van Javascript
        let randomNumber4 = Math.random() * screenSize                  //Random getal in Scherm Breedte
        //let randomNumber5 = Math.random() * screenSize2                 //Random getal in Scherm Hoogte

        //Bubbel creeeren
        this.balloon = document.createElement("balloon")                 //Creert bubbel via DOM
        document.body.appendChild(this.balloon)                         //Zorgt dat de bubbel in de body van de DOM bevind

        //Posities/Locaties
        this.balloon.style.left = randomNumber4 + "px"
        this.balloon.style.top = 0 + "px"

        //Vissen zijn clickabel
        this.balloon.addEventListener("click", ()=> this.dooieVis())
    }

            //dooie vis
            dooieVis(){
                console.log("clicked")
                this.balloon.classList.add("dead")                  //Want in CSS staat de afbeelding van bot vis als .dead
                                                                    //.dead is het zelfde als "select all elements met de class = "dead"
                                                                    //Dus moet je niet.dead maar dead typen tussen de haakjes.
                                                                    //Plus je veranderd de vis eigenschap. Dus moet je fishes doen.
        
                }
}