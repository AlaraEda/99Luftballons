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
var GameOverScreen = (function () {
    function GameOverScreen(s) {
        var _this = this;
        this.score = s;
        this.div = document.createElement("start");
        document.body.appendChild(this.div);
        this.div.innerHTML = "Game Over<br><br>Restart";
        this.div.addEventListener("click", function () { return _this.Clicked(); });
        var score = document.createElement("H3");
        score.innerHTML = "Score: " + this.score;
        score.classList.add("endScore");
        document.body.appendChild(score);
    }
    GameOverScreen.prototype.update = function () {
    };
    GameOverScreen.prototype.Clicked = function () {
        this.screen.showPlayScreen();
    };
    return GameOverScreen;
}());
var Playscreen = (function () {
    function Playscreen(g) {
        this.balloons = [];
        this.screen = g;
        this.timer = new Timer();
        this.score = new Score();
        for (var i = 0; i < 15; i++) {
            this.balloons.push(new Balloon());
        }
        this.gameLoop();
    }
    Playscreen.prototype.gameLoop = function () {
        var _this = this;
        for (var _i = 0, _a = this.balloons; _i < _a.length; _i++) {
            var b = _a[_i];
            b.update();
        }
        this.timer.update();
        this.score.update();
        if (this.timer.finished == true) {
            this.screen.showEndScreen();
        }
        else {
            requestAnimationFrame(function () { return _this.gameLoop(); });
        }
    };
    return Playscreen;
}());
var Score = (function () {
    function Score() {
        this.score = 0;
        this.posX = 0;
        this.scoreboard = document.createElement("score");
        document.body.appendChild(this.scoreboard);
        this.score++;
    }
    Score.prototype.update = function () {
        this.scoreboard.innerHTML = "Score: " + this.score;
    };
    return Score;
}());
var Screens = (function () {
    function Screens() {
        console.log("ik ben een screens instance");
        this.container = document.createElement("game");
        document.body.appendChild(this.container);
        this.screen = new StartScreen(this);
    }
    Screens.prototype.showPlayScreen = function () {
        console.log("dit is de showplayscreen functie");
        this.container.innerHTML = "";
        var bg = document.createElement('background');
        this.container.appendChild(bg);
        this.screen = new Playscreen(this);
    };
    Screens.prototype.showEndScreen = function () {
        this.container.innerHTML = "";
    };
    return Screens;
}());
window.addEventListener("load", function () {
    console.log("create new scfreens");
    new Screens();
});
var StartScreen = (function () {
    function StartScreen(s) {
        var _this = this;
        console.log("IK BEN EEN START SCREEN");
        this.screen = s;
        this.div = document.createElement("start");
        var container = document.getElementsByTagName("game")[0];
        container.appendChild(this.div);
        this.div.addEventListener("click", function () { return _this.startClicked(); });
        this.div.innerHTML = "START MY GAME";
    }
    StartScreen.prototype.update = function () {
    };
    StartScreen.prototype.startClicked = function () {
        console.log("clicked");
        this.screen.showPlayScreen();
    };
    return StartScreen;
}());
var Timer = (function () {
    function Timer() {
        this.secondes = 300;
        this.posX = 0;
        this.posY = 0;
        this.finished = false;
        this.score = 5;
        this.div = document.createElement("clock");
        document.body.appendChild(this.div);
        this.div.innerHTML = "Tijd: 500";
        this.posX = (innerWidth / 2) - 150;
        this.div.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
    }
    Timer.prototype.update = function () {
        this.div.innerHTML = "Teller " + Math.floor(this.secondes / 100);
        if (this.secondes > 0) {
            this.secondes--;
        }
        else {
            this.finished = true;
        }
    };
    return Timer;
}());
//# sourceMappingURL=main.js.map