class Player {
    constructor(ctx, w, h, keys, wallsArr) {
        this.ctx = ctx;
        this.width = w;
        this.height = h;
        this.wallsArr = wallsArr
        this.width = 40;
        this.height = 40;

        this.image = new Image();
        this.image.src = "./Images/warrior_laura.png";

        this.posX = 20;
        this.posY = 55;
        this.keys = keys;

        this.speedX = 10;
        this.speedY = 0;

        this.gravity = this.posY += 3
        this.live = 3

        this.swords = [];

        this.isCollision = false
        this.collisionSide = undefined

        this.setListeners();

    }



    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
        this.swords.forEach(swords => swords.draw());

    }
    newPos() {
        this.x += this.speedX;
        this.y += this.speedY;
    }

    move() {
        if (this.isCollision === true) {
            console.log("Ha chocao!")
            // this.posX -= 50;

        }

        this.swords.forEach(bullet => bullet.move());
    }

    setListeners() {
        //console.log(this.keys)
        document.addEventListener("keydown", e => {

            if (e.keyCode === this.keys.TOP && this.posY > 50 && this.collisionSide !== "TOP") {
                this.collisionSide = undefined;
                if (this.checkCollision()) {
                    this.collisionSide = "TOP"
                }

                if (this.collisionSide === "TOP") {
                    this.posY = this.posY
                } else {
                    this.posY -= 20;
                }

            }

            if (e.keyCode === this.keys.DOWN && this.posY < 670 && this.collisionSide !== "DOWN") {
                this.collisionSide = undefined;
                if (this.checkCollision()) {
                    this.collisionSide = "DOWN"
                }

                if (this.collisionSide === "DOWN") {
                    this.posY = this.posY
                } else {
                    this.posY += 20;
                }

            }
            if (e.keyCode === this.keys.RIGHT && this.posX < 1350 && this.collisionSide !== "RIGHT") {
                this.collisionSide = undefined;
                if (this.checkCollision()) {
                    this.collisionSide = "RIGHT"
                }

                if (this.collisionSide === "RIGHT") {
                    this.posX = this.posX
                } else {
                    this.posX += 10;
                }
            }
            if (e.keyCode === this.keys.LEFT && this.posX > 30 && this.collisionSide !== "LEFT") {
                this.collisionSide = undefined;
                if (this.checkCollision()) {
                    this.collisionSide = "LEFT"
                }

                if (this.collisionSide === "LEFT") {
                    this.posX = this.posX
                } else {
                    this.posX -= 10;
                }
            }
            if (e.keyCode === this.keys.THROWSWORD) {
                console.log("espada")
                this.attack();//lanzar espada!!
                }
            
            if (e.keyCode === this.keys.JUMP) {
                // if (this.posY >= this.posY0) {
                this.posY -= 10;
                this.posX += 40;
                this.velY -= 8;
                this.gravity += 5;
                
                // }
            }


            // if (e.keyCode === this.keys.JUMP) {
            //     this.posY -=20
            // }
            // switch (e.keyCode) {
            //     case this.keys.TOP:
            //         this.posY -= 20;
            //         console.log("up");
            //         break;
            //     case this.keys.DOWN:
            //         this.posY += 20;
            //         console.log("down");
            //         break;
            //     case this.keys.RIGHT:
            //         this.posX += 20;
            //         console.log("=>");
            //         break;
            //     case this.keys.LEFT:
            //         this.posX -= 20;
            //         console.log("<=");
            //         break;


            // }
        });
    }


    checkCollision = () => {
        return this.wallsArr.some(obs => {
            // debugger
            return (
                this.posX + this.width >= obs.posX &&
                this.posY + this.height >= obs.posY &&
                this.posX <= obs.posX + obs.width &&
                this.posY <= obs.posY + obs.height
            );
        });

    }

    attack() {
        this.swords.push(new Swords(this.ctx, this.posX, this.posY, this.posY0, this.width, this.height));
    }

    clearSwords() {
        //console.log(this.swords);
        this.swords = this.swords.filter(bull => bull.posX <= this.gameWidth);
    }

    live() {
        
    }

}