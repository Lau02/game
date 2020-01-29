window.onload = function () {
    document.getElementById("start-button").onclick = function () {

        startGame();
        //this.enemy.move();
    };

    function startGame() {
        game.init();
    }

};