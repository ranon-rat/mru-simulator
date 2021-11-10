import { car } from "./class/car.js";
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.fillStyle = '#000';
ctx.fillRect(0, 0, canvas.width, canvas.height);
var car1 = new car(ctx, canvas);
