const assert = require('assert');
const Paint = require('../paint.js')


describe('Paint', function(){

  let paint;

    beforeEach(function() {
      paint = new Paint(3, true)
    });

    it('should have a volume', function(){
      const actual = paint.volume;
      assert.strictEqual(actual, 3);
    });

    it('should be empty', function(){
      const actual = paint.is_empty;
      assert.strictEqual(actual, true);
    });

    
});
