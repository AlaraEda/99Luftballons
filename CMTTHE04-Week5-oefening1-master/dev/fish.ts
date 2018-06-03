class Fish {

    vis:HTMLElement

    //Constructor voert de code uit.
    constructor() {
        console.log("ik ben een fish")

        //(Gekopieerd van Javascript)
        //ScreenSize geeft de lengte en breedte aan van het scherm 
        let screenSize = window.innerWidth * 0.9
        let screenSize2 = window.innerHeight * 0.8

        //(Gekopieerd van Javascript)
        //Math.Random() zorgt voor een getal tussen de 0-1.
        //Door Math.Random() * screensize te doen zorgt Math Random voor een groter getal.
        let randomNumber = Math.random() * screenSize
        let randomNumber2 = Math.random() * screenSize2
        let randomNumber3 = Math.random() * 360

        //Vis creeeren, 'this' verwijst naar vis:HTMLElement
        this.vis = document.createElement("fish")                    //Creert vis in de DOM. de "fish" zit verwerkt in style.css
        document.body.appendChild(this.vis)                          //Zorgt dat de vis in de body van de DOM gestopt word
        //Posities/locaties vis
        this.vis.style.left = randomNumber + "px"
        this.vis.style.top = randomNumber2 + "px"

        //Kleuren van de vis
        this.vis.style.webkitFilter = "hue-rotate("+ randomNumber3+ "deg)"
        this.vis.style.filter = "hue-rotate(" + randomNumber3 + "deg)"   //Binnen  0 - 360
    
    
        //Vissen zijn clickabel
        this.vis.addEventListener("click", ()=> this.dooieVis())

   }

        //dooie vis
        dooieVis(){
        console.log("clicked")
        this.vis.classList.add("dead")                      //Want in CSS staat de afbeelding van bot vis als .dead
                                                            //.dead is het zelfde als "select all elements met de class = "dead"
                                                            //Dus moet je niet.dead maar dead typen tussen de haakjes.
                                                            //Plus je veranderd de vis eigenschap. Dus moet je fishes doen.
        }
 
}