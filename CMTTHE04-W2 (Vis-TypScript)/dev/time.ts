class timer {
    fiveMinutes = 60 * 5
    i : number = 0
    display = document.querySelector('#time')

    constructor() {
        startTimer(this.fiveMinutes, this.display);
        setTimeout(() => this.code(), this.i * 1000)

    }
      
    code(){
        var timer = duration, minutes, seconds;
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }
    
 

 
}