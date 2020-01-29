class Enemy {
    constructor(ctx, w, h, type, initialPositionX, posY) {
        this.ctx = ctx;
        this.Width = w;
        this.Height = h;
        //this.attack = attack;

        this.width = 60;
        this.height = 60;
        // this.image = new Image();
        // this.image.src = "./Images/SkLhgsp.png";

        this.posX = initialPositionX;
        //this.posY = posY;
        this.posY = posY;
        this.posX0 = initialPositionX;

        this.vel = 3;
        this.type = type
        // this.image.frames = 2;
        // this.image.framesIndex = 0;

    }


    // posY() {
    //     if (type === "phantom") {
    //         this.posY = 60;
    //     }
    //     if (type === "warrior") {
    //         this.posY = 700;
    //     }
    // }
    move() {
        switch (this.type) {
            case "phantom":
                if (this.posX < 1260 && this.posY <= 60) {
                    this.posX += this.vel;
                    this.posY = 60
                }
                if (this.posX > 1260) {
                    this.posY += this.vel;
                }
                if (this.posY > 150) {
                    this.posX -= this.vel
                }

                if (this.posX < 100) {
                    this.posY -= this.vel
                }
                break;

            case "warrior":
                if (this.posX  < this.posX0) {
                    this.vel = this.vel*-1
                    //this.posY = 390
                }
                if (this.posX > (this.posX0+350)) {
                    this.vel = this.vel*-1
                }

                this.posX += this.vel
                break;
                
                console.log(this.posX, this.posY)

                // console.log("muevete!")
                // this.posX += this.vel
        }
    }

    //  updateCanvas() {
    //     this.image.move();

    //     ctx.clearRect(0, 0, canvas.width, canvas.height);
    //     this.image.draw();

    // requestAnimationFrame(updateCanvas);


    draw() {
        if (this.type === "phantom") {
            this.image = new Image();
            this.image.src = "./Images/SkLhgsp.png";
        }
        if (this.type === "warrior") {
            this.image = new Image();
            this.image.src = "./Images/warrior.png"
        }


        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
    }


}




// draw(framesCounter) {
//     this.enemy.draw(this.framesCounter);
//     // this.ctx.drawImage(
//     //     this.image,
//     //     this.image.framesIndex * Math.floor(this.image.width / this.image.frames),
//     //     0,
//     //     Math.floor(this.image.width / this.image.frames),
//     //     this.image.height,
//     //     this.posX,
//     //     this.posY,
//     //     this.width,
//     //     this.height
//     // );
//      this.animate(framesCounter);


// animate(framesCounter) {
//     if (framesCounter % 5 == 0) {
//         this.image.framesIndex++;
//     }
//     if (this.image.framesIndex > this.image.frames - 1) {
//         this.image.framesIndex = 0;
//     }
// }

// draw() {
//     this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
// }

// attack() {

// }