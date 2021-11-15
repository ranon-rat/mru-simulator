export class car {
  public velocity: number = 40; //meters per second

  // El resultado del modelo siempre sera el mismo, así que lo deje así.
  // El readonly para cambiar el valor unicamente durante el constructor.
  private readonly carModel: HTMLImageElement = new Image();

  // Lo agregue aquí para no inicializarlo a cada rato.
  private ctx: CanvasRenderingContext2D;

  private distance: number = 500;
  private scale: number = 17;
  private x: number = -100;


  public constructor(
    context: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    velocity: number
  ) {
    this.velocity = velocity;
    this.carModel.src = "img/car.png";

    this.ctx = context;
    this.ctx.fillStyle = "#000";

    this.updateAnimation(canvas);
  }

  private updateAnimation(canvas: HTMLCanvasElement): void {
    // Esto se podría llegar a actualizar, así que lo deje así.
    this.ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Esto solo es para escalarlo de mejor manera.
    // La velocidad esta en metros por segundo, en un segundo hay 100 frames asi que lo divido entre 100 ya que un segundo tiene 1000 milisegundos.
    this.x += ((this.velocity * (canvas.width / this.distance)) / 100);


    let height: number = ((this.carModel.height / this.scale) / (this.distance / 1000)),
      width: number = ((this.carModel.width / this.scale) / (this.distance / 1000));


    this.ctx.drawImage(
      this.carModel,
      (this.x - width),
      (canvas.height - height),
      width,
      ((this.carModel.height / this.scale) / (this.distance / 1000))
    );


    if (this.x > (this.distance + width)) this.x = -100;


    // Le elimine los "{}"
    setTimeout((): number => requestAnimationFrame(this.updateAnimation.bind(this, canvas)), 10);
  }
}
