var Balloon = (function () {
    function Balloon() {
        var _this = this;
        this.balloon = document.createElement("balloon");
        document.body.appendChild(this.balloon);
        this.x = Math.random() * window.innerWidth - 40;
        this.y = window.innerHeight + Math.random();
        this.speedX = 0;
        this.speedY = Math.random() * -7;
        this.balloon.addEventListener("click", function () { return _this.kapotteBallon(); });
    }
    Balloon.prototype.update = function () {
        this.x += this.speedX;
        this.y += this.speedY;
        this.balloon.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    Balloon.prototype.kapotteBallon = function () {
        this.balloon.classList.add("dead");
        this.speedY = 2;
    };
    return Balloon;
}());
var Game = (function () {
    function Game() {
        this.balloons = [];
        this.timer = new Timer();
        for (var i = 0; i < 15; i++) {
            this.balloons.push(new Balloon());
        }
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        for (var _i = 0, _a = this.balloons; _i < _a.length; _i++) {
            var b = _a[_i];
            b.update();
        }
        this.timer.update();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
var Timer = (function () {
    function Timer() {
        this.fiveMinutes = 60 * 5;
        this.i = 5000;
        this.div = document.createElement("clock");
        document.body.appendChild(this.div);
        this.div.innerHTML = "Tijd: 500";
    }
    Timer.prototype.update = function () {
        console.log("update de tijd");
        this.div.innerHTML = "Teller " + Math.floor(this.i / 10);
        this.i--;
    };
    return Timer;
}());
//# sourceMappingURL=main.js.map