class Bubble {

    bubbles: HTMLElement

    //Constructor voert de code in het document uit.
    constructor() {
        console.log("ik ben een bubble")

        //Gekopieerd van Javascript
        //Random nummer voor de scherm grootte in breedte en hoogte
        let screenSize = window.innerWidth * 0.9                        //Scherm breedte
        let screenSize2 = window.innerHeight                            //Scherm hoogte
        //Gekopieerd van Javascript
        let randomNumber4 = Math.random() * screenSize                  //Random getal in Scherm Breedte
        let randomNumber5 = Math.random() * screenSize2                 //Random getal in Scherm Hoogte
        //Bubbel creeeren
        this.bubbles = document.createElement("bubble")                 //Creert bubbel via DOM
        document.body.appendChild(this.bubbles)                         //Zorgt dat de bubbel in de body van de DOM bevind
        //Posities/Locaties
        this.bubbles.style.left = randomNumber4 + "px"
        this.bubbles.style.top = randomNumber5 + "px"


    }
}