const assert = require('assert');
const Decorator = require('../decorator.js');
const Paint = require('../paint.js');


describe('Decorator', function(){

  let decorator;
  let paint;


    beforeEach(function() {
      red_paint = new Paint(3, false);
      decorator = new Decorator([]);
    });

    it('should have a empty paint stock', function(){
      const actual = decorator.paint_stock;
      assert.deepStrictEqual(actual, []);
    });

    it('should fill paint bucket', function(){
        decorator.add_paint(red_paint);
        const actual = decorator.amountOfPaintCans();
        assert.strictEqual(actual, 1);
    });


});
