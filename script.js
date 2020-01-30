
window.onload = function () {
    document.getElementById("start-button").onclick = function () {
        document.querySelector(".stage").style.display = "none";
        document.querySelector(".game-canvas").style.display = "flex"
        game.init();
    }
    
}
