export class Car {
  public activated: boolean = false;
  public distance: number;
  public posX: number = 0;
  public velocity: number;

  public currentDistance = document.getElementById("currentDistance")!
  public timeElapsed = document.getElementById("timeElapsed")!


  private readonly carModel: HTMLImageElement = new Image();

  private ctx: CanvasRenderingContext2D;
  private scale: number = 17;


  public constructor(
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
    distance: number,
    velocity: number
  ) {
    this.ctx = context;
    this.ctx.fillStyle = "#000";

    this.distance = distance;
    this.velocity = velocity;

    this.carModel.src = "img/car.png";

    this.updateAnimation(canvas);
  }


  private updateAnimation(canvas: HTMLCanvasElement): void {
    this.ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (this.posX >= this.distance && this.activated) {
      this.activated = false;
      this.velocity = 0;
    }

    if (this.activated) {
      this.currentDistance.setAttribute("value", String(this.posX))
      this.timeElapsed.setAttribute("value", String((this.posX / this.velocity)))
    }


    this.posX += ((this.velocity * (canvas.width / this.distance)) / 100);

    let height: number = ((this.carModel.height / this.scale) / (this.distance / 1000)),
      width: number = ((this.carModel.width / this.scale) / (this.distance / 1000));


    this.ctx.drawImage(
      this.carModel,
      (this.posX - width),
      (canvas.height - height),
      width,
      ((this.carModel.height / this.scale) / (this.distance / 1000))
    );


    setTimeout(() => requestAnimationFrame(this.updateAnimation.bind(this, canvas)), 1); 
  }
}