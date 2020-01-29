class Player {
    constructor(ctx, w, h, keys) {
        this.ctx = ctx;
        this.width = w;
        this.height = h;

        this.width = 80;
        this.height = 80;

        this.image = new Image();
        this.image.src = "./Images/link3.gif";

        this.posX = 20;
        this.posY = 10;
        this.keys = keys;

        this.speedX = 3;
        this.speedY = 0;

        this.swords = [];

        this.isCollision = false

        this.setListeners();

    }

    //  onload() {
    //     this.image = new Image();
    //     this.image.src = "./Images/link3.gif";
    // }



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
            this.posX -= 50;

        }

        this.swords.forEach(bullet => bullet.move());
    }

    setListeners() {
        console.log(this.keys)
        document.addEventListener("keydown", e => {

            if (e.keyCode === this.keys.TOP && this.posY > 50) {
                this.posY -= 20;
            }
            if (e.keyCode === this.keys.DOWN && this.posY < 670) {
                this.posY += 20;
            }
            if (e.keyCode === this.keys.RIGHT && this.posX < 1350) {
                this.posX += 20;
            }
            if (e.keyCode === this.keys.LEFT && this.posX > 30) {
                this.posX -= 20;
            }
            if (e.keyCode === this.keys.SPACE) 
            if (e.keyCode === this.keys.THROWSWORD) {//lanzar espada!!

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

    attack() {
         this.swords.push(new Bullets(this.ctx, this.posX, this.posY, this.posY0, this.width, this.height));
    }

    clearSwords() {
        console.log(this.swords);
        this.swords = this.swords.filter(bull => bull.posX <= this.gameWidth);
    }

}