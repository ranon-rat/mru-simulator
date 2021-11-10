export class car {
    public velocity: number = 1.5;
    x: number = 0;
    scale:number=17
    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        this.movement(ctx, canvas)
    }
    public movement(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        this.x += this.velocity;
        ctx.fillStyle = "#000"
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        let image = new Image();
        image.src = "image/car.png"
        
        ctx.drawImage(image, this.x, canvas.height-image.height/this.scale, image.width/this.scale, image.height/this.scale)
        
        setTimeout(() => { requestAnimationFrame(this.movement.bind(this, ctx, canvas)) }, 100)

    }
}