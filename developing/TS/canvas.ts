import { Car } from "./models/car.js";

await (async function main() {
  const canvas: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement,
    ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;

  const velocity: HTMLInputElement = document.getElementById('velocity') as HTMLInputElement,
    distance: HTMLInputElement = document.getElementById('distance') as HTMLInputElement;


  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  canvas.width = 500;
  canvas.height = 400;


  let car: Car = new Car(canvas, ctx, Number(distance.value), 0);

  const changeState = document.getElementById("changeState")!,
    restart = document.getElementById("reset")!;


  function changeCarState(force: boolean): void {
    if (force) {
      car.activated = false;
      car.velocity = 0;
    } else {
      car.activated = !car.activated;

      car.activated
        ? car.velocity = Number(velocity.value)
        : car.velocity = 0;
    }


    changeState.innerText = car.activated
      ? "Stop"
      : "Start";
  }


  changeState.addEventListener("click", (): void => changeCarState(false));


  restart.addEventListener("click", (): void => {
    changeCarState(true);

    car.posX = 0;
  });


  velocity.addEventListener('input', (): void => {
    if (car.activated) car.velocity = Number(velocity.value);

  });


  distance.addEventListener('input', (): void => {
    car.distance = Number(distance.value);

  });

})();

export { };