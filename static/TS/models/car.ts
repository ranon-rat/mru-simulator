export class car {
  public velocity: number = 1.5;//meters per second

  private x: number = -100;
  private scale: number = 17;
  distance:number=500;

  constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, velocity: number) {
    this.velocity = velocity;
    this.movement(ctx, canvas);

  }

  public movement(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {
    let image = new Image();
  
    this.x += this.velocity*(canvas.width/this.distance);// con esto simplemente escalo el tamaño del canvas para que tenga sentido
  
    ctx.fillStyle = "#000"
    ctx.fillRect(0, 0, canvas.width, canvas.height)


    image.src = "img/car.png"


    ctx.drawImage(
      image, this.x, canvas.height - image.height / this.scale, (image.width / (this.scale))/(this.distance/1000),
      (image.height / (this.scale))/(this.distance/1000)
    );

    if (this.x > this.distance) this.x = -100;

    setTimeout(() => {
      requestAnimationFrame(this.movement.bind(this, ctx, canvas))
    }, 10)

  }

}