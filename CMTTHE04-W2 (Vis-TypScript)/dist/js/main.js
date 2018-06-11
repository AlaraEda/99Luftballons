var Screens = (function () {
    function Screens() {
        this.screen = new StartScreen(this);
        this.gameLoop();
    }
    Screens.prototype.showPlayScreen = function () {
        document.body.innerHTML = "";
        var bg = document.createElement('background');
        document.body.appendChild(bg);
        this.screen = new Playscreen(this);
    };
    Screens.prototype.showEndScreen = function (score) {
        document.body.innerHTML = "";
        this.screen = new GameOverScreen(score);
    };
    Screens.prototype.gameLoop = function () {
        var _this = this;
        this.screen.update();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Screens;
}());
window.addEventListener("load", function () { return new Screens(); });
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
        var text = document.createElement("h1");
        text.innerHTML = "Game Over<br><br>Restart";
        text.classList.add("splash");
        text.addEventListener("click", function () { return _this.Clicked(); });
        document.body.appendChild(text);
        var score = document.createElement("H3");
        score.innerHTML = "Score: " + this.score;
        score.classList.add("endScore");
        document.body.appendChild(score);
    }
    GameOverScreen.prototype.update = function () {
    };
    GameOverScreen.prototype.Clicked = function () {
        this.screens.showPlayScreen();
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
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Playscreen;
}());
window.addEventListener("load", function () {
    new Screens();
});
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
var StartScreen = (function () {
    function StartScreen(s) {
        var _this = this;
        this.screen = s;
        this.div = document.createElement("start");
        document.body.appendChild(this.div);
        this.div.addEventListener("click", function () { return _this.startClicked(); });
        this.div.innerHTML = "START THE GAME";
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
        this.secondes = 300;
        this.posX = 0;
        this.posY = 0;
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
            console.log("Game Over");
        }
        else {
            this.over = new GameOverScreen(this.score);
        }
    };
    return Timer;
}());
//# sourceMappingURL=main.js.map