import { car } from "./models/car.js";

let activated: boolean = false;


const canvas: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement,
  ctx: CanvasRenderingContext2D = canvas.getContext('2d')!,
  velocity: HTMLInputElement = document.getElementById('velocity') as HTMLInputElement;

ctx.fillStyle = '#000';
ctx.fillRect(0, 0, canvas.width, canvas.height);
canvas.width=500;
canvas.height=400;

let car1: car = new car(ctx, canvas, 0);


document.getElementById("init")?.addEventListener("click", () => {
  if (activated) car1.velocity = 0;
  else car1.velocity = Number(velocity.value)

  activated = !activated;
  document.getElementById("init")!.innerText=activated?"Stop":"Start";
});


velocity.addEventListener('input', (_: Event): void => {
  if (!activated) return;

  car1.velocity = Number(velocity.value);
});