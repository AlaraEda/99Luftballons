class Score {
    public scoreboard: HTMLElement
    
    //Start Score
    public score: number = 0

    //Position Score-bord
    private posX : number = 0
    private posY : number 

    constructor(){

        //Creeer scorebord in HTML
        this.scoreboard = document.createElement("score")
        document.body.appendChild(this.scoreboard)

        //this.div.innerHTML = "Score: "+ this.score
    }

    update(){
        console.log(this.score++)
        this.scoreboard.innerHTML = "Score: " + this.score  
    }
}