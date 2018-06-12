class Score {
    public scoreboard: HTMLElement
    
    //Start Score
    private score: number = 0

    //Position Score-bord
    private posX : number = 0
    private posY : number

    constructor(){
        //Creeer scorebord in HTML
        this.scoreboard = document.createElement("score")
        document.body.appendChild(this.scoreboard)

        let container = document.getElementsByTagName("game")[0]!
        container.appendChild(this.scoreboard)
    }

    update(){
        //console.log(this.score++)
        this.scoreboard.innerHTML = "Score: " + this.score  
    }

    public addScore(n:number){
        this.score += n
    }
}