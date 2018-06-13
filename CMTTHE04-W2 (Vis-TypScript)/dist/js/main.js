var Balloon = (function () {
    function Balloon(s) {
        var _this = this;
        this.kapot = false;
        this.score = s;
        this.balloon = document.createElement("balloon");
        document.body.appendChild(this.balloon);
        var container = document.getElementsByTagName("game")[0];
        container.appendChild(this.balloon);
        this.x = Math.random() * window.innerWidth - 40;
        this.y = window.innerHeight + Math.random();
        this.speedX = 0;
        this.speedY = Math.random() * -7;
        var randomNumber3 = Math.random() * 360;
        this.balloon.style.filter = "hue-rotate(" + randomNumber3 + "deg)";
        this.balloon.addEventListener("click", function () { return _this.kapotteBallon(); });
    }
    Balloon.prototype.update = function () {
        this.x += this.speedX;
        this.y += this.speedY;
        this.balloon.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
        if (this.y < -100) {
            this.y = 708;
        }
    };
    Balloon.prototype.kapotteBallon = function () {
        if (this.kapot == false) {
            this.score.addScore(10);
        }
        this.kapot = true;
        this.balloon.classList.add("dead");
        this.speedY = 2;
        if (this.speedY++) {
            console.log("Omlaag");
        }
        if (this.y++) {
            console.log("Lower");
        }
    };
    return Balloon;
}());
var GameOverScreen = (function () {
    function GameOverScreen(s) {
        var _this = this;
        this.screen = s;
        this.div = document.createElement("start");
        var container = document.getElementsByTagName("game")[0];
        container.appendChild(this.div);
        this.div.addEventListener("click", function () { return _this.Clicked(); });
        this.div.innerHTML = "Game Over Restart";
    }
    GameOverScreen.prototype.update = function () {
    };
    GameOverScreen.prototype.Clicked = function () {
        this.screen.showPlayScreen();
    };
    return GameOverScreen;
}());
var Playscreen = (function () {
    function Playscreen(s) {
        this.balloon = [];
        this.screen = s;
        this.timer = new Timer();
        this.score = new Score();
        for (var i = 0; i < 1; i++) {
            this.balloon.push(new Balloon(this.score));
        }
        this.gameLoop();
    }
    Playscreen.prototype.gameLoop = function () {
        var _this = this;
        for (var _i = 0, _a = this.balloon; _i < _a.length; _i++) {
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
        var container = document.getElementsByTagName("game")[0];
        container.appendChild(this.scoreboard);
    }
    Score.prototype.update = function () {
        this.scoreboard.innerHTML = "Score: " + this.score;
    };
    Score.prototype.addScore = function (n) {
        this.score += n;
    };
    return Score;
}());
var Screens = (function () {
    function Screens() {
        this.background = document.createElement("background");
        document.body.appendChild(this.background);
        this.container = document.createElement("game");
        document.body.appendChild(this.container);
        this.screen = new StartScreen(this);
    }
    Screens.prototype.showPlayScreen = function () {
        this.container.innerHTML = "";
        this.screen = new Playscreen(this);
    };
    Screens.prototype.showEndScreen = function () {
        this.container.innerHTML = "";
        this.screen = new GameOverScreen(this);
    };
    return Screens;
}());
window.addEventListener("load", function () {
    console.log("create new screens");
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
        this.screen.showPlayScreen();
    };
    return StartScreen;
}());
var Timer = (function () {
    function Timer() {
        this.secondes = 2000;
        this.posX = 0;
        this.posY = 0;
        this.finished = false;
        this.score = 5;
        this.clock = document.createElement("clock");
        document.body.appendChild(this.clock);
        this.clock.innerHTML = "Tijd: 500";
        var container = document.getElementsByTagName("game")[0];
        container.appendChild(this.clock);
        this.posX = (innerWidth / 2) - 150;
        this.clock.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
    }
    Timer.prototype.update = function () {
        this.clock.innerHTML = "Tijd " + Math.floor(this.secondes / 50);
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