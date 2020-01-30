class Walls {
    constructor(ctx, w, h, posX, posY) {
        this.ctx = ctx;
        this.width = w;
        this.height = h;
        this.posX = posX;
        this.posY = posY;
        this.posZ = this.posZ

        this.image = new Image();
        this.image.src = "./Images/wall.xcf";

        //let img = document.getElementById("ice");

    }



    draw() {
        // console.log(this.posX, this.posY, this.width, this.height)
        this.ctx.lineWidth = 10;
        this.ctx.fillStyle = "#B0DADE";
        // this.image = new Image();
        // this.image.src = "./Images/wall.xcf";
        // let textura = this.ctx.createPattern(imagen, 'repeat');
        // this.ctx.fillStyle = textura;
        this.ctx.beginPath();
        this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
        this.ctx.closePath();
        //ctx.drawImage(img, 90, 130, 50, 60, 10, 10, 50, 60);

        // // //downfall
        // this.ctx.beginPath();
        // this.ctx.fillStyle = "#00838F",
        // this.ctx.moveTo(150, 600);
        // this.ctx.lineTo(40, 710);
        // this.ctx.lineTo(430, 710);
        // this.ctx.fill();
        // this.ctx.closePath(); 
    }


}