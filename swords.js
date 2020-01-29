class Swords {
    constructor(ctx, playerPosX, playerPosY, playerPosY0, playerWidth, playerHeight) {
        this.ctx = ctx;
        this.posX = playerPosX + playerWidth;
        this.posY = playerPosY + playerHeight / 2;
        this.playerPosY0 = playerPosY0;
        this.playerHeight = playerHeight;



        this.width = 30;
        this.height = 30;
        this.velX = 10;
        this.velY = 1;

        this.image = new Image();
        this.image.src = "./Images/swordspritesheet.png";


        this.gravity = 1;
    }

    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);


    }

    move() {
        this.posX += this.velX;
        this.posY += this.velY;

        this.velY += this.gravity;

        if (this.posY >= this.playerPosY0 + this.playerHeight) {
            this.velY *= -1;
        }
    }
}