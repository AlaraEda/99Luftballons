class Score {
    private div: HTMLElement
    

    //Start Score
    private score: number = 0

    //Position Score-bord
    private posX : number = 0
    private posY : number 

    constructor(){
        
        //Creeer scorebord in HTML
        this.div = document.createElement("score")
        document.body.appendChild(this.div)

        //this.div.innerHTML = "Score: "+ this.score
    }

    update(){
        this.div.innerHTML = "Score: " + Math.floor(this.score)

        console.log(this.score)
        
    }


}