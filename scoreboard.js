const scoreboard = {
    ctx: undefined,

     init(ctx) {
             this.ctx = ctx;
             this.ctx.font = "25px Jim Nightshade";
    },
     

         update(score) {
             this.ctx.fillStyle = "yellow";
             console.log(Math.floor(score), "--------------");
             this.ctx.fillText(Math.floor(score), 1300, 25);
         }
}