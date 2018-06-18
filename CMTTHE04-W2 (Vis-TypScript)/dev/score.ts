class Score {
    private scoreboard: HTMLElement
    
    //Start Score
    private score: number = 0

    constructor(){
        //Creeer scorebord in HTML
        this.scoreboard = document.createElement("score")
        document.body.appendChild(this.scoreboard)

        let container = document.getElementsByTagName("game")[0]!
        container.appendChild(this.scoreboard)
    }

    public update(){
        //console.log(this.score++)
        this.scoreboard.innerHTML = "Score: " + this.score  
    }

    public addScore(n:number){
        this.score += n
    }

}