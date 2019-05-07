const Decorator = function() {
    this.paint_stock = [];
}



Decorator.prototype.add_paint = function(paint) {
    this.paint_stock.push(paint)
}

Decorator.prototype.amountOfPaintCans = function() {
    return this.paint_stock.length;
}

Decorator.prototype.totalVolumeOfPaint = function() {
    total_volume = 0;
    for(var paint of this.paint_stock){

      paint.volume += total_volume
    }
    return total_volume;
}

module.exports = Decorator;
