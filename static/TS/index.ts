import { car } from "./models/car.js";

const canvas: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement,
  ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;

const velocity: HTMLInputElement = document.getElementById('velocity') as HTMLInputElement,
  distance: HTMLInputElement = document.getElementById('distance') as HTMLInputElement;


ctx.fillStyle = '#000';
ctx.fillRect(0, 0, canvas.width, canvas.height);
canvas.width = 500;
canvas.height = 400;


let car1: car = new car(ctx, canvas, Number(distance.value), 0);


document.getElementById("changeState")?.addEventListener("click", () => {
  const parked = car1.parked;

  if (!parked) car1.velocity = 0;
  else car1.velocity = Number(velocity.value)

  car1.parked = !parked;
  document.getElementById("changeState")!.innerText = car1.parked ? "Stop" : "Start";
});


velocity.addEventListener('input', (): void => {  
  if (!car1.parked) return;

  car1.velocity = Number(velocity.value);
});


distance.addEventListener('input', () => {
  car1.distance = Number(distance.value);
});