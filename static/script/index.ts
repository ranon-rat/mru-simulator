import {car} from "./class/car.js"
const canvas:HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement;
const ctx:CanvasRenderingContext2D = canvas.getContext('2d')!;
ctx.fillStyle = '#000';

ctx.fillRect(0, 0, canvas.width, canvas.height);
let car1:car=new car(ctx,canvas);