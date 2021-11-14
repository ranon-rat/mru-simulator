export class car {
  public velocity: number = 40;//meters per second

  private x: number = -100;
  private scale: number = 17;
  distance:number=500;

  constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, velocity: number) {
    this.velocity = velocity;
    this.movement(ctx, canvas);

  }

  public movement(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {
    
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    let image = new Image();
    image.src = "img/car.png"
    
    // esto solo es para escalarlo de mejor manera

    this.x += (this.velocity*(canvas.width/this.distance))/100;// la velocidad esta en metros por segundo , en un segundo hay 100 frames asi que lo divido entre 100 ya que un segundo tiene 1000 milisegundos 
    let height= (image.height / (this.scale))/(this.distance/1000)
    let width=(image.width / (this.scale))/(this.distance/1000)
    
    
    
    ctx.fillStyle = "#000"
    
    
    
    ctx.drawImage(
      image, this.x-width, canvas.height -height,width,
      (image.height / (this.scale))/(this.distance/1000)
    );

    if (this.x > this.distance+width) this.x = -100;

    setTimeout(() => {
      requestAnimationFrame(this.movement.bind(this, ctx, canvas))
    }, 10)

  }

}