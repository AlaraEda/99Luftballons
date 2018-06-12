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
    }

    update(){
        //console.log(this.score++)
        this.scoreboard.innerHTML = "Score: " + this.score  
    }

    public addScore(n:number){
        this.score += n
    }
    
    //Maak een functie waarbij score weer 0 is.
}