"use strict";
var Ball = (function () {
    function Ball() {
        this.div = document.createElement("ball");
        document.body.appendChild(this.div);
        this.x = window.innerWidth;
        this.y = Math.random() * (window.innerHeight - 100);
        this.speedX = -3 - (Math.random() * 6);
        this.speedY = Math.random() * 6 - 3;
    }
    Ball.prototype.getRectangle = function () {
        return this.div.getBoundingClientRect();
    };
    Ball.prototype.hitPaddle = function () {
        this.speedX *= -1;
    };
    Ball.prototype.update = function () {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.y + this.getRectangle().height > window.innerHeight || this.y < 0) {
            this.speedY *= -1;
        }
        if (this.x > window.innerWidth) {
            this.speedX *= -1;
        }
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Ball;
}());
var Bubble = (function () {
    function Bubble() {
        console.log("ik ben een bubble");
        var screenSize = window.innerWidth * 0.9;
        var screenSize2 = window.innerHeight;
        var randomNumber4 = Math.random() * screenSize;
        var randomNumber5 = Math.random() * screenSize2;
        this.bubbles = document.createElement("bubble");
        document.body.appendChild(this.bubbles);
        this.bubbles.style.left = randomNumber4 + "px";
        this.bubbles.style.top = randomNumber5 + "px";
    }
    return Bubble;
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
var PlayScreen = (function () {
    function PlayScreen(g) {
        var _this = this;
        this.i = 0;
        this.game = g;
        for (this.i = 0; this.i < 100; this.i++) {
            setTimeout(function () { return _this.createElements(); }, this.i * 300);
        }
        createElements();
        {
            var f = new Fish();
            var b = new Bubble();
        }
    }
    return PlayScreen;
}());
var Game = (function () {
    function Game() {
        this.currentscreen = new StartScreen(this);
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.currentscreen.update();
        this.currentscreen.update();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.showPlayScreen = function () {
        document.body.innerHTML = "";
        this.currentscreen = new PlayScreen(this);
    };
    Game.prototype.showGameoverScreen = function () {
        document.body.innerHTML = "";
        this.currentscreen = new GameOver(this);
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var GameOver = (function () {
    function GameOver(g) {
        var _this = this;
        this.game = g;
        this.div = document.createElement("splash");
        document.body.appendChild(this.div);
        this.div.addEventListener("click", function () { return _this.splashClicked(); });
        this.div.innerHTML = "GAME OVER, MAN";
    }
    GameOver.prototype.update = function () {
    };
    GameOver.prototype.splashClicked = function () {
        this.game.showPlayScreen();
    };
    return GameOver;
}());
var Paddle = (function () {
    function Paddle(xp, up, down) {
        var _this = this;
        this.downSpeed = 0;
        this.upSpeed = 0;
        this.div = document.createElement("paddle");
        document.body.appendChild(this.div);
        this.upkey = up;
        this.downkey = down;
        this.x = xp;
        this.y = 200;
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
    }
    Paddle.prototype.getRectangle = function () {
        return this.div.getBoundingClientRect();
    };
    Paddle.prototype.onKeyDown = function (e) {
        switch (e.keyCode) {
            case this.upkey:
                this.upSpeed = 5;
                break;
            case this.downkey:
                this.downSpeed = 5;
                break;
        }
    };
    Paddle.prototype.onKeyUp = function (e) {
        switch (e.keyCode) {
            case this.upkey:
                this.upSpeed = 0;
                break;
            case this.downkey:
                this.downSpeed = 0;
                break;
        }
    };
    Paddle.prototype.update = function () {
        var newY = this.y - this.upSpeed + this.downSpeed;
        if (newY > 0 && newY + 100 < window.innerHeight)
            this.y = newY;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Paddle;
}());
var StartScreen = (function () {
    function StartScreen(g) {
        var _this = this;
        this.game = g;
        this.div = document.createElement("splash");
        document.body.appendChild(this.div);
        this.div.addEventListener("click", function () { return _this.splashClicked(); });
        this.div.innerHTML = "START THE GAME";
    }
    StartScreen.prototype.update = function () {
    };
    StartScreen.prototype.splashClicked = function () {
        this.game.showPlayScreen();
    };
    return StartScreen;
}());
//# sourceMappingURL=main.js.map