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


    init() {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.setDimensions();
        this.start();
    },


    start() {
        this.reset();
        document.querySelector("#start-button").style.display = "none"

        this.interval = setInterval(() => {
            // if (this.framesCounter > 5000) {
            //     this.framesCounter = 0;
            // }
            this.framesCounter++;
            this.clear();
            this.drawAll();
            this.moveAll();
            //this.player.clearSwords();
            this.checkCollision(this.wallsArr, this.player) ?
                this.player.isCollision = true :
                this.player.isCollision = false;
            //console.log(this.checkCollision(this.wallsArr, this.player))
            //this.framesCounter++

        }, 1000 / this.FPS);
    },

    drawAll() {
        this.background.draw();
        this.player.draw();
        this.enemiesArr.forEach(enemy => enemy.draw())
        this.princess.draw();
        this.wallsArr.forEach((wall) => wall.draw());
        //this.swords.draw();

    },

    moveAll() {
        this.player.move();
        this.enemiesArr.forEach(enemy => enemy.move())
        //this.princess.move();
        //this.swords.move();

    },

    reset() {
        this.background = new Background(this.ctx, this.width, this.height, "./Images/back2.png");
        this.player = new Player(this.ctx, this.width, this.height, this.Keys);
        this.princess = new Princess(this.ctx, this.width, this.height);
        this.walls = new Walls(this.ctx, this.width, this.height);
        this.princess = new Princess(this.ctx, this.width, this.height);
        //this.swords = new Swords(this.ctx, this.width, this.height);
        this.wallsArr = [];
        this.enemiesArr = [];
        this.enemiesArr.push(new Enemy(this.ctx, this.width, this.height, "phantom", 500, 60))
        this.enemiesArr.push(new Enemy(this.ctx, this.width, this.height, "phantom", 200, 60))
        this.enemiesArr.push(new Enemy(this.ctx, this.width, this.height, "phantom", 800, 60))
        this.enemiesArr.push(new Enemy(this.ctx, this.width, this.height, "phantom", 1000, 60))
        this.enemiesArr.push(new Enemy(this.ctx, this.width, this.height, "phantom", 100, 60))
        this.enemiesArr.push(new Enemy(this.ctx, this.width, this.height, "warrior", 100, 390))


        this.generateWalls();
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
        //top wall
        this.wallsArr.push(new Walls(this.ctx, 1260, 30, 100, 30))
        //left wall
        this.wallsArr.push(new Walls(this.ctx, 30, 600, 50, 130))

        //right wall
        this.wallsArr.push(new Walls(this.ctx, 30, 620, 1360, 30))
        //first
        this.wallsArr.push(new Walls(this.ctx, 1100, 30, 160, 120))
        // //second-left
        this.wallsArr.push(new Walls(this.ctx, 560, 30, 800, 230))
        // //second-right
        this.wallsArr.push(new Walls(this.ctx, 600, 30, 80, 230))
        // //third-left
        this.wallsArr.push(new Walls(this.ctx, 970, 30, 80, 330))
        // //third-right
        this.wallsArr.push(new Walls(this.ctx, 140, 30, 1180, 330))
        // //fourth-left
        this.wallsArr.push(new Walls(this.ctx, 600, 30, 80, 450))
        // //fourth-right
        this.wallsArr.push(new Walls(this.ctx, 600, 30, 790, 450))

        // //fifth
        this.wallsArr.push(new Walls(this.ctx, 1200, 30, 180, 570))
        //downfall


        //bottom wall
        this.wallsArr.push(new Walls(this.ctx, 1200, 30, 50, 700))


        //console.log(this.wallsArr)
    },

    checkCollision(arr, player) {
        function isCollision(arr, player) {
            return arr.some(obj => {
                player.posX + player.width >= obj.posX &&
                    player.posY + player.height >= obj.posY &&
                    player.posX <= obj.posX + obj.width &&
                    player.posY <= obj.posY + obj.height;

            });
        }

        return isCollision(arr, player)
    },



    checkCollision(arr, player) {

        function isCollision(arr, player) {
            return arr.some(obs => {
                return (
                    player.posX + player.width >= obs.posX &&
                    player.posY + player.height >= obs.posY &&
                    player.posX <= obs.posX + obs.width &&
                    player.posY <= obs.posY + obs.height
                );
            });
        }
        return isCollision(this.enemiesArr, this.player)
    }

    // gameOver() {
    //     clearInterval(this.interval);
    // }
}