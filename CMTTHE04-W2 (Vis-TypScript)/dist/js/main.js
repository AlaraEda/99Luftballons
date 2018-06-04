var Balloon = (function () {
    function Balloon() {
        var _this = this;
        console.log("ik ben een ballon");
        var screenSize = window.innerWidth * 0.9;
        var randomNumber4 = Math.random() * screenSize;
        var randomNumber3 = Math.random() * 360;
        this.balloon = document.createElement("balloon");
        document.body.appendChild(this.balloon);
        this.balloon.style.left = randomNumber4 + "px";
        this.balloon.style.top = 0 + "px";
        this.balloon.style.webkitFilter = "hue-rotate(" + randomNumber3 + "deg)";
        this.balloon.style.filter = "hue-rotate(" + randomNumber3 + "deg)";
        this.balloon.addEventListener("click", function () { return _this.KapotteBallon(); });
    }
    Balloon.prototype.KapotteBallon = function () {
        console.log("clicked");
        this.balloon.classList.add("dead");
    };
    return Balloon;
}());
var Fish = (function () {
    function Fish() {
        var _this = this;
        console.log("ik ben een fish");
        var screenSize = window.innerWidth * 0.9;
        var screenSize2 = window.innerHeight * 0.8;
        var randomNumber = Math.random() * screenSize;
        var randomNumber2 = Math.random() * screenSize2;
        var randomNumber3 = Math.random() * 360;
        this.vis = document.createElement("fish");
        document.body.appendChild(this.vis);
        this.vis.style.left = randomNumber + "px";
        this.vis.style.top = randomNumber2 + "px";
        this.vis.style.webkitFilter = "hue-rotate(" + randomNumber3 + "deg)";
        this.vis.style.filter = "hue-rotate(" + randomNumber3 + "deg)";
        this.vis.addEventListener("click", function () { return _this.dooieVis(); });
    }
    Fish.prototype.dooieVis = function () {
        console.log("clicked");
        this.vis.classList.add("dead");
    };
    return Fish;
}());
var Game = (function () {
    function Game() {
        var _this = this;
        this.i = 0;
        console.log("Start game");
        for (this.i = 0; this.i < 100; this.i++) {
            setTimeout(function () { return _this.createElements(); }, this.i * 1000);
        }
    }
    Game.prototype.createElements = function () {
        var b = new Balloon();
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
var timer = (function () {
    function timer() {
        var _this = this;
        this.fiveMinutes = 60 * 5;
        this.i = 0;
        this.display = document.querySelector('#time');
        startTimer(this.fiveMinutes, this.display);
        setTimeout(function () { return _this.code(); }, this.i * 1000);
    }
    timer.prototype.code = function () {
        var timer = duration, minutes, seconds;
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        if (--timer < 0) {
            timer = duration;
        }
    };
    return timer;
}());
//# sourceMappingURL=main.js.map