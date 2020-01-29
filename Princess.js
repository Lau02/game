class Princess {
    constructor(ctx, w, h) {
        this.ctx = ctx;
        this.width = w;
        this.height = h;


        this.width = 50;
        this.height = 50;
        this.image = new Image();
        this.image.src = "/Images/burger-512.png";

        this.posX = 1300;
        this.posY = 650;

    }


    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
    }

     //llamar si game over

    //    () {
    //         if (this.posX == 1300 && this.posY == 650);
    //         this.posY -= 2;
    //         if (this.posX == 1300 && this.posY >= 770);
    //         this.posX -= 2;
    //     }

        // move() {
        //     if (this.posX == 1300 && this.posY == 650);
        //     this.posY -= 2;
        //     if (this.posX == 1300 && this.posY >= 770);
        //     this.posX -= 2;
        //     this.width += 2;
        //     this.height += 2;
        // }
        // if (this.posX == 1280);
        // this.posY -= 2;
        // this.posX += 2;

    
    // yoyo() {
    //     gsap.to(1.5, {
    //         scale: 1.8,
    //         yoyo: 1,
    //         repeat: -1
    //     });
    // }
}