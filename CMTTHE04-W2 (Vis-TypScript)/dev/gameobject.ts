class GameObject {

    protected div: HTMLElement
    protected screen : Screens

    constructor(s:Screens) {
        
        //screen moet een waarde hebben
        this.screen = s  

        //Lege div is gecreeerd/opgehaald uit style.css
        this.div = document.createElement("start")

        //Een containter is aangemaakt --> containter 0
        let container = document.getElementsByTagName("game")[0]!
        
        //"Start-Text" of "Gameover-Text" is gestopt in container 0
        container.appendChild(this.div)

    }

    public update() {

    }


}