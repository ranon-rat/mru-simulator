export class car {
  public velocity: number = 1.5;

  private x: number = -100;
  private scale: number = 17;

  constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, velocity: number) {
    this.velocity = velocity;
    this.movement(ctx, canvas);
  }

  public movement(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {
    let image = new Image();
  
    this.x += this.velocity;
  
    ctx.fillStyle = "#000"
    ctx.fillRect(0, 0, canvas.width, canvas.height)


    image.src = "img/car.png"

    ctx.drawImage(
      image, this.x, canvas.height - image.height / this.scale, image.width / this.scale,
      image.height / this.scale
    );

    if (this.x > 310) this.x = -100;

    setTimeout(() => {
      requestAnimationFrame(this.movement.bind(this, ctx, canvas))
    }, 10)

  }
}