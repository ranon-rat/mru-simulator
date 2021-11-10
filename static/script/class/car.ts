export class car {
    velocity: number = 1;
    x: number = 0;
    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        this.movement(ctx, canvas)
    }
    movement(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        this.x += this.velocity;
        ctx.fillStyle = "#000"
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        let image = new Image();
        image.src = "image/car.png"
        ctx.drawImage(image, this.x, canvas.height - 100, 100, 100)
        setTimeout(() => { requestAnimationFrame(this.movement.bind(this, ctx, canvas)) }, 100)

    }
}