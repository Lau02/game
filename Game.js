const game = {
    canvas: undefined,
    ctx: undefined,
    width: undefined,
    height: undefined,
    framesCounter: 0,
    FPS: 60,
    Keys: {
        TOP: 38,
        DOWN: 40,
        LEFT: 37,
        RIGHT: 39,
        JUMP: 32,
        THROWSWORD: 122,
    },
    enemiesArr: undefined,
    score: 0,


    init() {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.setDimensions();
        this.start();
        this.scoreboard.init(this.ctx);
        const music = new Howl({
            src: ["./Sounds/benny.mp3"],
            autoplay: true,
            loop: true,
            volume: 0.5
        });
    },


    start() {
        this.reset();
        // document.querySelector("#start-button").style.display = "none"

        this.interval = setInterval(() => {
            if (this.framesCounter > 5000) {
                this.framesCounter = 0;
            }
            this.framesCounter++;
            this.clear();
            this.drawAll();
            this.moveAll();
            this.player.clearSwords();
            this.checkCollision(this.wallsArr, this.player) ?
                this.player.isCollision = true :
                this.player.isCollision = false;
            //console.log(this.checkCollision(this.wallsArr, this.player))
            //this.framesCounter++
            if (this.checkCollision(this.enemiesArr, this.player)) {
                this.gameOverF()
            }

            // this.checkCollision(this.enemiesArr, this.player)
            //     ? console.log("queee") //this.gameOver.draw() 

            //     //alert("HAS MUERTO!")
            //     : false
            // //this.gameOver.draw();

            if (this.touchBurger(this.burger, this.player)) {
                this.burger.moveWin()
                setTimeout(function () {
                    alert("YOU WIN!!")
                }, 3000)
            }



            this.score += 0.01;
            this.drawScore();

        }, 1000 / this.FPS);
    },

    drawAll() {
        this.background.draw();
        this.player.draw();
        this.enemiesArr.forEach(enemy => enemy.draw())
        this.burger.draw();
        this.wallsArr.forEach((wall) => wall.draw());
        this.swords.draw();


    },

    moveAll() {
        this.player.move();
        this.enemiesArr.forEach(enemy => enemy.move())

        // console.log("player", this.player.posX, this.player.posY)

        // this.wallsArr.forEach((wall, idx) => {

        //     console.log("wall " + idx, wall.posX, wall.posY, wall.width, wall.height)
        // })

        // todo: finish check collision when sprite doesnt have transparency
        // this.checkCollision(this.wallsArr, this.player)


        //this.burger.move();
        this.swords.move();

    },

    reset() {
        this.background = new Background(this.ctx, this.width, this.height, "./Images/back2.png");
        //this.burger = new Burger(this.ctx, this.width, this.height);
        this.walls = new Walls(this.ctx, this.width, this.height);
        this.burger = new Burger(this.ctx, this.width, this.height);
        this.swords = new Swords(this.ctx, this.playerPosX, this.playerPosY, this.playerPosY0, this.playerWidth, this.playerHeight);
        this.wallsArr = [];
        this.generateWalls();
        this.player = new Player(this.ctx, this.width, this.height, this.Keys, this.wallsArr);

        this.enemiesArr = [];

        this.enemiesArr.push(new Enemy(this.ctx, this.width, this.height, "phantom", 500, 60))
        this.enemiesArr.push(new Enemy(this.ctx, this.width, this.height, "phantom", 300, 60))
        this.enemiesArr.push(new Enemy(this.ctx, this.width, this.height, "phantom", 800, 60))
        this.enemiesArr.push(new Enemy(this.ctx, this.width, this.height, "phantom", 1000, 60))
        this.enemiesArr.push(new Enemy(this.ctx, this.width, this.height, "phantom", 100, 60))
        this.enemiesArr.push(new Enemy(this.ctx, this.width, this.height, "warrior", 200, 390))
        //this.enemiesArr.push(new Enemy(this.ctx, this.width, this.height, "1warrior", 800, 390))
        this.enemiesArr.push(new Enemy(this.ctx, this.width, this.height, "soldier", 200, 512))
        this.enemiesArr.push(new Enemy(this.ctx, this.width, this.height, "soldier", 350, 512))
        this.enemiesArr.push(new Enemy(this.ctx, this.width, this.height, "devil", 2000, 270))

        this.enemiesArr.push(new Enemy(this.ctx, this.width, this.height, "devil", 1070, 270))
        this.enemiesArr.push(new Enemy(this.ctx, this.width, this.height, "gost", 1200, 610))

        this.scoreboard = scoreboard;

        this.gameover = new GameOver(this.ctx, 0, 0, this.width, this.height)

    },

    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    },


    setDimensions() {
        this.width = window.innerWidth - 20;
        this.height = window.innerHeight - 30;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    },


    generateWalls() {
        // let coordinates = [
        //     [1260, 20, 100, 30], [20, 600, 50, 130], [20, 620, 1360, 30], [1100, 20, 160, 120], [560, 20, 800, 230], [600, 20, 70, 230],
        //     [970, 20, 70, 330], [140, 20, 1180, 330], [600, 20, 70, 450], [600, 20, 780, 450][1200, 20, 180, 570], 
        //     [1200, 20, 180, 570], [1200, 20, 50, 700]
        // ]

        // coordinates.forEach(coordinate => this.wallsArr.push(new Walls(this.ctx, coordinate[0], coordinate[1], coordinate[2], coordinate[3], coordinate[4],
        //     coordinate[5], coordinate[6], coordinate[7], coordinate[8], coordinate[9], coordinate[10], coordinate[11], coordinate[12], coordinate[13])));

        //top wall
        this.wallsArr.push(new Walls(this.ctx, 1260, 20, 100, 30))
        //left wall
        this.wallsArr.push(new Walls(this.ctx, 20, 570, 50, 130))
        //right wall
        this.wallsArr.push(new Walls(this.ctx, 20, 620, 1360, 30))
        //first
        this.wallsArr.push(new Walls(this.ctx, 450, 20, 800, 120))
        this.wallsArr.push(new Walls(this.ctx, 580, 20, 160, 120))

        //second-right

        this.wallsArr.push(new Walls(this.ctx, 260, 20, 1100, 230))
        //second-left
        this.wallsArr.push(new Walls(this.ctx, 640, 20, 400, 230))
        this.wallsArr.push(new Walls(this.ctx, 260, 20, 70, 230))
        //third-left
        this.wallsArr.push(new Walls(this.ctx, 970, 20, 70, 330))
        //third-right
        this.wallsArr.push(new Walls(this.ctx, 140, 20, 1180, 330))
        //fourth-left
        this.wallsArr.push(new Walls(this.ctx, 600, 20, 70, 450))
        //fourth-right
        this.wallsArr.push(new Walls(this.ctx, 600, 20, 780, 450))
        //fifth
        this.wallsArr.push(new Walls(this.ctx, 270, 20, 410, 570))
        this.wallsArr.push(new Walls(this.ctx, 200, 20, 1100, 570))
        this.wallsArr.push(new Walls(this.ctx, 200, 20, 140, 570))
        this.wallsArr.push(new Walls(this.ctx, 270, 20, 750, 570))

        //downfall
        //bottom wall
        this.wallsArr.push(new Walls(this.ctx, 1200, 20, 50, 700))


        //console.log(this.wallsArr)
    },



    checkCollision(arr, player) {

        function isCollision(arr, player) {
            return arr.some(obs => {
                // debugger
                return (
                    player.posX + player.width >= obs.posX &&
                    player.posY + player.height >= obs.posY &&
                    player.posX <= obs.posX + obs.width &&
                    player.posY <= obs.posY + obs.height
                );
            });
        }
        return isCollision(arr, player)
    },






    touchBurger(obs, player) {
        if (player.posX + player.width >= obs.posX &&
            player.posY + player.height >= obs.posY &&
            player.posX <= obs.posX + obs.width &&
            player.posY <= obs.posY + obs.height) {
            this.burger.moveWin()
            return true
        } else {
            return false
        }
    },



    drawScore() {
        this.scoreboard.update(this.score);
    },

    gameOverF() {
        this.gameover.draw();
        clearInterval(this.interval);
    }

}