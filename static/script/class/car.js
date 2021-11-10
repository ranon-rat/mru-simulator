var car = /** @class */ (function () {
    function car(ctx, canvas) {
        this.velocity = 1.5;
        this.x = 0;
        this.scale = 17;
        this.movement(ctx, canvas);
    }
    car.prototype.movement = function (ctx, canvas) {
        var _this = this;
        this.x += this.velocity;
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        var image = new Image();
        image.src = "image/car.png";
        ctx.drawImage(image, this.x, canvas.height - image.height / this.scale, image.width / this.scale, image.height / this.scale);
        setTimeout(function () { requestAnimationFrame(_this.movement.bind(_this, ctx, canvas)); }, 100);
    };
    return car;
}());
export { car };
